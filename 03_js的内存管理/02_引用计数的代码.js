var obj = {name: "why"}

var info = {name: "kobe", friend: obj}

var p = {name: "james", friend: obj}

// 引用计数存在一个很大的弊端: 循环引用
var obj1 = {friend: obj2}
var obj2 = {friend: obj1}

// 引用计数：当一个对象有一个引用指向它时，那么这个对象的引用就+1，当一个对象的引用为0时，这个对象就可以被销
// 毁掉；这个算法有一个很大的弊端就是会产生循环引用 使得循环引用的对象明明没有人会去使用但还是会留在内存中



// 标记清除：这个算法是设置一个根对象（root object），垃圾回收器会定期从这个根开始，找所有从根开始有引用到的对象，对
// 于哪些没有引用到的对象，就认为是不可用的对象；
// 这个算法可以很好的解决循环引用的问题；