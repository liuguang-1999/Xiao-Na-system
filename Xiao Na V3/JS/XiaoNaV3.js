





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
    },
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