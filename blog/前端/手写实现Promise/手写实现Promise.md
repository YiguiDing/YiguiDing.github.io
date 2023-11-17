---
title: 手写实现Promise
date: 2022-07-25T01:32:00+08:00
# top: 10
cover: ./cover/default_cover.jpg
# coverWidth: 1920
# coverHeight: 1080
tag: [Promise,js,demo]
# ---article: false---
category: 笔记
---


## 基本结构搭建

```js
//1. 声明构造函数
    function Promise(executor){

    }
//2. 添加then方法
    Promise.prototype.then = function(onResolved,onRejected){

    }
    // let p = new Promise((resolve,reject)=>{
    //     resolve("OK")
    // })
    // p.then((value)=>{
    //     console.log(value)
    // })
```

## resolve与reject函数的结构搭建

```js
//声明构造函数
function Promise(executor){

//1. 执行器函数executor在构造函数中是同步调用的:
    // executor();

//2. 执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
    executor(resolve,reject);


//3. resolve()是一个函数，应当有一个形式参数
    function resolve(data){

    }
//4. reject()是一个函数，应当有一个形式参数
    function reject(data){

    }

}
//添加then方法
Promise.prototype.then = function(onResolved,onRejected){

}
// let p = new Promise((resolve,reject)=>{
//     resolve("OK")
// })
// p.then((value)=>{
//     console.log(value)
// })
```

## resolve函数与reject函数的实现

```js
//声明构造函数
function Promise(executor){
//0. 添加属性
    this.PromsieState = 'pending';
    this.PromsieResult = null ;
//1. 保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
    const self = this;//self _this that

    //执行器函数executor在构造函数中是同步调用的:
    // executor();

    //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
    executor(resolve,reject);


    //resolve()是一个函数，应当有一个形式参数
    function resolve(data){
//2. 修改实例化对象的状态值(属性名：promiseState)
        self.PromsieState = "fulfilled"
//3. 修改实例化对象的结果值(属性名：promiseResult)
        self.PromsieResult = data;
    }
    //reject()是一个函数，应当有一个形式参数
    function reject(data){
//4. reject()函数同resolve一样
        self.PromsieState = "rejected"
        self.PromsieResult = data;
    }
}
//添加then方法
Promise.prototype.then = function(onResolved,onRejected){

}
// let p = new Promise((resolve,reject)=>{
//     resolve("OK")
// })
// console.log(p)
// p.then((value)=>{
//     console.log(value)
// })
```

## 实现异常处理

执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常

```js
//声明构造函数
function Promise(executor){
    //添加属性
    this.PromsieState = 'pending';
    this.PromsieResult = null ;
    //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
    const self = this;//self _this that

    //执行器函数executor在构造函数中是同步调用的:
    // executor();

    //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
    // executor(resolve,reject);

// 0. 异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
    try{
        executor(resolve,reject);
    }catch(error){
        reject(error)
    }


    //resolve()是一个函数，应当有一个形式参数
    function resolve(data){
        //修改实例化对象的状态值(属性名：promiseState)
        self.PromsieState = "fulfilled"
        //修改实例化对象的结果值(属性名：promiseResult)
        self.PromsieResult = data;
    }
    //reject()是一个函数，应当有一个形式参数
    function reject(data){
        //reject()函数同resolve一样
        self.PromsieState = "rejected"
        self.PromsieResult = data;
    }
}
//添加then方法
Promise.prototype.then = function(onResolved,onRejected){

}
// let p = new Promise((resolve,reject)=>{
//     resolve("OK")
// })
// console.log(p)
// p.then((value)=>{
//     console.log(value)
// })
```

## 实现状态只能修改一次

执行器中的代码应该只能在第一次调用`resolve()`或`reject()`时修改**状态**和**结果**值，实现该功能只需在修改 **状态** 前判断其是否为初始值

```js
//声明构造函数
function Promise(executor){
    //添加属性
    this.PromsieState = 'pending';
    this.PromsieResult = null ;
    //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
    const self = this;//self _this that

    //执行器函数executor在构造函数中是同步调用的:
    // executor();

    //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
    // executor(resolve,reject);

    //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
    try{
        //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
        executor(resolve,reject);
    }catch(error){
        reject(error)
    }


    //resolve()是一个函数，应当有一个形式参数
    function resolve(data){
        //0. 实现状态只能修改一次：判断状态是否为初始状态
        if (self.PromsieState !=="pending") return;
        
        //修改实例化对象的状态值(属性名：promiseState)
        self.PromsieState = "fulfilled"
        //修改实例化对象的结果值(属性名：promiseResult)
        self.PromsieResult = data;
    }
    //reject()是一个函数，应当有一个形式参数
    function reject(data){
//1. 实现状态只能修改一次：判断状态是否为初始状态
        if (self.PromsieState !=="pending") return;
        
        //reject()函数同resolve一样
        self.PromsieState = "rejected"
        self.PromsieResult = data;
    }
}
//添加then方法
Promise.prototype.then = function(onResolved,onRejected){

}
let p = new Promise((resolve,reject)=>{
    resolve("OK")
})
console.log(p)
p.then((value)=>{
    console.log(value)
})
```

## then()执行回调函数的实现

```js
//声明构造函数
function Promise(executor){
    //添加属性
    this.PromsieState = 'pending';
    this.PromsieResult = null ;
    //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
    const self = this;//self _this that

    //执行器函数executor在构造函数中是同步调用的:
    // executor();

    //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
    // executor(resolve,reject);

    //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
    try{
        //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
        executor(resolve,reject);
    }catch(error){
        reject(error)
    }


    //resolve()是一个函数，应当有一个形式参数
    function resolve(data){
        //实现状态只能修改一次：判断状态是否为初始状态
        if (self.PromsieState !=="pending") return;
        
        //修改实例化对象的状态值(属性名：promiseState)
        self.PromsieState = "fulfilled"
        //修改实例化对象的结果值(属性名：promiseResult)
        self.PromsieResult = data;
    }
    //reject()是一个函数，应当有一个形式参数
    function reject(data){
        //实现状态只能修改一次：判断状态是否为初始状态
        if (self.PromsieState !=="pending") return;
        
        //reject()函数同resolve一样
        self.PromsieState = "rejected"
        self.PromsieResult = data;
    }
}
//添加then方法
Promise.prototype.then = function(onResolved,onRejected){
//0. 根据promise状态执行回调函数
    if(this.PromsieState == "fulfilled")
    {
//2. 传递value
        onResolved(this.PromsieResult);
    }
//1. 根据promise状态执行回调函数
    if(this.PromsieState == "rejected")
    {
//3. 传递reason
        onRejected(this.PromsieResult);
    }
    

}
// let p = new Promise((resolve,reject)=>{
//     resolve("OK")
// })
// console.log(p)
// p.then((value)=>{
//     console.log(value)
// })
```

## then处理异步执行的实现

执行器中的代码存在异步语句时，then方法中需要处理该种情形

