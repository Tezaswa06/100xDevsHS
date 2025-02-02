const fs = require("fs")


fs.readFile('example.txt','utf-8',function(err,data){
    if(err){
        console.error(err);
        return;
    }
    let cleanedFile = data.split(' ')
                          .filter(word => word !== '')
                          .join(' ');

    fs.writeFile('example.txt',cleanedFile,'utf8',function(err){
        if(err){
            console.error(err);
        }
        else{
            console.log("file cleaned successfully");
        }
    });
});


