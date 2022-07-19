/**
 * 打开数据库
 * @param {object} dbName 数据库的名字
 * @param {string} storeName 仓库名称
 * @param {string} version 所创建的数据库的版本号
 * @return {object} 该函数会返回一个数据库实例
 */

function openDB(dbName, version = 1,storeName,init) {
  return new Promise((resolve, reject) => { //返回promise对象使得可以链式调用
    //  兼容浏览器
    var indexedDB =
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB;
    let db;//用于存储数据库实例
    var shouldInit=false;
    // 打开数据库，若没有则会创建
    const request = indexedDB.open(dbName, version);
    // 数据库打开成功的回调（连接成功或创建成功）
    request.onsuccess = function (event) {
      db = event.target.result; // db数据库对象实例,包含了很多增删查改的操作
      console.log("数据库打开成功");
      if (shouldInit) {
        console.log("数据库初始化......");
        init(db,storeName)
      }
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
      objectStore = db.createObjectStore(storeName, {//概念对应于sql数据库的表的名称
        keyPath: "id", // 指定userID为主键
        // autoIncrement: true // 实现自增
      });
      // 通过主键仅能查询一条数据，通过索引能查询多条满足指定条件的数据，如查询userSex:男
      // 创建索引，在后面查询数据的时候可以根据索引查，若不创建，则只能根据主键来查询
      objectStore.createIndex("id", "id", { unique: true }); // 主键应当唯一，unique
      objectStore.createIndex("type", "type", { unique: false });
      // objectStore.createIndex("planName", "planName", { unique: false });
      // objectStore.createIndex("date", "date", { unique: false });
      // objectStore.createIndex("content", "content", { unique: false });
      shouldInit=true;
    };
  });
}


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
  return new Promise((resolve,reject)=>{
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
          resolve(list)
        }
      } else {
        console.log("分页查询结果", list);
        resolve(list)
      }
    };
    request.onerror = function (e) {
      reject(e)
    };
  })

}


/**
 * 通过主键删除数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {object} id 主键值
 */
 function deleteData(db, storeName, id) {
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

/**
 * 更新数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {object} data 数据
 */
 function updateDB(db, storeName, data) {
  return new Promise((resolve,reject)=>{
    var request = db
    .transaction([storeName], "readwrite") // 事务对象
    .objectStore(storeName) // 仓库对象
    .put(data);//若有该数据则更新该数据，若没有则添加该数据

  request.onsuccess = function () {
    console.log("数据更新成功");
    resolve(true)
  };

  request.onerror = function () {
    console.log("数据更新失败");
    reject(false)
  };
  })

}


/**
 * 通过索引读取数据
 * @param {object} db 数据库实例
 * @param {string} storeName 仓库名称
 * @param {string} indexName 索引名称
 * @param {string} indexValue 索引值
 */
 function getDataByIndex(db, storeName, indexName, indexValue) {
  return new Promise((resolve,reject)=>{
    var store = db.transaction(storeName, "readwrite").objectStore(storeName);
    var request = store.index(indexName).getAll(indexValue);
    request.onerror = function () {
      console.log("事务失败");
    };
    request.onsuccess = function (e) {
      var result = e.target.result;
      console.log("查询结果成功");
      resolve(result)
    };
  })
}

function selectPlans(db,storeName,index_type,value_index,index_start_date,value_start_date,index_end_date,value_end_date){
  return new Promise((resolve,reject)=>{
    var store = db.transaction(storeName, "readwrite").objectStore(storeName); // 仓库对象
    var request = store
      .index(index_type) // 索引对象
      .openCursor(IDBKeyRange.only(value_index)) // 指针对象
      // .getAll();
      .index(index_start_date)
      .openCursor(IDBKeyRange.lowerBound(value_start_date)) // 指针对象
      // .getAll();
      .index(index_end_date)
      .openCursor(IDBKeyRange.upperBound(value_end_date)) // 指针对象
      .getAll();
      request.onsuccess = function (event) {
        console.log("查询成功");
        resolve(request.result)
      }
      request.onerror = function (event) {
        console.log("查询失败");
      };
  })
}