```js
//声明构造函数
function Promise(executor){
    //添加属性
    this.PromsieState = 'pending';
    this.PromsieResult = null ;
// 1. 声明属性用于保存回调函数
    this.callBack = {}
    //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
    const self = this;//self _this that

    //执行器函数executor在构造函数中是同步调用的:
    // executor();

    //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
    // executor(resolve,reject);

    //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
    try{
        //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
        executor(resolve,reject);
    }catch(error){
        reject(error)
    }


    //resolve()是一个函数，应当有一个形式参数
    function resolve(data){
        //实现状态只能修改一次：判断状态是否为初始状态
        if (self.PromsieState !=="pending") return;
        
        //修改实例化对象的状态值(属性名：promiseState)
        self.PromsieState = "fulfilled"
        //修改实例化对象的结果值(属性名：promiseResult)
        self.PromsieResult = data;
// 3. 处理执行器中存在异步语句的情形：判断是否保存有回调函数
        if(self.callBack.onResolved)
        {
//4. 执行保存的回调函数
            self.callBack.onResolved(data)
        }
    }
    //reject()是一个函数，应当有一个形式参数
    function reject(data){
        //实现状态只能修改一次：判断状态是否为初始状态
        if (self.PromsieState !=="pending") return;
        
        //reject()函数同resolve一样
        self.PromsieState = "rejected"
        self.PromsieResult = data;

// 5. 处理执行器中存在异步语句的情形：判断是否保存有回调函数
        if(self.callBack.onRejected)
        {
//6. 执行保存的回调函数
            self.callBack.onRejected(data)
        }
    }
}
//添加then方法
Promise.prototype.then = function(onResolved,onRejected){
    //根据promise状态执行回调函数
    if(this.PromsieState == "fulfilled")
    {
        //传递value
        onResolved(this.PromsieResult);
    }
    //根据promise状态执行回调函数
    if(this.PromsieState == "rejected")
    {
        //传递reason
        onRejected(this.PromsieResult);
    }
//0. 处理当执行器中存在异步语句的情形
    if(this.PromsieState == "pending")
    {
// 2. 保存回调函数
        this.callBack = {
            onResolved:onResolved,
            onRejected:onRejected
        }
    }
    

}
let p = new Promise((resolve,reject)=>{
    resolve("OK")
})
console.log(p)
p.then((value)=>{
    console.log(value)
})
```

## then处理异步执行的多个回调函数的实现

```js
    //声明构造函数
    function Promise(executor){
        //添加属性
        this.PromsieState = 'pending';
        this.PromsieResult = null ;
        // 声明属性用于保存回调函数
        // this.callBack = {}
//0. 修改为保存数组
        this.callBacks = []

        //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
        const self = this;//self _this that

        //执行器函数executor在构造函数中是同步调用的:
        // executor();

        //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
        // executor(resolve,reject);

        //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
        try{
            //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
            executor(resolve,reject);
        }catch(error){
            reject(error)
        }


        //resolve()是一个函数，应当有一个形式参数
        function resolve(data){
            //实现状态只能修改一次：判断状态是否为初始状态
            if (self.PromsieState !=="pending") return;
            
            //修改实例化对象的状态值(属性名：promiseState)
            self.PromsieState = "fulfilled"
            //修改实例化对象的结果值(属性名：promiseResult)
            self.PromsieResult = data;
            // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
            // if(self.callBack.onResolved)
            // {
            //     //执行保存的回调函数
            //     self.callBack.onResolved(data)
            // }
//2. 执行所有成功的回调函数
            self.callBacks.forEach(item=>{
                item.onResolved(data)
            })
        }
        //reject()是一个函数，应当有一个形式参数
        function reject(data){
            //实现状态只能修改一次：判断状态是否为初始状态
            if (self.PromsieState !=="pending") return;
            
            //reject()函数同resolve一样
            self.PromsieState = "rejected"
            self.PromsieResult = data;

            // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
            // if(self.callBack.onRejected)
            // {
            //     //执行保存的回调函数
            //     self.callBack.onRejected(data)
            // }
//3. 执行所有失败的回调函数
            self.callBacks.forEach(item=>{
                item.onRejected(data)
            })
        }
    }
    //添加then方法
    Promise.prototype.then = function(onResolved,onRejected){
        //根据promise状态执行回调函数
        if(this.PromsieState == "fulfilled")
        {
            //传递value
            onResolved(this.PromsieResult);
        }
        //根据promise状态执行回调函数
        if(this.PromsieState == "rejected")
        {
            //传递reason
            onRejected(this.PromsieResult);
        }
        //处理当执行器中存在异步语句的情形
        if(this.PromsieState == "pending")
        {
            // 保存回调函数
            // this.callBack = {
            //     onResolved:onResolved,
            //     onRejected:onRejected
            // }
//1. 保存所有回调函数
            this.callBacks.push({
                onResolved:onResolved,
                onRejected:onRejected
            })
        }
        

    }
    let p = new Promise((resolve,reject)=>{
        resolve("OK")
    })
    console.log(p)
    p.then((value)=>{
        console.log(value)
    })
```

## 处理执行器中同步执行状态下then的返回值

then的返回值由其中的回调函数决定

- 若回调函数的返回值是一个promise对象，则then返回的promise的状态和值与该对象一致
- 若回调函数的返回值是一个非promise对象，则then返回的是状态为成功的promise对象，且其值为该返回值
- 若回调函数中出现异常，则返回失败promise 且其值为抛出的异常

```js
        //声明构造函数
        function Promise(executor){
            //添加属性
            this.PromsieState = 'pending';
            this.PromsieResult = null ;
            // 声明属性用于保存回调函数
            // this.callBack = {}
            //修改为保存数组
            this.callBacks = []

            //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
            const self = this;//self _this that

            //执行器函数executor在构造函数中是同步调用的:
            // executor();

            //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
            // executor(resolve,reject);

            //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
            try{
                //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
                executor(resolve,reject);
            }catch(error){
                reject(error)
            }


            //resolve()是一个函数，应当有一个形式参数
            function resolve(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //修改实例化对象的状态值(属性名：promiseState)
                self.PromsieState = "fulfilled"
                //修改实例化对象的结果值(属性名：promiseResult)
                self.PromsieResult = data;
                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onResolved)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onResolved(data)
                // }
                //执行所有成功的回调函数
                self.callBacks.forEach(item=>{
                    item.onResolved(data)
                })
            }
            //reject()是一个函数，应当有一个形式参数
            function reject(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //reject()函数同resolve一样
                self.PromsieState = "rejected"
                self.PromsieResult = data;

                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onRejected)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onRejected(data)
                // }
                //执行所有失败的回调函数
                self.callBacks.forEach(item=>{
                    item.onRejected(data)
                })
            }
        }
        //添加then方法
        Promise.prototype.then = function(onResolved,onRejected){
//0. then的返回值是一个promise
            return new Promise((resolve,reject)=>{
                //根据promise状态执行回调函数
                if(this.PromsieState == "fulfilled")
                {
                    //传递value
                    // onResolved(this.PromsieResult);

//5. 处理抛出异常的情况
                    try{
//1. 获取返回值
                        let result = onResolved(this.PromsieResult);
//2. 判断是否为promise对象
                        if(result instanceof Promise){
//3. 分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                            result.then(v=>{
                                resolve(v)
                            },r=>{
                                reject(r)
                            })
                        }else{
//4. 处理非promise对象的情况
                            resolve(result)
                        }
                    }catch(error){
//6. 处理抛出的异常
                        reject(error)
                    }


                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "rejected")
                {
                    //传递reason
                    // onRejected(this.PromsieResult);
//7. rejected处理过程类似
//处理抛出异常的情况
                    try{
//获取返回值
                        let result = onRejected(this.PromsieResult);
//判断是否为promise对象
                        if(result instanceof Promise){
//分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                            result.then(v=>{
                                resolve(v)
                            },r=>{
                                reject(r)
                            })
                        }else{
//处理非promise对象的情况
                            resolve(result)
                        }
                    }catch(error){
//处理抛出的异常
                        reject(error)
                    }
                }
                //处理当执行器中存在异步语句的情形
                if(this.PromsieState == "pending")
                {
                    // 保存回调函数
                    // this.callBack = {
                    //     onResolved:onResolved,
                    //     onRejected:onRejected
                    // }
                    //保存所有回调函数
                    this.callBacks.push({
                        onResolved:onResolved,
                        onRejected:onRejected
                    })
                }
            })

            

        }
        let p = new Promise((resolve,reject)=>{
            resolve("OK")
        })
        console.log(p)
        p.then((value)=>{
            console.log(value)
        })
```

## 处理执行器中异步执行状态下then的返回值

