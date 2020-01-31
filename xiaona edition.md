# 小娜V1版本 业务实现

1. 逻辑分析
2. 功能简介 、小娜V1版本 初始步骤 利用引导信息和客户进行交互  输入：q退出 、输入：1求和、输入2：显示系统时间、输入3： 系统随机笑话。
   1. 第一步利用死循环 + 弹窗信息引导客户进行下一步操作 
   2. 第二步写出代码业务逻辑

## 代码实现 退出 功能

###  业务功能 逻辑分析

1. 利用while 生成死循环
2. 然后 在死循环内 生成一个 prompt 弹窗 做信息引导
3. 让用户 输入 规定 信息 配合分支语句退出或进行下一步操做
4. 用户输入：q  即可退出 循环

```js
while (true) {
            var info = prompt("你好我是小娜,请选择功能:\n输入q:退出\n1，求和\n2，系统时间\n3，讲笑话");
            // 分支1、退出小娜系统
            if (info === "q") {
                alert("退出成功")
                break;
            }
            	}
```

## 代码实现 求和 功能

###  业务功能 逻辑分析 

1. 用 lese if 分支语句 开头 判断用户 输入的指令是否是“1” 
2. 进入求和分支后   再弹出 一个用户 引导框 获取 用户要输入的数值 
3. 拿到数值后 进行处理 相加 然后 返回出页面显示出来

```js
 while (true) {
            var info = prompt("你好我是小娜,请选择功能:\n输入q:退出\n1，求和\n2，系统时间\n3，讲笑话");
            // 分支1、退出小娜系统
            if (info === "q") {
                alert("退出成功")
                break;
            }
     		// 分支2、进入求和功能
             else if (info === "1") {
                var sum = prompt("请按以下格式输入：1，2，3 必须用，隔开");
                 // 从弹窗里拿到的数据 用 spilt(',') 劈开
                var sum2 = sum.split(',');
                var he = 0;
                for (var i = 0; i < sum2.length; i++) {
                    // parseInt() 从弹窗里拿到的每个数据 都转换成数字类型 
                    sum2[i] = parseInt(sum2[i])
                    he += sum2[i]
                }
                alert("和为" + he)
            }
            	}
```

## 代码实现 系统时间 功能

### 业务功能 逻辑分析

1. 用 lese if 分支语句 开头 判断用户 输入的指令是否是“2” 
2. 进入分支后 用js内置的构造函数 生成时间对象 
3. 声明变量 把函数返回值 放进变量里
4. 最后声明一个变量  用ES6 模板字符串 进行拼接  把拼接后的 模板字符串 放进 变量里 返回出页面显示出来

```js
  while (true) {
            var info = prompt("你好我是小娜,请选择功能:\n输入q:退出\n1，求和\n2，系统时间\n3，讲笑话");   
            // 分支1、退出小娜系统
            if (info === "q") {
                alert("退出成功")
                break;
            }
     		// 分支2、进入求和功能
             else if (info === "1") {
                var sum = prompt("请按以下格式输入：1，2，3 必须用，隔开");
                 // 从弹窗里拿到的数据 用 spilt(',') 劈开
                var sum2 = sum.split(',');
                var he = 0;
                for (var i = 0; i < sum2.length; i++) {
                    // parseInt() 从弹窗里拿到的每个数据 都转换成数字类型 
                    sum2[i] = parseInt(sum2[i])
                    he += sum2[i]
                }
                alert("和为" + he)
            }
              // 分支3、进入系统时间
                else if (info === "2") {
                    // 构造函数 构造出 js 内置 时间对象
                    var date = new Date()
                    // 年
                    var nian = date.getFullYear();
                    // 月
                    // 月只显示0~11 月份 在末尾补1 就解决这个Bug了
                    var yue = date.getMonth() + 1;
                    // 日
                    var ri = date.getDate();
                    // 时
                    var shi = date.getHours();
                    // 分
                    var fen = date.getMinutes();
                    // 秒
                    var miao = date.getSeconds();
                    //  用ES6模板字符串 拼接在一起
                    var sj = `${nian}年${yue}月${ri}日${shi}时${fen}分${miao}秒`;
                    alert(sj)
              }
            	 }
```

## 代码实现 随机笑话 功能

### 业务功能 逻辑分析

