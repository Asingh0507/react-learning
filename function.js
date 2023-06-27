
//task1

// var num = window.prompt("enter a number");
// function fn(x){
//     return x*60;
// }
// console.log(fn(num));



//task2

// var obj = {
//   "1": 5,
//   "2": 7,
//   "3": 0,
//   "4": 0,
//   "5": 0,
//   "6": 0,
//   "7": 0,
//   "8": 0,
//   "9": 0,
//   "10": 0,
//   "11": 0,
//   "12": 0
// };

// var res = Object.keys(obj).map(function(k) {

//     return [+k, obj[k]];
//   });

// console.log(res);

//task2 another method

// let obj = {
//   a:1,
//   b:2,
// }

// let arr = Object.entries(obj);
// console.log(arr);



//task3

// var a = window.prompt("enter num");
// var b = window.prompt("enter length");
// var arr = [];
// var x = +a;
// for (let i=1;i<=b;i++){
//     arr.push(x*i);
// }
// console.log(arr);

//task4
// let obj = { a: 1, b: 2, c: 3 , e:3, t:9,f:1};

// function ace(obj) {
//     let arr = Object.entries(obj);
//     arr.sort();

//     let arrkeys = arr.map((value)=>{
//         return value[0];
//     })
//     let arrvalues = arr.map((value)=>{
//         return value[1];
//     })
//     return [arrkeys,arrvalues];
// }

// const x = ace(obj);
// console.log(x);

//task5

// function checkEquals(arr1, arr2) {
//   console.log(JSON.stringify(arr1));
//   return JSON.stringify(arr1) === JSON.stringify(arr2);
// }

// let arr1 = [1,2,3,4,5,{a:6}];
// let arr2 = [1,2,3,4,5,{a:6}];
// let x = checkEquals(arr1,arr2);
// console.log(x);



//task6
// function fn (a){
//     return a === Object(a);
// }

// var a = "sr";
// console.log(fn(a));


// task7
// function fn (s){
//     if (s.length < 4) return false;
//     let a = s.indexOf('@');
//     if (a===-1) return false;
//     let b = -1;
//     let count =0;
//     for (let i=0;i<s.length;i++){
//         if (s[i]==='.') b = i;
//         if (s[i]==='@') {
//             count++;
//         }
//     }
//     if (b==-1 || count !=1) return false;
//     let y='*';
//     for (let i = a-1;i>=0;i--){
//         if (s[i]!=='.') {
//             y=s[i];
//         }
//     }
//     if (y=='*') return false;
//     if (b <a) return false;
//     if (b > s.length-3) return false;
//     return true;
// }

// console.log(fn('d@gl.com'));