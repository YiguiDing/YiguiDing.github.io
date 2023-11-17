---
title: indexedDB学习笔记
date: 2022-07-17T14:49:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [indexedDB]
# ---article: false---
category: 笔记
---



# indexedDB学习笔记

**特点**

- **存储容量大**
  - IndexedDB主要用来客户端存储大量数据而生的，
  - cookie、localstorage等存储方式都有存储大小限制。
- **非关系型数据库(NoSql)**，以键值对的形式存储数据
- **只能通过主键、索引、游标方式查询数据**
- **持久化存储**，清除浏览器缓存不会清除其数据
  - cookie、localStorage、sessionStorage会清除数据
- **异步操作**，IndexedDB操作时不会锁死浏览器，而localstorage是同步的
- **支持事务transaction**，一系列的操作步骤中，若有一步失败，整个操作都会取消
- **同源策略**，网页只能访问自身域名下的数据库

**重要概念**

- **事务 transaction**
  - 对数据库进行一系列操作时，若有一步失败，则会回滚到最初始的状态，确保数据的一致性
- **仓库 objectStore** ，可以把仓库理解为表
- **索引 index**
  - 可在创建store时创建索引
  - 查询时可通过索引来筛选
  - 插入数据时，索引字段不能为空
- **游标 cursor**
  - 游标是IndexedDB数据库新的概念
  - 概念类似c的指针，
  - 作用类似Python的生成器

## 打开数据库

```js
/**
 * 打开数据库
 * @param {object} dbName 数据库的名字
 * @param {string} storeName 仓库名称
 * @param {string} version 所创建的数据库的版本号
 * @return {object} 该函数会返回一个数据库实例
 */

function openDB(dbName, version = 1) {
  return new Promise((resolve, reject) => { //返回promise对象使得可以链式调用
    //  兼容浏览器
    var indexedDB =
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB;
    let db;//用于存储数据库实例
    // 打开数据库，若没有则会创建
    const request = indexedDB.open(dbName, version);
    // 数据库打开成功的回调（连接成功或创建成功）
    request.onsuccess = function (event) {
      db = event.target.result; // db数据库对象实例,包含了很多增删查改的操作
      console.log("数据库打开成功");
      resolve(db);//返回给外部调用者
    };
    // 数据库打开失败的回调（连接或创建失败）
    request.onerror = function (event) {
      console.log("数据库打开报错");
    };
    // 数据库创建或版本号有更新时候的回调，数据内容的更新不会触发该回调
    request.onupgradeneeded = function (event) {
      // 数据库创建或升级的时候会触发
      console.log("onupgradeneeded");
      db = event.target.result; // 获取数据库对象
      // 创建存储库
      var objectStore;
      objectStore = db.createObjectStore("users", {//概念对应于sql数据库的表的名称
        keyPath: "userID", // 指定userID为主键
        // autoIncrement: true // 实现自增
      });
      // 通过主键仅能查询一条数据，通过索引能查询多条满足指定条件的数据，如查询userSex:男
      // 创建索引，在后面查询数据的时候可以根据索引查，若不创建，则只能根据主键来查询
      objectStore.createIndex("userID", "userID", { unique: true }); // 主键应当唯一，unique
      objectStore.createIndex("userName", "userName", { unique: false }); 
      objectStore.createIndex("userSex", "userSex", { unique: false });
      objectStore.createIndex("userAge", "userAge", { unique: false });
    };
  });
}
```

**使用**

```js

/* 
    由于openDB返回的是promise对象,是异步的，所以这么写是错误的：
        let db = openDB("test",1);
        console.log(db)
*/
// 正确写法应该使用链式方法调用
let db;
openDB("test",1).then((db)=>{ //链式方法调用，并接收值
    db=db
    console.log(db)
    // 后续代码必须写在这个里面，但是也可以使用wait方法将该异步操作变同步操作

    // 后续代码.....



})
    console.log(db); //报错，因为上述的函数返回的是promise对象，是异步的，

```

## 新增数据

```js
/**
 * 新增数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} data 数据 必须是一个对象，必须包含主键、索引
 */
function addData(db, storeName, data) {
  var request = db
    //这里写成了链式调用的形式，也可以不这样写
    //插入数据需要通过事务transaction来操作，
    //事务的第一个参数是一个列表
    .transaction([storeName], "readwrite") // 参数分别是：事务对象（指定表格名称） 和  操作模式（"只读"或"读写"）
    .objectStore(storeName) // 仓库对象
    .add(data);

  request.onsuccess = function (event) {
    console.log("数据写入成功");
  };

  request.onerror = function (event) {
    console.log("数据写入失败");
  };
}
```

