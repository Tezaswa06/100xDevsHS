const express = require("express");

const app = express();
app.use(express.json());
// app.get("/health-checkups",function(req,res){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if(username != "Tezaswa" || password != "pass"){
//         res.status(400).json({"msg" : "Inputs are not correct"})
//         return ;
//     }
//     if(kidneyId != 1 && kidneyId != 2){
//        res.status(400).json({"msg" : "Inputs are not correct"})
//        return ;
//     }

//     res.json({
//         msg : "Your kidney is fine !"
//     });
// });


app.post("/health-checkup",function(req,res){
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;
    res.send("You Have " + kidneyLength + "kidneys" );
});

// there is one more middle ware except the json one which is used at the top
// but we can add global catches at the bottom so that if there is an exception in our code so the end user can not see the log while hitting the api
app.use(function(err,req,res,next){
    res.json({
        msg : "sorry something is wrong with you server"
    })
})
app.listen(3001);