```js
        //声明构造函数
        function Promise(executor){
            //添加属性
            this.PromsieState = 'pending';
            this.PromsieResult = null ;
            // 声明属性用于保存回调函数
            // this.callBack = {}
            //修改为保存数组
            this.callBacks = []

            //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
            const self = this;//self _this that

            //执行器函数executor在构造函数中是同步调用的:
            // executor();

            //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
            // executor(resolve,reject);

            //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
            try{
                //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
                executor(resolve,reject);
            }catch(error){
                reject(error)
            }


            //resolve()是一个函数，应当有一个形式参数
            function resolve(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //修改实例化对象的状态值(属性名：promiseState)
                self.PromsieState = "fulfilled"
                //修改实例化对象的结果值(属性名：promiseResult)
                self.PromsieResult = data;
                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onResolved)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onResolved(data)
                // }
                //执行所有成功的回调函数
                self.callBacks.forEach(item=>{
                    item.onResolved(data)
                })
            }
            //reject()是一个函数，应当有一个形式参数
            function reject(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //reject()函数同resolve一样
                self.PromsieState = "rejected"
                self.PromsieResult = data;

                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onRejected)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onRejected(data)
                // }
                //执行所有失败的回调函数
                self.callBacks.forEach(item=>{
                    item.onRejected(data)
                })
            }
        }
        //添加then方法
        Promise.prototype.then = function(onResolved,onRejected){
            //then的返回值是一个promise
            return new Promise((resolve,reject)=>{
                //根据promise状态执行回调函数
                if(this.PromsieState == "fulfilled")
                {
                    //传递value
                    // onResolved(this.PromsieResult);

                    //处理抛出异常的情况
                    try{
                        //获取返回值
                        let result = onResolved(this.PromsieResult);
                        //判断是否为promise对象
                        if(result instanceof Promise){
                            //分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                            result.then(v=>{
                                resolve(v)
                            },r=>{
                                reject(r)
                            })
                        }else{
                            //处理非promise对象的情况
                            resolve(result)
                        }
                    }catch(error){
                        //处理抛出的异常
                        reject(error)
                    }


                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "rejected")
                {
                    //传递reason
                    // onRejected(this.PromsieResult);
                    //rejected处理过程类似
                    //处理抛出异常的情况
                    try{
                    //获取返回值
                        let result = onRejected(this.PromsieResult);
                    //判断是否为promise对象
                        if(result instanceof Promise){
                    //分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                            result.then(v=>{
                                resolve(v)
                            },r=>{
                                reject(r)
                            })
                        }else{
                            //处理非promise对象的情况
                            resolve(result)
                        }
                    }catch(error){
                        //处理抛出的异常
                        reject(error)
                    }
                }
                //处理当执行器中存在异步语句的情形
                if(this.PromsieState == "pending")
                {
                    // 保存回调函数
                    // this.callBack = {
                    //     onResolved:onResolved,
                    //     onRejected:onRejected
                    // }
                    //保存所有回调函数
                    this.callBacks.push({
//1. 处理执行器中异步执行时回调
                        onResolved:function(data){
                            //处理抛出异常的情况
                            try{
                                //获取返回值
                                let result = onResolved(data);
                                //判断是否为promise对象
                                if(result instanceof Promise){
                                    //分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                                    result.then(v=>{
                                        resolve(v)
                                    },r=>{
                                        reject(r)
                                    })
                                }else{
                                    //处理非promise对象的情况
                                    resolve(result)
                                }
                            }catch(error){
                                //处理抛出的异常
                                reject(error)
                            }
                        },
                        onRejected:function(data){
                            //处理抛出异常的情况
                            try{
                                //获取返回值
                                let result = onRejected(data);
                                //判断是否为promise对象
                                if(result instanceof Promise){
                                    //分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                                    result.then(v=>{
                                        resolve(v)
                                    },r=>{
                                        reject(r)
                                    })
                                }else{
                                    //处理非promise对象的情况
                                    resolve(result)
                                }
                            }catch(error){
                                //处理抛出的异常
                                reject(error)
                            }
                        }
                    })
                }
            })

            

        }
        let p = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve("ok")
            }, 1000);
        })
        p.then((value)=>{
            console.log(value)
        })
```

## then方法优化

对重复执行的代码块进行封装

```js
        //声明构造函数
        function Promise(executor){
            //添加属性
            this.PromsieState = 'pending';
            this.PromsieResult = null ;
            // 声明属性用于保存回调函数
            // this.callBack = {}
            //修改为保存数组
            this.callBacks = []

            //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
            const self = this;//self _this that

            //执行器函数executor在构造函数中是同步调用的:
            // executor();

            //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
            // executor(resolve,reject);

            //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
            try{
                //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
                executor(resolve,reject);
            }catch(error){
                reject(error)
            }


            //resolve()是一个函数，应当有一个形式参数
            function resolve(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //修改实例化对象的状态值(属性名：promiseState)
                self.PromsieState = "fulfilled"
                //修改实例化对象的结果值(属性名：promiseResult)
                self.PromsieResult = data;
                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onResolved)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onResolved(data)
                // }
                //执行所有成功的回调函数
                self.callBacks.forEach(item=>{
                    item.onResolved(data)
                })
            }
            //reject()是一个函数，应当有一个形式参数
            function reject(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //reject()函数同resolve一样
                self.PromsieState = "rejected"
                self.PromsieResult = data;

                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onRejected)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onRejected(data)
                // }
                //执行所有失败的回调函数
                self.callBacks.forEach(item=>{
                    item.onRejected(data)
                })
            }
        }
        //添加then方法
        Promise.prototype.then = function(onResolved,onRejected){
            //then的返回值是一个promise
            return new Promise((resolve,reject)=>{
//1. 声明变量
                let self = this
// 2. 定义函数
                function callback(type){
                    try{
                        //获取返回值
                        let result = type(self.PromsieResult);
                        //判断是否为promise对象
                        if(result instanceof Promise){
                            //分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                            result.then(v=>{
                                resolve(v)
                            },r=>{
                                reject(r)
                            })
                        }else{
                            //处理非promise对象的情况
                            resolve(result)
                        }
                    }catch(error){
                        //处理抛出的异常
                        reject(error)
                    }
                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "fulfilled")
                {
                    //传递value
                    // onResolved(this.PromsieResult);
//3. 调用函数
                    callback(onResolved)
                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "rejected")
                {
                    //传递reason
                    // onRejected(this.PromsieResult);
                    //rejected处理过程类似
//4. 调用函数
                    callback(onRejected)
                }
                //处理当执行器中存在异步语句的情形
                if(this.PromsieState == "pending")
                {
                    // 保存回调函数
                    // this.callBack = {
                    //     onResolved:onResolved,
                    //     onRejected:onRejected
                    // }
                    //保存所有回调函数
                    this.callBacks.push({
                        //处理执行器中异步执行时回调
                        onResolved:function(data){
//5. 调用函数
                            callback(onResolved)
                        },
                        onRejected:function(data){
//6. 调用函数
                            callback(onRejected)
                        }
                    })
                }
            })

            

        }
        let p = new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve("ok")
            }, 1000);
        })
        p.then((value)=>{
            console.log(value)
        })
```

## catch方法及异常穿透的实现

