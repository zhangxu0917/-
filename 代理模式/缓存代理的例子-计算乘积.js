// 计算乘积的方法；
var mult = function() {
    var a = 1;
    for (var i = 0, l = arguments.length; i < l; i++) {
        a = a * arguments[i];
    }
    return a;
};

// 计算加和
var plus = function() {
    var a = 0;
    for (var i = 0, l = arguments.length; i < l; i++) {
        a = a + arguments[i];
    };
    return a;
};

// 创建缓存代理工厂
var createProxyFactory = function(fn) {
    var cache = {};
    return function() {
        var args = Array.prototype.join(arguments, ",");
        if (args in cache) {
            return cache[args];
        }
        return cache = fn.apply(this, arguments);
    }
};
var proxyMult = createProxyFactory(mult);
proxyPlus = createProxyFactory(plus);

console.log(proxyMult(1, 2, 3, 4)); // 输出：24
console.log(proxyMult(1, 2, 3, 4)); // 输出：24
console.log(proxyPlus(1, 2, 3, 4)); // 输出：10
console.log(proxyPlus(1, 2, 3, 4)); // 输出：10
