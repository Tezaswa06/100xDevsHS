const fs = require('fs');

console.log("started writing in the file");

let data = "Tezaswa Awasthi"
fs.writeFile('example.txt',data,(err) => {
    if(err){
        console.log("file contains error");
        return;
    }
    console.log("file written successfull");

    fs.readFile('example.txt','utf-8',(err,data) => {
        if(err){
            console.log("file read unsuccessfull");
            return;
        }
        console.log(data);
    });
});

let a = 0;
for(let i=0; i<10000000; i++){
    a += i;
}
console.log(a);