```js
        //声明构造函数
        function Promise(executor){
            //添加属性
            this.PromsieState = 'pending';
            this.PromsieResult = null ;
            // 声明属性用于保存回调函数
            // this.callBack = {}
            //修改为保存数组
            this.callBacks = []

            //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
            const self = this;//self _this that

            //执行器函数executor在构造函数中是同步调用的:
            // executor();

            //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
            // executor(resolve,reject);

            //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
            try{
                //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
                executor(resolve,reject);
            }catch(error){
                reject(error)
            }


            //resolve()是一个函数，应当有一个形式参数
            function resolve(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //修改实例化对象的状态值(属性名：promiseState)
                self.PromsieState = "fulfilled"
                //修改实例化对象的结果值(属性名：promiseResult)
                self.PromsieResult = data;
                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onResolved)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onResolved(data)
                // }
                //执行所有成功的回调函数
                self.callBacks.forEach(item=>{
                    item.onResolved(data)
                })
            }
            //reject()是一个函数，应当有一个形式参数
            function reject(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //reject()函数同resolve一样
                self.PromsieState = "rejected"
                self.PromsieResult = data;

                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onRejected)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onRejected(data)
                // }
                //执行所有失败的回调函数
                self.callBacks.forEach(item=>{
                    item.onRejected(data)
                })
            }
        }
        //添加then方法
        Promise.prototype.then = function(onResolved,onRejected){
            //then的返回值是一个promise
            return new Promise((resolve,reject)=>{
                //声明变量
                let self = this
//2. 处理失败回调函数为undefined的情况（省略没有写）
                if(onRejected !== "function"){
                    onRejected = (reason)=>{
                        throw reason;
                    }
                }
//3. 处理成功回调函数为undefined的情况（省略没有写）
                if(onResolved !== "function"){
                    onResolved = value=>value
                }
                // 定义函数
                function callback(type){
                    try{
                        //获取返回值
                        let result = type(self.PromsieResult);
                        //判断是否为promise对象
                        if(result instanceof Promise){
                            //分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                            result.then(v=>{
                                resolve(v)
                            },r=>{
                                reject(r)
                            })
                        }else{
                            //处理非promise对象的情况
                            resolve(result)
                        }
                    }catch(error){
                        //处理抛出的异常
                        reject(error)
                    }
                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "fulfilled")
                {
                    //传递value
                    // onResolved(this.PromsieResult);
                    //调用函数
                    callback(onResolved)
                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "rejected")
                {
                    //传递reason
                    // onRejected(this.PromsieResult);
                    //rejected处理过程类似
                    //调用函数
                    callback(onRejected)
                }
                //处理当执行器中存在异步语句的情形
                if(this.PromsieState == "pending")
                {
                    // 保存回调函数
                    // this.callBack = {
                    //     onResolved:onResolved,
                    //     onRejected:onRejected
                    // }
                    //保存所有回调函数
                    this.callBacks.push({
                        //处理执行器中异步执行时回调
                        onResolved:function(data){
                            //调用函数
                            callback(onResolved)
                        },
                        onRejected:function(data){
                            //调用函数
                            callback(onRejected)
                        }
                    })
                }
            })

        }
//1. 添加catch方法
        Promise.prototype.catch = function(onRejected){
            return this.then(undefined,onRejected);
        }
        let p = new Promise((resolve,reject)=>{
            setTimeout(() => {
                reject("ok")
            }, 1000);
        })
        p.then((value)=>{
            console.log(value)
        })
        .then(value=>{
            console.log(value);
        })
        .catch((reason)=>{
            console.log(reason)
        })
```

## resolve方法的实现

```js
        //声明构造函数
        function Promise(executor){
            //添加属性
            this.PromsieState = 'pending';
            this.PromsieResult = null ;
            // 声明属性用于保存回调函数
            // this.callBack = {}
            //修改为保存数组
            this.callBacks = []

            //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
            const self = this;//self _this that

            //执行器函数executor在构造函数中是同步调用的:
            // executor();

            //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
            // executor(resolve,reject);

            //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
            try{
                //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
                executor(resolve,reject);
            }catch(error){
                reject(error)
            }


            //resolve()是一个函数，应当有一个形式参数
            function resolve(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //修改实例化对象的状态值(属性名：promiseState)
                self.PromsieState = "fulfilled"
                //修改实例化对象的结果值(属性名：promiseResult)
                self.PromsieResult = data;
                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onResolved)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onResolved(data)
                // }
                //执行所有成功的回调函数
                self.callBacks.forEach(item=>{
                    item.onResolved(data)
                })
            }
            //reject()是一个函数，应当有一个形式参数
            function reject(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //reject()函数同resolve一样
                self.PromsieState = "rejected"
                self.PromsieResult = data;

                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onRejected)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onRejected(data)
                // }
                //执行所有失败的回调函数
                self.callBacks.forEach(item=>{
                    item.onRejected(data)
                })
            }
        }
        //添加then方法
        Promise.prototype.then = function(onResolved,onRejected){
            //then的返回值是一个promise
            return new Promise((resolve,reject)=>{
                //声明变量
                let self = this
                //处理失败回调函数为undefined的情况（省略没有写）
                if(onRejected !== "function"){
                    onRejected = (reason)=>{
                        throw reason;
                    }
                }
                //处理成功回调函数为undefined的情况（省略没有写）
                if(onResolved !== "function"){
                    onResolved = value=>value
                }
                // 定义函数
                function callback(type){
                    try{
                        //获取返回值
                        let result = type(self.PromsieResult);
                        //判断是否为promise对象
                        if(result instanceof Promise){
                            //分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                            result.then(v=>{
                                resolve(v)
                            },r=>{
                                reject(r)
                            })
                        }else{
                            //处理非promise对象的情况
                            resolve(result)
                        }
                    }catch(error){
                        //处理抛出的异常
                        reject(error)
                    }
                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "fulfilled")
                {
                    //传递value
                    // onResolved(this.PromsieResult);
                    //调用函数
                    callback(onResolved)
                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "rejected")
                {
                    //传递reason
                    // onRejected(this.PromsieResult);
                    //rejected处理过程类似
                    //调用函数
                    callback(onRejected)
                }
                //处理当执行器中存在异步语句的情形
                if(this.PromsieState == "pending")
                {
                    // 保存回调函数
                    // this.callBack = {
                    //     onResolved:onResolved,
                    //     onRejected:onRejected
                    // }
                    //保存所有回调函数
                    this.callBacks.push({
                        //处理执行器中异步执行时回调
                        onResolved:function(data){
                            //调用函数
                            callback(onResolved)
                        },
                        onRejected:function(data){
                            //调用函数
                            callback(onRejected)
                        }
                    })
                }
            })

        }
        //添加catch方法
        Promise.prototype.catch = function(onRejected){
            return this.then(undefined,onRejected);
        }
//1. 添加resolve方法
        Promise.resolve = function(value){
//2. 返回promise对象
            return new Promise((resolve,reject)=>{
                if(value instanceof Promise){
                    value.then(v=>{
                        resolve(v);
                    },r=>{
                        reject(r);
                    });
                }else{
                    resolve(value);
                }
            })
        }
        let p = new Promise((resolve,reject)=>{
            setTimeout(() => {
                reject("ok")
            }, 1000);
        })
        p.then((value)=>{
            console.log(value)
        })
        .then(value=>{
            console.log(value);
        })
        .catch((reason)=>{
            console.log(reason)
        })
//3. 使用测试
        let k = Promise.resolve("OKKKKK")
        console.log(k);
```

## reject方法的实现

