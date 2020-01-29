# 小娜V1系统

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