1. 创建一个 笑话数组  
2. 利用 js 内置对象 随机数 
3. 随机数 随机范围 是0~1 扩大取值范围 = 随机数 × 数组长度 
4. 随机数 × 的长度不可以写死  写死后追加的笑话 会受到影响  
5. 写成xh.length  之后 在数组里追加 多少条笑话 都不会受到影响 
6. 扩大完取值范围后 随机数 位数消除 方法：Math.floor向下取整 
7. 向下取整后 有了随机数 就可 随机拿到 数组里面的笑话了 

```js
  while (true) {
            var info = prompt("你好我是小娜,请选择功能:\n输入q:退出\n1，求和\n2，系统时间\n3，讲笑话");
            // 分支1、退出小娜系统
            if (info === "q") {
                alert("退出成功")
                break;
            }
     		// 分支2、进入求和功能
             else if (info === "1") {
                var sum = prompt("请按以下格式输入：1，2，3 必须用，隔开");
                 // 从弹窗里拿到的数据 用 spilt(',') 劈开
                var sum2 = sum.split(',');
                var he = 0;
                for (var i = 0; i < sum2.length; i++) {
                    // parseInt() 从弹窗里拿到的每个数据 都转换成数字类型 
                    sum2[i] = parseInt(sum2[i])
                    he += sum2[i]
                }
                alert("和为" + he)
            }
              // 分支3、进入系统时间
                else if (info === "2") {
                    // 构造函数 构造出 js 内置 时间对象
                    var date = new Date()
                    // 年
                    var nian = date.getFullYear();
                    // 月
                    // 月只显示0~11 月份 在末尾补1 就解决这个Bug了
                    var yue = date.getMonth() + 1;
                    // 日
                    var ri = date.getDate();
                    // 时
                    var shi = date.getHours();
                    // 分
                    var fen = date.getMinutes();
                    // 秒
                    var miao = date.getSeconds();
                    //  用ES6模板字符串 拼接在一起
                    var sj = `${nian}年${yue}月${ri}日${shi}时${fen}分${miao}秒`;
                    alert(sj)
              }
       // 分支4、进入笑话系统
        else if (info === "3") {
            // 创建一个 笑话数组 
            var xh = ["笑话1··", "笑话2··", "笑话3··", "笑话4··", "笑话5··", "笑话6··"];
            // 利用 js 内置对象 随机数 
            var a = Math.random()
            // 随机数 随机范围 是0~1 扩大取值范围 = 随机数 × 数组长度
            // 随机数 × 的长度不可以写死  写死后追加的笑话 会受到影响 
            // 写成xh.length  之后 在数组里追加 多少条笑话 都不会受到影响
            a = a * xh.length
            // 扩大完取值范围后 随机数 位数消除 方法：Math.floor向下取整 
            var a = Math.floor(a)
            //  向下取整后 有了随机数 就可 随机拿到 数组里面的笑话了
            alert(xh[a]);
        }
            	 }
```

# 小娜V2版本 代码封装

## 封装前初始化和引用

* 创建一个文件夹在文件夹里创建一个 .JS的文件 

```js
// 创建 文件夹
JS
// 创建 文件
XiaoNa.js
// 代码中 引入
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- 小娜封装功能js文件 -->
    <script src="./JS/XiaoNa.js"></script>
</head>
```

## 封装代码注意事项

* 1. 必须在代码内部引入 XiaoNa.js文件
* 2. 在.js/ 文件内部 写函数方法
* 3. 在function后面命名
* 4. 观察 是否需要返回值
* 5. 观察 是否需要设置形参或实参

## 求和 分支 功能封装

```js
// 函数命名 sueforpeace
// 需要设置 形参与实参
function sueforpeace(he) {
    he = he.split(",");
    var sum = 0;
    for (var i = 0; i < he.length; i++) {
        he[i] = he[i] * 1
        sum += he[i]
    }
    // 有返回值
    return sum
};
// 调用方式
sueforpeace();
// 可以传入 实参
sueforpeace(he)
// 需要返回值可以声明变量接收
var data = sueforpeace(he)
```

## 时间 分支 功能封装

```js
// 函数命名 SystemTime
// 不需要设置 形参与实参
function SystemTime() {
    // 构造 时间函数
    var data = new Date();
    // 年
    var nian = data.getFullYear();
    // 月
    var yue = data.getMonth() + 1;
    // 日
    var ri = data.getDate();
    // 时
    var shi = data.getHours();
    // 分
    var fen = data.getMinutes();
    // 秒
    var miao = data.getSeconds();
    var Time = `${nian}年${yue}月${ri}日${shi}时${fen}分${miao}秒`
    // 但 有返回值
    return Time
};
	// 调用方式 
	SystemTime();
	// 接收返回值
	var data = SystemTime()
    // 没有形参与实参不需要传入
```