```js
        //声明构造函数
        function Promise(executor){
            //添加属性
            this.PromsieState = 'pending';
            this.PromsieResult = null ;
            // 声明属性用于保存回调函数
            // this.callBack = {}
            //修改为保存数组
            this.callBacks = []

            //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
            const self = this;//self _this that

            //执行器函数executor在构造函数中是同步调用的:
            // executor();

            //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
            // executor(resolve,reject);

            //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
            try{
                //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
                executor(resolve,reject);
            }catch(error){
                reject(error)
            }


            //resolve()是一个函数，应当有一个形式参数
            function resolve(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //修改实例化对象的状态值(属性名：promiseState)
                self.PromsieState = "fulfilled"
                //修改实例化对象的结果值(属性名：promiseResult)
                self.PromsieResult = data;
                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onResolved)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onResolved(data)
                // }
                //执行所有成功的回调函数
                self.callBacks.forEach(item=>{
                    item.onResolved(data)
                })
            }
            //reject()是一个函数，应当有一个形式参数
            function reject(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //reject()函数同resolve一样
                self.PromsieState = "rejected"
                self.PromsieResult = data;

                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onRejected)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onRejected(data)
                // }
                //执行所有失败的回调函数
                self.callBacks.forEach(item=>{
                    item.onRejected(data)
                })
            }
        }
        //添加then方法
        Promise.prototype.then = function(onResolved,onRejected){
            //then的返回值是一个promise
            return new Promise((resolve,reject)=>{
                //声明变量
                let self = this
                //处理失败回调函数为undefined的情况（省略没有写）
                if(onRejected !== "function"){
                    onRejected = (reason)=>{
                        throw reason;
                    }
                }
                //处理成功回调函数为undefined的情况（省略没有写）
                if(onResolved !== "function"){
                    onResolved = value=>value
                }
                // 定义函数
                function callback(type){
                    try{
                        //获取返回值
                        let result = type(self.PromsieResult);
                        //判断是否为promise对象
                        if(result instanceof Promise){
                            //分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                            result.then(v=>{
                                resolve(v)
                            },r=>{
                                reject(r)
                            })
                        }else{
                            //处理非promise对象的情况
                            resolve(result)
                        }
                    }catch(error){
                        //处理抛出的异常
                        reject(error)
                    }
                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "fulfilled")
                {
                    //传递value
                    // onResolved(this.PromsieResult);
                    //调用函数
                    callback(onResolved)
                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "rejected")
                {
                    //传递reason
                    // onRejected(this.PromsieResult);
                    //rejected处理过程类似
                    //调用函数
                    callback(onRejected)
                }
                //处理当执行器中存在异步语句的情形
                if(this.PromsieState == "pending")
                {
                    // 保存回调函数
                    // this.callBack = {
                    //     onResolved:onResolved,
                    //     onRejected:onRejected
                    // }
                    //保存所有回调函数
                    this.callBacks.push({
                        //处理执行器中异步执行时回调
                        onResolved:function(data){
                            //调用函数
                            callback(onResolved)
                        },
                        onRejected:function(data){
                            //调用函数
                            callback(onRejected)
                        }
                    })
                }
            })

        }
        //添加catch方法
        Promise.prototype.catch = function(onRejected){
            return this.then(undefined,onRejected);
        }
        //添加resolve方法
        Promise.resolve = function(value){
        //返回promise对象
            return new Promise((resolve,reject)=>{
                if(value instanceof Promise){
                    value.then(v=>{
                        resolve(v);
                    },r=>{
                        reject(r);
                    });
                }else{
                    resolve(value);
                }
            })
        }
//1. 添加reject方法
        Promise.reject = function(reason){
            return new Promise((resolve,reject)=>{
                reject(reason)
            })
        }
        let p = new Promise((resolve,reject)=>{
            setTimeout(() => {
                reject("ok")
            }, 1000);
        })
        p.then((value)=>{
            console.log(value)
        })
        .then(value=>{
            console.log(value);
        })
        .catch((reason)=>{
            console.log(reason)
        })
        //使用测试
        let k = Promise.resolve("OKKKKK")
        console.log(k);
//2. 使用测试
        let j = Promise.reject("fail")
        console.log(j);
```

## all方法的实现

```js
        //声明构造函数
        function Promise(executor){
            //添加属性
            this.PromsieState = 'pending';
            this.PromsieResult = null ;
            // 声明属性用于保存回调函数
            // this.callBack = {}
            //修改为保存数组
            this.callBacks = []

            //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
            const self = this;//self _this that

            //执行器函数executor在构造函数中是同步调用的:
            // executor();

            //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
            // executor(resolve,reject);

            //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
            try{
                //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
                executor(resolve,reject);
            }catch(error){
                reject(error)
            }


            //resolve()是一个函数，应当有一个形式参数
            function resolve(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //修改实例化对象的状态值(属性名：promiseState)
                self.PromsieState = "fulfilled"
                //修改实例化对象的结果值(属性名：promiseResult)
                self.PromsieResult = data;
                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onResolved)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onResolved(data)
                // }
                //执行所有成功的回调函数
                self.callBacks.forEach(item=>{
                    item.onResolved(data)
                })
            }
            //reject()是一个函数，应当有一个形式参数
            function reject(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //reject()函数同resolve一样
                self.PromsieState = "rejected"
                self.PromsieResult = data;

                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onRejected)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onRejected(data)
                // }
                //执行所有失败的回调函数
                self.callBacks.forEach(item=>{
                    item.onRejected(data)
                })
            }
        }
        //添加then方法
        Promise.prototype.then = function(onResolved,onRejected){
            //then的返回值是一个promise
            return new Promise((resolve,reject)=>{
                //声明变量
                let self = this
                //处理失败回调函数为undefined的情况（省略没有写）
                if(onRejected !== "function"){
                    onRejected = (reason)=>{
                        throw reason;
                    }
                }
                //处理成功回调函数为undefined的情况（省略没有写）
                if(onResolved !== "function"){
                    onResolved = value=>value
                }
                // 定义函数
                function callback(type){
                    try{
                        //获取返回值
                        let result = type(self.PromsieResult);
                        //判断是否为promise对象
                        if(result instanceof Promise){
                            //分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                            result.then(v=>{
                                resolve(v)
                            },r=>{
                                reject(r)
                            })
                        }else{
                            //处理非promise对象的情况
                            resolve(result)
                        }
                    }catch(error){
                        //处理抛出的异常
                        reject(error)
                    }
                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "fulfilled")
                {
                    //传递value
                    // onResolved(this.PromsieResult);
                    //调用函数
                    callback(onResolved)
                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "rejected")
                {
                    //传递reason
                    // onRejected(this.PromsieResult);
                    //rejected处理过程类似
                    //调用函数
                    callback(onRejected)
                }
                //处理当执行器中存在异步语句的情形
                if(this.PromsieState == "pending")
                {
                    // 保存回调函数
                    // this.callBack = {
                    //     onResolved:onResolved,
                    //     onRejected:onRejected
                    // }
                    //保存所有回调函数
                    this.callBacks.push({
                        //处理执行器中异步执行时回调
                        onResolved:function(data){
                            //调用函数
                            callback(onResolved)
                        },
                        onRejected:function(data){
                            //调用函数
                            callback(onRejected)
                        }
                    })
                }
            })
            
        }
        //添加catch方法
        Promise.prototype.catch = function(onRejected){
            return this.then(undefined,onRejected);
        }
        //添加resolve方法
        Promise.resolve = function(value){
        //返回promise对象
            return new Promise((resolve,reject)=>{
                if(value instanceof Promise){
                    value.then(v=>{
                        resolve(v);
                    },r=>{
                        reject(r);
                    });
                }else{
                    resolve(value);
                }
            })
        }
        //添加reject方法
        Promise.reject = function(reason){
            return new Promise((resolve,reject)=>{
                reject(reason)
            })
        }
//1. 添加all方法
        Promise.all = function(Promises=[]){
            return new Promise((resolve,reject)=>{
//2. 声明计数器
                let count = 0
//3. 成功结果数字
                let results = []
                for(let i =0 ; i<Promises.length;i++)
                Promises[i].then(value=>{
//4. 自增计数器
                    count++;
//5. 存入结果值
                    results[i]=value
//6. 判断是否所有都成功
                    if(count == Promises.length){
//7. 返回结果
                        resolve(results)
                    }
                },reason=>{
//8. 若有任何一个结果为失败，则all返回的也是失败
                    reject(reason);
                })
            })
        }
        let p = new Promise((resolve,reject)=>{
            setTimeout(() => {
                reject("ok")
            }, 1000);
        })
        p.then((value)=>{
            console.log(value)
        }).then(value=>{
            console.log(value);
        }).catch((reason)=>{
            console.log(reason)
        })
        //使用测试
        let k = Promise.resolve("OKKKKK")
        console.log(k);
        //使用测试
        let j = Promise.reject("fail")
        console.log(j);
```

