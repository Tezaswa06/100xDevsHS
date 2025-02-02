// console.log("Hello World");
// console.log(a);

// var a = 1;
// a = 5;
// console.log(a);

// let b = 1;
// b = 2;// we can change the value of let
// console.log(b);

// const a = 1;// we can not change the value of const
// a = 5;
// console.log(a);

// let firstName = "Tezaswa";
// let age = 25;
// let isMarried = true;

// console.log("The person name is" + firstName + " and it's age is" + age);

// if(isMarried == false){
//     console.log(firstName + "is not married");
// }
// else{
//     console.log(firstName + "is married");
// }

// let ans = 0;
// for(let i=0; i<=1000; i++){
//     ans = ans + i;
// }
// console.log(ans);

const ages = [2 ,3, 4, 5, 6, 7, 8, 1, 22];
// for(let i=0; i<ages.length; i++){
//     if(ages[i] % 2 == 0){
//         console.log(ages[i]);
//     }
// }

// let max = -1;
// for(let i=0; i<ages.length; i++){
//     if(max < ages[i]){
//         max = ages[i];
//     }
// }
// console.log(max);

// question ->  we have to print people who is male

// const personArr = ["Tezaswa","harkirat","swati"];
// const genderArr = ["male","male","female"];

// for(let i=0; i<genderArr.length; i++){
//     if(genderArr[i] == "male"){
//         console.log(personArr[i]);
//     }
// }

// instead of using above method we can use objects

// const allUsers = [{
//     firstName : "Tezaswa",
//     gender : "male"
// },{
//     firstName : "harkirat",
//     gender : "male"
// },{
//     firstName : "priya",
//     gender : "female"
// }]

// for(let i=0; i<allUsers.length; i++){
//     if(allUsers[i]["gender"] == "male"){
//         console.log(allUsers[i]["firstName"])
//     }
// }

// function sum(a,b){
//     const sumVal = a + b;
//     return sumVal;
// }

// const val = sum(1,5);
// console.log(val);

// function airthmaticOpns(a,b,type){
//     if(type == "sum"){
//         const val = sum(a,b);
//         return val;
//     }
//     if(type == "sub"){
//         const val = sub(a,b);
//         return val;
//     }
// }

// function sum(a,b){
//     return a + b;
// }
// function sub(a,b){
//     return a - b;
// }

// const val = airthmaticOpns(1,3,"sub");
// console.log(val);

// the above is a normal function 
// but we need to implement a callback functions

// function airthmaticOpns(a,b,airthmaticFunction){
//     const ans = airthmaticFunction(a,b);
//     return ans;
// }

// function sum(a,b){
//     return a+b;
// }
// const val = airthmaticOpns(1,2,sum);
// console.log(val);

function greet(){
    console.log("Hello World");
}

setTimeout(greet,4 * 1000);// this set time out is called after 4 secs as we have set the timer to 4
// we can use setInterval function as well
// the above is an example of callback function as we are passing function as an argument