## 笑话 分支 功能封装

```js
// 函数命名 Randomjokes
// 不需要 形参与实参
function Randomjokes() {
    var xh = ["笑话1··", "笑话2··", "笑话3··", "笑话4··", "笑话5··", "笑话6··",];
    var a = Math.random();
    a = a * xh.length;
    a = Math.floor(a);
    // 有返回值
    return xh[a]
}
// 调用方式 
	Randomjokes();
	// 接收返回值
	var data = Randomjokes();
    // 没有形参与实参不需要传入
```

# 小娜V3版本 功能对象化

1. 对象化 代码的目的是为了 减少代码量 美化页面代码
2. 利用代码语义化的方式去管理代码
3. 把所有的 方法集中到对象上面去管理

## 对象化前 初始化文件和引用文件

1. 创建js文件夹
2. 引用 JS文件夹内文件
3. 在文件夹内创建命为（Na）对象  
4. 向Na这个对象上 添加和编写一系列方法以及功能

```js
   // 创建js文件夹
    js
    // 在文件夹内创建js文件
    XiaoNaV3.js
< head >
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>小娜V3</title>
    <!-- 小娜对象化js文件 -->
  	<script src="./JS/XiaoNaV3.js"></script>
</head>
```

## 向对象内添加(求和)功能

* 分步 示例、1

```js
// 声明 一个名为Na 的对象
var Na = {
     // 求和功能
     // 把方法添加到对象上 已匿名函数的方式进行编写
     // 设置形参和实参
    sueforpeace: function (he) {
        he = he.split(",");
        var sum = 0;
        for (var i = 0; i < he.length; i++) {
            he[i] = he[i] * 1;
            sum += he[i]
        };
        // 有返回值
        return sum
    }
}
// 调用方式
Na.sueforpeace();
// 可以传入 实参
Na.sueforpeace(he)
// 需要返回值可以声明变量接收
var data = Na.sueforpeace(he)
```

## 向对象内添加(时间)功能

*  分步 示例、2

```js
var Na = {
    // 系统时间
    // 不需要设置形参与实参
    SystemTime: function () {
        // 构造 时间函数
        var data = new Date();
        // 年
        var nian = data.getFullYear();
        // 月
        var yue = data.getMonth() + 1;
        // 日
        var ri = data.getDate();
        // 时
        var shi = data.getHours();
        // 分
        var fen = data.getMinutes();
        // 秒
        var miao = data.getSeconds();
        var Time = `${nian}年${yue}月${ri}日${shi}时${fen}分${miao}秒`
        // 有返回值
        return Time
    },
}
    // 调用方式
    Na.SystemTime();
    // 需要返回值可以声明变量接收
    var data = Na.SystemTime()
```

## 向对象内添加(笑话)功能

*  分步 示例、3

```js
var Na = {
     // 随机笑话
     // 不需要 设置型参与实参
    Randomjokes: function () {
        var xh = ["笑话1··", "笑话2··", "笑话3··", "笑话4··", "笑话5··", "笑话6··",];
        var a = Math.random();
        a = a * xh.length;
        a = Math.floor(a);
        // 有返回值
        return xh[a]
    }
}
    // 调用方式
    Na.Randomjokes();
    // 需要返回值可以声明变量接收
    var data = Na.Randomjokes()
```

## 代码总体示例 ！！！

```js
// 代码语义化
var Na = {
    // 求和
    sueforpeace: function (he) {
        he = he.split(",");
        var sum = 0;
        for (var i = 0; i < he.length; i++) {
            he[i] = he[i] * 1;
            sum += he[i]
        };
        return sum
    },  // ！！！ 代码语句结束 分割接节点 必须用逗号, 进行结尾 用结束符; 会报错
    // 系统时间
    SystemTime: function () {
        // 构造 时间函数
        var data = new Date();
        // 年
        var nian = data.getFullYear();
        // 月
        var yue = data.getMonth() + 1;
        // 日
        var ri = data.getDate();
        // 时
        var shi = data.getHours();
        // 分
        var fen = data.getMinutes();
        // 秒
        var miao = data.getSeconds();
        var Time = `${nian}年${yue}月${ri}日${shi}时${fen}分${miao}秒`
        return Time
    },
    // 随机笑话
    Randomjokes: function () {
        var xh = ["笑话1··", "笑话2··", "笑话3··", "笑话4··", "笑话5··", "笑话6··",];
        var a = Math.random();
        a = a * xh.length;
        a = Math.floor(a);
        return xh[a]
    }
};
```