**使用**

```js
let data={
    "主键名":"主键值"， //可以使用UUID作为主键值，主键必须存在
    "索引名1":"索引1值",
    "索引名2":"索引2值",
    "索引名3":"索引3值",
    "其他键名":"其他键值" // 可以第一次插入的data有3个键值对，第二次插入的数据有4个键值对，可以不一致
}
addData(db, "storeName", data)

```

## 通过主键读取数据

```js
/**
 * 通过主键读取数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} key 主键值
 */
function getDataByKey(db, storeName, key) {
  return new Promise((resolve, reject) => {
    var transaction = db.transaction([storeName]); // 创建事务
    var objectStore = transaction.objectStore(storeName); // 仓库对象
    var request = objectStore.get(key); // 通过主键获取数据

    request.onerror = function (event) {
      console.log("事务失败");
    };

    request.onsuccess = function (event) {
      console.log("主键查询结果: ", request.result);
      resolve(request.result);
    };
  });
}
```

**使用**

```js

getDataByKey(db, "storeName", "主键值").then((result)=>{
    console.log(result)
})

```

## 通过游标读取数据

```js
/**
 * 通过游标读取数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 */
function cursorGetData(db, storeName) {
  let list = [];
  var store = db
    .transaction(storeName, "readwrite") // 事务
    .objectStore(storeName); // 仓库对象
  var request = store.openCursor(); // 指针对象，初始化一个游标

  // 游标开启成功，逐行读数据
  request.onsuccess = function (e) {
    var cursor = e.target.result;
    if (cursor) {// 必须要检查 因为需要判断是否为游标已经走到了末尾
        // 放入列表；
            // 可以在此通过条件判断来筛选出想要的数据,但这里效率会非常低，因为会遍历所有表项，要想筛选，应该先通过索引来筛选
            //这里没有进行判断，所以获取到的是整张表，但若要想获取整张表 可以用db.transaction().objectStore().getAll()
        list.push(cursor.value); 
        cursor.continue(); // 遍历了存储对象中的所有内容
    } else {
      console.log("游标读取的数据：", list); //获取到值，
      // 这里没有用promise，但是indexedDB本身就是异步的，且这是一个事件处理函数，推测仍然不能使用return，具体如何获取返回值应该可以参考之前的代码
    }
  };
}
```

**使用**

```js

// 因为内部没有写判断条件，所以获取的是整张表的数据
cursorGetData(db, "storeName", "主键值");// 异步函数

```

## 通过索引读取数据

```js
/**
 * 通过索引读取数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 */
function getDataByIndex(db, storeName, indexName, indexValue) {
  var store = db.transaction(storeName, "readwrite").objectStore(storeName);
  var request = store.index(indexName).get(indexValue);
  request.onerror = function () {
    console.log("事务失败");
  };
  request.onsuccess = function (e) {
    var result = e.target.result;
    console.log("索引查询结果：", result);
  };
}
```

**使用**

```js

// 获取的是第一条满足条件的数据
getDataByIndex(db, "storeName", "索引键名", "索引键值");// 异步函数

```

## 通过索引和游标查询记录

```js
/**
 * 通过索引和游标查询记录
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 */
function cursorGetDataByIndex(db, storeName, indexName, indexValue) {
  let list = [];
  var store = db.transaction(storeName, "readwrite").objectStore(storeName); // 仓库对象
  var request = store
    .index(indexName) // 索引对象
    .openCursor( 
        IDBKeyRange.only(indexValue) //表示查询所有值等于(only) indexValue的游标
        ); //此时拿到的游标就是索引为指定值的表项了
  request.onsuccess = function (e) {
    var cursor = e.target.result;
    if (cursor) { // 必须要检查
      list.push(cursor.value);
      cursor.continue(); // 遍历了存储对象中的所有内容
    } else {
      console.log("游标索引查询结果：", list);
    }
  };
  request.onerror = function (e) {};
}
```

**使用**

```js

// 获取的是所有满足条件的数据
getDataByIndex(db, "storeName", "索引键名", "索引键值");// 异步函数

// 获取所有age=5的表项
getDataByIndex(db, "storeName", "age", "5");// 异步函数

```

