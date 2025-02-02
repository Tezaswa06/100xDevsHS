// learning callbacks


// simple functions below no callbacks used
function square(n) {
    return n * n;
  }
  
  function cube(n) {
    return n * n * n;
  }
  
  function sumOfSquares(a, b) {
    let square1 = square(a);
    let square2 = square(b);
    return square1 + square2;
  }
  function sumOfCubes(a, b) {
    let square1 = cube(a);
    let square2 = cube(b);
    return square1 + square2;
  }
 // let ans = sumOfCubes(1, 2);
  //console.log(ans);
// but the above functions are violating DRY(Don;t repeat yourself) principle

function sumOfSomething(a, b,fn) {// now this is callback passing function as an argument
    let square1 = fn(a);
    let square2 = fn(b);
    return square1 + square2;
  }

 // let ans = sumOfSomething(1,2,cube);// now dry principle is not violated
  //console.log(ans);


// now we are learning async function
// the async function we have learned are reading a file and setTimeout
// it executes the current proccess in the backend and executes other processes
function onDone(){
//  console.log("Hi There");
}

setTimeout(onDone,1000);
//console.log("after set timeout");

// let a = 0;
for(let i=0; i<100000000; i++){
//  a++;
}
//console.log(a);

const fs = require("fs");

fs.readFileSync("a.txt","utf-8",function(err,data){
  console.log(err);
  console.log(data);
});
console.log("done first");

// learning Promises 

// function myOwnSetTimeOutfunction(callback,duration){
//   setTimeout(callback,duration);
// }

// myOwnSetTimeOutfunction(function(){
//   console.log("after timeout")
// },1000);
// console.log("tez");

// the above code runs fine but we can use promise to make it more understandable

// promisify async function

// function promisifiedMyOwnSetTimeout(duration){
//   const p = new Promise(function(resolve){
//     setTimeout(function(){
//       resolve();
//     },duration);
//   });
//   return p;
// }
// const ans = promisifiedMyOwnSetTimeout(1000);
// console.log(ans);
// ans.then(function(){
//   console.log("timeout is done");
// });


// another example of promise 

// function kiratsAsyncFunction(){
//   let p = new Promise(function(resolve){
//     resolve("hi There");
//   });
//   console.log("check2");
//   return p;
// }

// function main(){
//   kiratsAsyncFunction().then(function(value){
//     console.log(value);
//   });
//   console.log("check");
// }
// main();