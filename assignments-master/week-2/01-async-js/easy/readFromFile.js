
const { error } = require('console');
const fs = require('fs')

console.log("start reading");

fs.readFile("example.txt","utf-8",(err,data) => {
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(data);
    }
});

console.log("expensive operation");

let a = 0;
for(let i=0; i<10000000; i++){
    a = a + i;
}
console.log(a);