## 通过索引和游标分页查询记录

如果一个数据库有十万条数据，浏览器的页面不可能全部渲染出来，需要做成分页的形式，点击第几页再渲染第几页的内容

- advance 该函数可以让我们的游标跳过多少条开始查询。

```js
/**
 * 通过索引和游标分页查询记录
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 * @param {number} page 页码
 * @param {number} pageSize 查询条数
 */
function cursorGetDataByIndexAndPage(
  db,
  storeName,
  indexName,
  indexValue,
  page,//查询的是第几页的内容，从1开始
  pageSize
) {
  let list = [];
  let counter = 0; // 计数器
  let advanced = true; // 是否跳过多少条查询
  var store = db.transaction(storeName, "readwrite").objectStore(storeName); // 仓库对象
  var request = store
    .index(indexName) // 索引对象
    .openCursor(IDBKeyRange.only(indexValue)); // 指针对象
  request.onsuccess = function (e) {
    var cursor = e.target.result;
    if (page > 1 && advanced) { //判断是否需要跳过多少条开始查询，其实判断page>=1也可以
      advanced = false;
      cursor.advance((page - 1) * pageSize); // 跳过多少条
      return;
    }
    if (cursor) {
      // 必须要检查
      list.push(cursor.value);
      counter++;
      if (counter < pageSize) {
        cursor.continue(); // 遍历了存储对象中的所有内容
      } else {
        cursor = null;
        console.log("分页查询结果", list);
      }
    } else {
      console.log("分页查询结果", list);
    }
  };
  request.onerror = function (e) {};
}
```

**使用**

```js

// 获取的是所有满足条件的数据的指定页码的指定条数
cursorGetDataByIndexAndPage(db, "storeName", "索引键名", "索引键值",页码，条数);

// 获取的是age=5的第二页中的数据，每页有10条数据
getDataByIndex(db, "storeName", "age", "5",2,10);

```

## 更新数据

```js
/**
 * 更新数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {object} data 数据
 */
function updateDB(db, storeName, data) {
  var request = db
    .transaction([storeName], "readwrite") // 事务对象
    .objectStore(storeName) // 仓库对象
    .put(data);//若有该数据则更新该数据，若没有则添加该数据

  request.onsuccess = function () {
    console.log("数据更新成功");
  };

  request.onerror = function () {
    console.log("数据更新失败");
  };
}
```

## 通过主键删除数据

```js
/**
 * 通过主键删除数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {object} id 主键值
 */
function deleteDB(db, storeName, id) {
  var request = db
    .transaction([storeName], "readwrite")
    .objectStore(storeName)
    .delete(id);

  request.onsuccess = function () {
    console.log("数据删除成功");
  };

  request.onerror = function () {
    console.log("数据删除失败");
  };
}
```

## 通过索引和游标删除指定的数据

```js
/**
 * 通过索引和游标删除指定的数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexName 索引名
 * @param {object} indexValue 索引值
 */
function cursorDelete(db, storeName, indexName, indexValue) {
  var store = db.transaction(storeName, "readwrite").objectStore(storeName);
  var request = store
    .index(indexName) // 索引对象
    .openCursor(IDBKeyRange.only(indexValue)); // 指针对象
  request.onsuccess = function (e) {
    var cursor = e.target.result;
    var deleteRequest;
    if (cursor) {
      deleteRequest = cursor.delete(); // 请求删除当前项
      deleteRequest.onerror = function () {
        console.log("游标删除该记录失败");
      };
      deleteRequest.onsuccess = function () {
        console.log("游标删除该记录成功");
      };
      cursor.continue(); //游标移动到下一个，以便删除所有匹配数据
    }
  };
  request.onerror = function (e) {};
}
```

## 关闭数据库

```js
/**
 * 关闭数据库
 * @param {object} db 数据库实例
 */
function closeDB(db) {
  db.close();
  console.log("数据库已关闭");
}
```

## 删除数据库

```js
/**
 * 删除数据库
 * @param {object} dbName 数据库名称
 */
function deleteDBAll(dbName) {
  console.log(dbName);
  let deleteRequest = window.indexedDB.deleteDatabase(dbName);
  deleteRequest.onerror = function (event) {
    console.log("删除失败");
  };
  deleteRequest.onsuccess = function (event) {
    console.log("删除成功");
  };
}
```