## race方法的实现

```js
        //声明构造函数
        function Promise(executor){
            //添加属性
            this.PromsieState = 'pending';
            this.PromsieResult = null ;
            // 声明属性用于保存回调函数
            // this.callBack = {}
            //修改为保存数组
            this.callBacks = []

            //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
            const self = this;//self _this that

            //执行器函数executor在构造函数中是同步调用的:
            // executor();

            //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
            // executor(resolve,reject);

            //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
            try{
                //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
                executor(resolve,reject);
            }catch(error){
                reject(error)
            }


            //resolve()是一个函数，应当有一个形式参数
            function resolve(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //修改实例化对象的状态值(属性名：promiseState)
                self.PromsieState = "fulfilled"
                //修改实例化对象的结果值(属性名：promiseResult)
                self.PromsieResult = data;
                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onResolved)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onResolved(data)
                // }
                //执行所有成功的回调函数
                self.callBacks.forEach(item=>{
                    item.onResolved(data)
                })
            }
            //reject()是一个函数，应当有一个形式参数
            function reject(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //reject()函数同resolve一样
                self.PromsieState = "rejected"
                self.PromsieResult = data;

                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onRejected)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onRejected(data)
                // }
                //执行所有失败的回调函数
                self.callBacks.forEach(item=>{
                    item.onRejected(data)
                })
            }
        }
        //添加then方法
        Promise.prototype.then = function(onResolved,onRejected){
            //then的返回值是一个promise
            return new Promise((resolve,reject)=>{
                //声明变量
                let self = this
                //处理失败回调函数为undefined的情况（省略没有写）
                if(onRejected !== "function"){
                    onRejected = (reason)=>{
                        throw reason;
                    }
                }
                //处理成功回调函数为undefined的情况（省略没有写）
                if(onResolved !== "function"){
                    onResolved = value=>value
                }
                // 定义函数
                function callback(type){
                    try{
                        //获取返回值
                        let result = type(self.PromsieResult);
                        //判断是否为promise对象
                        if(result instanceof Promise){
                            //分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                            result.then(v=>{
                                resolve(v)
                            },r=>{
                                reject(r)
                            })
                        }else{
                            //处理非promise对象的情况
                            resolve(result)
                        }
                    }catch(error){
                        //处理抛出的异常
                        reject(error)
                    }
                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "fulfilled")
                {
                    //传递value
                    // onResolved(this.PromsieResult);
                    //调用函数
                    callback(onResolved)
                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "rejected")
                {
                    //传递reason
                    // onRejected(this.PromsieResult);
                    //rejected处理过程类似
                    //调用函数
                    callback(onRejected)
                }
                //处理当执行器中存在异步语句的情形
                if(this.PromsieState == "pending")
                {
                    // 保存回调函数
                    // this.callBack = {
                    //     onResolved:onResolved,
                    //     onRejected:onRejected
                    // }
                    //保存所有回调函数
                    this.callBacks.push({
                        //处理执行器中异步执行时回调
                        onResolved:function(data){
                            //调用函数
                            callback(onResolved)
                        },
                        onRejected:function(data){
                            //调用函数
                            callback(onRejected)
                        }
                    })
                }
            })
            
        }
        //添加catch方法
        Promise.prototype.catch = function(onRejected){
            return this.then(undefined,onRejected);
        }
        //添加resolve方法
        Promise.resolve = function(value){
        //返回promise对象
            return new Promise((resolve,reject)=>{
                if(value instanceof Promise){
                    value.then(v=>{
                        resolve(v);
                    },r=>{
                        reject(r);
                    });
                }else{
                    resolve(value);
                }
            })
        }
        //添加reject方法
        Promise.reject = function(reason){
            return new Promise((resolve,reject)=>{
                reject(reason)
            })
        }
        //添加all方法
        Promise.all = function(Promises=[]){
            return new Promise((resolve,reject)=>{
        //声明计数器
                let count = 0
        //成功结果数字
                let results = []
                for(let i =0 ; i<Promises.length;i++)
                Promises[i].then(value=>{
        //自增计数器
                    count++;
        //存入结果值
                    results[i]=value
        //判断是否所有都成功
                    if(count == Promises.length){
        //返回结果
                        resolve(results)
                    }
                },reason=>{
        //若有任何一个结果为失败，则all返回的也是失败
                    reject(reason);
                })
            })
        }
//1. 添加race方法
        Promise.race = function(Promises=[]){
//2. 返回
            return new Promise((resolve,reject)=>{
//3. 遍历
                for(let i=0 ; i<Promises.length;i++){
//4. 谁先改变状态，谁就能决定返回值的状态
                    Promises[i].then(value=>{
                        resolve(value)
                    },reason=>{
                        reject(reason)
                    })
                }
            })
        }
        let p = new Promise((resolve,reject)=>{
            setTimeout(() => {
                reject("ok")
            }, 1000);
        })
        p.then((value)=>{
            console.log(value)
        }).then(value=>{
            console.log(value);
        }).catch((reason)=>{
            console.log(reason)
        })
        //使用测试
        let k = Promise.resolve("OKKKKK")
        console.log(k);
        //使用测试
        let j = Promise.reject("fail")
        console.log(j);
```

## then方法中的回调函数异步执行的实现

