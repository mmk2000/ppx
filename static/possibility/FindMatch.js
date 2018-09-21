var Match = {
    arr :null,
    len : 0,
    /**
     * 找出数组中最大的数
     * @param arr
     * @returns {*}
     */
    max :function (arr) {
        var len = arr.length;
        var newArr = arr.sort();
        return newArr[len - 1];
    }
}



function findMax1(str) {
    var json = {};
    var num = 0;
    var value = null;
    var value2 = null;
    for(var i = 0 ; i < str.length;i++){
        var k = str[i];
        if(!json[k]){
            json[k] = [];
        }
        json[k].push(k);
    }

    for(var index in json ){
        if(num < json[index].length){
            num = json[index].length;
            value = json[index][0];
        }
    }
    console.log(json[index])
    console.log("出现最多的字符是:" + value );
    console.log("出现次数是:" + num);
}


var str = "zhaochucichuzuiduodezifu";
var arr = [];//定义一个新数组
//循环遍历字符串
for (var i = 0, length = str.length; i < length; i++) {
    var index = -1;
    var j = 0;
//找每一个字符
    do {
        index = str.indexOf(str[i], index + 1);
        if (index != -1) {
            j++;
        }
    }while (index != -1);
    arr[j] = str[i]; //把字符串str中的字符赋给数组arr索引为j的数据，当多次循环后，会出现重复赋值的现象，
    //后赋值的会把之前的赋值覆盖掉，但不影响我们找出字符出现最多的那个
}
console.log(arr);
console.log("最多的字符是" + arr[arr.length - 1]);
console.log("次数是" + (arr.length - 1));




var str = "zhaochucichuzuiduodezifu";
var o = {};
for (var i = 0, length = str.length; i < length; i++) {
// var char = str[i];
    var char = str.charAt(i);
    if (o[char]) { //char就是对象o的一个属性，o[char]是属性值，o[char]控制出现的次数
        o[char]++; //次数加1
    } else {
        o[char] = 1; //若第一次出现，次数记为1
    }
}
console.log(o); //输出的是完整的对象，记录着每一个字符及其出现的次数
//遍历对象，找到出现次数最多的字符和次数
var max = 0;
var maxChar = null;
for (var key in o) {
    if (max < o[key]) {
        max = o[key]; //max始终储存次数最大的那个
        maxChar = key; //那么对应的字符就是当前的key
    }
}
console.log("最多的字符是" + maxChar);
console.log("出现的次数是" + max);


var str = "nininihaoa";
var o = {};
for (var i = 0, length = str.length; i < length; i++) {
    var char = str.charAt(i);
    if (o[char]) {
        o[char]++; //次数加1
    } else {
        o[char] = 1; //若第一次出现，次数记为1
    }
}
console.log(o); //输出的是完整的对象，记录着每一个字符及其出现的次数
//遍历对象，找到出现次数最多的字符的次数
var max = 0;
for (var key in o) {
    if (max < o[key]) {
        max = o[key]; //max始终储存次数最大的那个
    }
}
for (var key in o) {
    if (o[key] == max) {
//console.log(key);
        console.log("最多的字符是" + key);
        console.log("出现的次数是" + max);
    }
}



var str="sssfgtdfssddfsssfssss";
var num=0;
var value=null;
function max(){
    var new_str=str.split("").sort().join("");
    var re=/(\w)\1+/g; //没有\1,re就是一整个排好序的字符串，有了\1就是出现过的有重复的取出来，\1表示跟前面第一个子项是相同的
    new_str.replace(re,function($0,$1){ //$0代表取出来重复的一个个整体，如[s,s...],[f,f..],[d,d....] $1代表这个整体里的字符
        if(num<$0.length){
            num=$0.length;
            value=$1
        }
    });
    alert(value+":"+num)
};





var str="sssfgtdfssddfsssfssss";
function max(){
    var json={};
    for(var i=0;i<str.length;i++){
        var k=str[i]; //k是所有字符,字符串也跟数组一样可以通过中括号下标方法取到每个子元素
        if(json[k]){
            json[k]++; //json里有这个字符时，把这个字符的数量+1，
        }
        else{
            json[k]=1; //否则把这个字符的数量设为1
        }
    }
    var num=0;
    var value=null;
    for(var k in json){ //s、f、g、t、d
        if(json[k]>num){
            num=json[k];
            value=k;
        }
    }
    alert("出现最多的字符是:"+value+',出现次数是:'+num);
};
// max(str);




function getUpper(arr, key){
    //获取某个元素最后出现位置
    var low = 0, high = arr.length - 1;
    console.log(high);
    var mid = Math.round((low + high) / 2);
    console.log(mid);
    /*其实是一个递归迭代*/
    while(low <= high){

        if(arr[mid] <= key){
            //当要查找的值比中位数大于等于时，把查找的低位限制为mid+1
            low = mid + 1;
        }else{
            //当要找的值比 中位数小时，把查找的高位限制为mid-1
            high = mid - 1;
        }
        mid = Math.round((low + high) / 2);

    }
    // 返回最后出现位置
    return high;
}

function getLower(arr,key){//获取某个元素第一次出现位置
    var low = 0, high = arr.length - 1;
    var mid = Math.round((low + high) / 2);
    while(low <= high){
        //当要找的值比 中位数小于等于时，把查找的高位限制为mid+1
        if(arr[mid] >= key){
            high = mid -1;
        }else{
            //当要找的值比 中位数大时，，把查找的低位限制为mid+1
            low = mid + 1;
        }
        mid = Math.round((low + high) / 2);
    }
    //返回第一次出现位置
    return low;
}

var arr = [0,1,1,2,2,2,2,4,4,4]; //测试数组
var key = 4;
var higher = getUpper(arr,key);
var lower = getLower(arr,key);
console.log(higher-lower+1);


// const pl3 = "http://f.apiplus.net/pl3-12.json";

// console.log("constants.js loaded!")