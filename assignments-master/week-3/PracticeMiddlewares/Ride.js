const express = require("express");
const app = express();

app.use(express.json())

function isOldEnough(age){
    if(age >= 14){
        return true;
    }
    else{
        return false;
    }
}

// app.get("/ride1",function(req,res){
//     if(isOldEnough(req.query.age)){
//         res.json({
//             msg : "you have successfully ridden the ride 1"
//         });
//     }
//     else{
//         res.status(411).json({
//             msg : "Sorry you are not of age yet"
//         })
//     }
// })

// app.get("/ride2",function(req,res){
//     if(isOldEnough(req.query.age)){
//         res.json({
//             msg : "you have successfuly ridden ride2"
//         })
//     }
//     else{
//         res.status(411).json({
//             msg : "Sorry you are not of age yet"
//         })
//     }
// })


// now the above code runs fine but we haven't introduced middlewares yet

// now we wil be using middlewares and will see why it is good 

function isOldEnoughMiddleware(req,res,next){
    if(age >= 14){
        next();
    }
    else{
        res.json({
            msg : "you are not eligible"
        })
    }
}

app.get("/ride1",isOldEnoughMiddleware, function(req,res){
    res.json({
        msg : "you have successfully ridden the ride 1"
    });
})

app.get("/ride2",isOldEnoughMiddleware,function(req,res){
    res.json({
        msg : "you have successfuly ridden ride2"
    })
})


// previyously we were checking it two times once in the function is old enough and one in our endpoint so for that we have introduced middlewares

app.listen(3001)