```js
        //声明构造函数
        function Promise(executor){
            //添加属性
            this.PromsieState = 'pending';
            this.PromsieResult = null ;
            // 声明属性用于保存回调函数
            // this.callBack = {}
            //修改为保存数组
            this.callBacks = []

            //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
            const self = this;//self _this that

            //执行器函数executor在构造函数中是同步调用的:
            // executor();

            //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
            // executor(resolve,reject);

            //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
            try{
                //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
                executor(resolve,reject);
            }catch(error){
                reject(error)
            }


            //resolve()是一个函数，应当有一个形式参数
            function resolve(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //修改实例化对象的状态值(属性名：promiseState)
                self.PromsieState = "fulfilled"
                //修改实例化对象的结果值(属性名：promiseResult)
                self.PromsieResult = data;
                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onResolved)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onResolved(data)
                // }
                //执行所有成功的回调函数
                self.callBacks.forEach(item=>{
                    item.onResolved(data)
                })
            }
            //reject()是一个函数，应当有一个形式参数
            function reject(data){
                //实现状态只能修改一次：判断状态是否为初始状态
                if (self.PromsieState !=="pending") return;
                
                //reject()函数同resolve一样
                self.PromsieState = "rejected"
                self.PromsieResult = data;

                // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                // if(self.callBack.onRejected)
                // {
                //     //执行保存的回调函数
                //     self.callBack.onRejected(data)
                // }
                //执行所有失败的回调函数
                self.callBacks.forEach(item=>{
                    item.onRejected(data)
                })
            }
        }
        //添加then方法
        Promise.prototype.then = function(onResolved,onRejected){
            //then的返回值是一个promise
            return new Promise((resolve,reject)=>{
                //声明变量
                let self = this
                //处理失败回调函数为undefined的情况（省略没有写）
                if(onRejected !== "function"){
                    onRejected = (reason)=>{
                        throw reason;
                    }
                }
                //处理成功回调函数为undefined的情况（省略没有写）
                if(onResolved !== "function"){
                    onResolved = value=>value
                }
                // 定义函数
                function callback(type){
//0. 使得回调函数异步执行
                    setTimeout(() => {
                        try{
                            //获取返回值
                            let result = type(self.PromsieResult);
                            //判断是否为promise对象
                            if(result instanceof Promise){
                                //分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                                result.then(v=>{
                                    resolve(v)
                                },r=>{
                                    reject(r)
                                })
                            }else{
                                //处理非promise对象的情况
                                resolve(result)
                            }
                        }catch(error){
                            //处理抛出的异常
                            reject(error)
                        }
                    }, 0);

                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "fulfilled")
                {
                    //传递value
                    // onResolved(this.PromsieResult);
                    //调用函数
                    callback(onResolved)
                }
                //根据promise状态执行回调函数
                if(this.PromsieState == "rejected")
                {
                    //传递reason
                    // onRejected(this.PromsieResult);
                    //rejected处理过程类似
                    //调用函数
                    callback(onRejected)
                }
                //处理当执行器中存在异步语句的情形
                if(this.PromsieState == "pending")
                {
                    // 保存回调函数
                    // this.callBack = {
                    //     onResolved:onResolved,
                    //     onRejected:onRejected
                    // }
                    //保存所有回调函数
                    this.callBacks.push({
                        //处理执行器中异步执行时回调
                        onResolved:function(data){
                            //调用函数
                            callback(onResolved)
                        },
                        onRejected:function(data){
                            //调用函数
                            callback(onRejected)
                        }
                    })
                }
            })
            
        }
        //添加catch方法
        Promise.prototype.catch = function(onRejected){
            return this.then(undefined,onRejected);
        }
        //添加resolve方法
        Promise.resolve = function(value){
        //返回promise对象
            return new Promise((resolve,reject)=>{
                if(value instanceof Promise){
                    value.then(v=>{
                        resolve(v);
                    },r=>{
                        reject(r);
                    });
                }else{
                    resolve(value);
                }
            })
        }
        //添加reject方法
        Promise.reject = function(reason){
            return new Promise((resolve,reject)=>{
                reject(reason)
            })
        }
        //添加all方法
        Promise.all = function(Promises=[]){
            return new Promise((resolve,reject)=>{
        //声明计数器
                let count = 0
        //成功结果数字
                let results = []
                for(let i =0 ; i<Promises.length;i++)
                Promises[i].then(value=>{
        //自增计数器
                    count++;
        //存入结果值
                    results[i]=value
        //判断是否所有都成功
                    if(count == Promises.length){
        //返回结果
                        resolve(results)
                    }
                },reason=>{
        //若有任何一个结果为失败，则all返回的也是失败
                    reject(reason);
                })
            })
        }
        // 添加race方法
        Promise.race = function(Promises=[]){
        // 返回
            return new Promise((resolve,reject)=>{
        // 遍历
                for(let i=0 ; i<Promises.length;i++){
        // 谁先改变状态，谁就能决定返回值的状态
                    Promises[i].then(value=>{
                        resolve(value)
                    },reason=>{
                        reject(reason)
                    })
                }
            })
        }
        let p = new Promise((resolve,reject)=>{
            setTimeout(() => {
                reject("ok")
            }, 1000);
        })
        p.then((value)=>{
            console.log(value)
        }).then(value=>{
            console.log(value);
        }).catch((reason)=>{
            console.log(reason)
        })
        //使用测试
        let k = Promise.resolve("OKKKKK")
        console.log(k);
        //使用测试
        let j = Promise.reject("fail")
        console.log(j);
```

## 封装成类

```js
//1. 类名
        class Promise{
//2. 构造函数
            constructor(executor){
                //添加属性
                this.PromsieState = 'pending';
                this.PromsieResult = null ;
                // 声明属性用于保存回调函数
                // this.callBack = {}
                //修改为保存数组
                this.callBacks = []

                //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
                const self = this;//self _this that

                //执行器函数executor在构造函数中是同步调用的:
                // executor();

                //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
                // executor(resolve,reject);

                //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
                try{
                    //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
                    executor(resolve,reject);
                }catch(error){
                    reject(error)
                }


                //resolve()是一个函数，应当有一个形式参数
                function resolve(data){
                    //实现状态只能修改一次：判断状态是否为初始状态
                    if (self.PromsieState !=="pending") return;
                    
                    //修改实例化对象的状态值(属性名：promiseState)
                    self.PromsieState = "fulfilled"
                    //修改实例化对象的结果值(属性名：promiseResult)
                    self.PromsieResult = data;
                    // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                    // if(self.callBack.onResolved)
                    // {
                    //     //执行保存的回调函数
                    //     self.callBack.onResolved(data)
                    // }
                    //执行所有成功的回调函数
                    self.callBacks.forEach(item=>{
                        item.onResolved(data)
                    })
                }
                //reject()是一个函数，应当有一个形式参数
                function reject(data){
                    //实现状态只能修改一次：判断状态是否为初始状态
                    if (self.PromsieState !=="pending") return;
                    
                    //reject()函数同resolve一样
                    self.PromsieState = "rejected"
                    self.PromsieResult = data;

                    // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                    // if(self.callBack.onRejected)
                    // {
                    //     //执行保存的回调函数
                    //     self.callBack.onRejected(data)
                    // }
                    //执行所有失败的回调函数
                    self.callBacks.forEach(item=>{
                        item.onRejected(data)
                    })
                }
        }
//3. then方法
            then(onResolved,onRejected){
                //then的返回值是一个promise
                return new Promise((resolve,reject)=>{
                    //声明变量
                    let self = this
                    //处理失败回调函数为undefined的情况（省略没有写）
                    if(onRejected !== "function"){
                        onRejected = (reason)=>{
                            throw reason;
                        }
                    }
                    //处理成功回调函数为undefined的情况（省略没有写）
                    if(onResolved !== "function"){
                        onResolved = value=>value
                    }
                    // 定义函数
                    function callback(type){
                        //使得回调函数异步执行
                        setTimeout(() => {
                            try{
                                //获取返回值
                                let result = type(self.PromsieResult);
                                //判断是否为promise对象
                                if(result instanceof Promise){
                                    //分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                                    result.then(v=>{
                                        resolve(v)
                                    },r=>{
                                        reject(r)
                                    })
                                }else{
                                    //处理非promise对象的情况
                                    resolve(result)
                                }
                            }catch(error){
                                //处理抛出的异常
                                reject(error)
                            }
                        }, 0);

                    }
                    //根据promise状态执行回调函数
                    if(this.PromsieState == "fulfilled")
                    {
                        //传递value
                        // onResolved(this.PromsieResult);
                        //调用函数
                        callback(onResolved)
                    }
                    //根据promise状态执行回调函数
                    if(this.PromsieState == "rejected")
                    {
                        //传递reason
                        // onRejected(this.PromsieResult);
                        //rejected处理过程类似
                        //调用函数
                        callback(onRejected)
                    }
                    //处理当执行器中存在异步语句的情形
                    if(this.PromsieState == "pending")
                    {
                        // 保存回调函数
                        // this.callBack = {
                        //     onResolved:onResolved,
                        //     onRejected:onRejected
                        // }
                        //保存所有回调函数
                        this.callBacks.push({
                            //处理执行器中异步执行时回调
                            onResolved:function(data){
                                //调用函数
                                callback(onResolved)
                            },
                            onRejected:function(data){
                                //调用函数
                                callback(onRejected)
                            }
                        })
                    }
                })
                
            }
//4. catch方法
            catch(onRejected){
                return this.then(undefined,onRejected);
            }
//5. resolve方法
            static resolve(value){
            //返回promise对象
                return new Promise((resolve,reject)=>{
                    if(value instanceof Promise){
                        value.then(v=>{
                            resolve(v);
                        },r=>{
                            reject(r);
                        });
                    }else{
                        resolve(value);
                    }
                })
            }
//6. reject方法
            static reject(reason){
                return new Promise((resolve,reject)=>{
                    reject(reason)
                })
            }
// 7. all方法
            static all(Promises=[]){
                return new Promise((resolve,reject)=>{
            //声明计数器
                    let count = 0
            //成功结果数字
                    let results = []
                    for(let i =0 ; i<Promises.length;i++)
                    Promises[i].then(value=>{
            //自增计数器
                        count++;
            //存入结果值
                        results[i]=value
            //判断是否所有都成功
                        if(count == Promises.length){
            //返回结果
                            resolve(results)
                        }
                    },reason=>{
            //若有任何一个结果为失败，则all返回的也是失败
                        reject(reason);
                    })
                })
            }
// 8. race方法
            static race(Promises=[]){
            // 返回
                return new Promise((resolve,reject)=>{
            // 遍历
                    for(let i=0 ; i<Promises.length;i++){
            // 谁先改变状态，谁就能决定返回值的状态
                        Promises[i].then(value=>{
                            resolve(value)
                        },reason=>{
                            reject(reason)
                        })
                    }
                })
            }
        }

       let p = new Promise((resolve,reject)=>{
            setTimeout(() => {
                reject("ok")
            }, 1000);
        })
        p.then((value)=>{
            console.log(value)
        }).then(value=>{
            console.log(value);
        }).catch((reason)=>{
            console.log(reason)
        })
        //使用测试
        let k = Promise.resolve("OKKKKK")
        console.log(k);
        //使用测试
        let j = Promise.reject("fail")
        console.log(j);
```

