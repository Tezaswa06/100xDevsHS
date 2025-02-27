const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors())

app.get("/findSum",function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());
});

app.get("/simpleInterest",function(req,res){
    const p = parseInt(req.query.p);
    const r = parseInt(req.query.r);
    const t = parseInt(req.query.t);
    const interest = p*(1+r*t);
    res.send(interest.toString());
})

app.listen(3001);

// the above is the backend server for summing the two numbers which we are going to hit it from frontend 