## 封装成类

```js
//1. 类名
        class Promise{
//2. 构造函数
            constructor(executor){
                //添加属性
                this.PromsieState = 'pending';
                this.PromsieResult = null ;
                // 声明属性用于保存回调函数
                // this.callBack = {}
                //修改为保存数组
                this.callBacks = []

                //保存变量;因为在resolve()中会使用到this，而resolve()并不是通过this.resolve()调用的，而是resolve()直接调用的，所以其中this指向的是window
                const self = this;//self _this that

                //执行器函数executor在构造函数中是同步调用的:
                // executor();

                //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
                // executor(resolve,reject);

                //异常处理：执行器函数中的代码抛出异常后应当改变实例化后的promise对象状态，同时结果值应当改变为该抛出的异常
                try{
                    //执行器函数executor()的实参resolve(),reject()本身也是函数，是预先定义的，通过值传递的
                    executor(resolve,reject);
                }catch(error){
                    reject(error)
                }


                //resolve()是一个函数，应当有一个形式参数
                function resolve(data){
                    //实现状态只能修改一次：判断状态是否为初始状态
                    if (self.PromsieState !=="pending") return;
                    
                    //修改实例化对象的状态值(属性名：promiseState)
                    self.PromsieState = "fulfilled"
                    //修改实例化对象的结果值(属性名：promiseResult)
                    self.PromsieResult = data;
                    // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                    // if(self.callBack.onResolved)
                    // {
                    //     //执行保存的回调函数
                    //     self.callBack.onResolved(data)
                    // }
                    //执行所有成功的回调函数
                    self.callBacks.forEach(item=>{
                        item.onResolved(data)
                    })
                }
                //reject()是一个函数，应当有一个形式参数
                function reject(data){
                    //实现状态只能修改一次：判断状态是否为初始状态
                    if (self.PromsieState !=="pending") return;
                    
                    //reject()函数同resolve一样
                    self.PromsieState = "rejected"
                    self.PromsieResult = data;

                    // 处理执行器中存在异步语句的情形：判断是否保存有回调函数
                    // if(self.callBack.onRejected)
                    // {
                    //     //执行保存的回调函数
                    //     self.callBack.onRejected(data)
                    // }
                    //执行所有失败的回调函数
                    self.callBacks.forEach(item=>{
                        item.onRejected(data)
                    })
                }
        }
//3. then方法
            then(onResolved,onRejected){
                //then的返回值是一个promise
                return new Promise((resolve,reject)=>{
                    //声明变量
                    let self = this
                    //处理失败回调函数为undefined的情况（省略没有写）
                    if(onRejected !== "function"){
                        onRejected = (reason)=>{
                            throw reason;
                        }
                    }
                    //处理成功回调函数为undefined的情况（省略没有写）
                    if(onResolved !== "function"){
                        onResolved = value=>value
                    }
                    // 定义函数
                    function callback(type){
                        //使得回调函数异步执行
                        setTimeout(() => {
                            try{
                                //获取返回值
                                let result = type(self.PromsieResult);
                                //判断是否为promise对象
                                if(result instanceof Promise){
                                    //分情况处理:回调函数返回成功的promise则then也返回成功的promise,反之亦然
                                    result.then(v=>{
                                        resolve(v)
                                    },r=>{
                                        reject(r)
                                    })
                                }else{
                                    //处理非promise对象的情况
                                    resolve(result)
                                }
                            }catch(error){
                                //处理抛出的异常
                                reject(error)
                            }
                        }, 0);

                    }
                    //根据promise状态执行回调函数
                    if(this.PromsieState == "fulfilled")
                    {
                        //传递value
                        // onResolved(this.PromsieResult);
                        //调用函数
                        callback(onResolved)
                    }
                    //根据promise状态执行回调函数
                    if(this.PromsieState == "rejected")
                    {
                        //传递reason
                        // onRejected(this.PromsieResult);
                        //rejected处理过程类似
                        //调用函数
                        callback(onRejected)
                    }
                    //处理当执行器中存在异步语句的情形
                    if(this.PromsieState == "pending")
                    {
                        // 保存回调函数
                        // this.callBack = {
                        //     onResolved:onResolved,
                        //     onRejected:onRejected
                        // }
                        //保存所有回调函数
                        this.callBacks.push({
                            //处理执行器中异步执行时回调
                            onResolved:function(data){
                                //调用函数
                                callback(onResolved)
                            },
                            onRejected:function(data){
                                //调用函数
                                callback(onRejected)
                            }
                        })
                    }
                })
                
            }
//4. catch方法
            catch(onRejected){
                return this.then(undefined,onRejected);
            }
//5. resolve方法
            static resolve(value){
            //返回promise对象
                return new Promise((resolve,reject)=>{
                    if(value instanceof Promise){
                        value.then(v=>{
                            resolve(v);
                        },r=>{
                            reject(r);
                        });
                    }else{
                        resolve(value);
                    }
                })
            }
//6. reject方法
            static reject(reason){
                return new Promise((resolve,reject)=>{
                    reject(reason)
                })
            }
// 7. all方法
            static all(Promises=[]){
                return new Promise((resolve,reject)=>{
            //声明计数器
                    let count = 0
            //成功结果数字
                    let results = []
                    for(let i =0 ; i<Promises.length;i++)
                    Promises[i].then(value=>{
            //自增计数器
                        count++;
            //存入结果值
                        results[i]=value
            //判断是否所有都成功
                        if(count == Promises.length){
            //返回结果
                            resolve(results)
                        }
                    },reason=>{
            //若有任何一个结果为失败，则all返回的也是失败
                        reject(reason);
                    })
                })
            }
// 8. race方法
            static race(Promises=[]){
            // 返回
                return new Promise((resolve,reject)=>{
            // 遍历
                    for(let i=0 ; i<Promises.length;i++){
            // 谁先改变状态，谁就能决定返回值的状态
                        Promises[i].then(value=>{
                            resolve(value)
                        },reason=>{
                            reject(reason)
                        })
                    }
                })
            }
        }

       let p = new Promise((resolve,reject)=>{
            setTimeout(() => {
                reject("ok")
            }, 1000);
        })
        p.then((value)=>{
            console.log(value)
        }).then(value=>{
            console.log(value);
        }).catch((reason)=>{
            console.log(reason)
        })
        //使用测试
        let k = Promise.resolve("OKKKKK")
        console.log(k);
        //使用测试
        let j = Promise.reject("fail")
        console.log(j);
```
