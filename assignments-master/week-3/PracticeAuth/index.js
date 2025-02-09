const express = require("express")
const jwt = require("jsonwebtoken");
const { decode } = require("punycode");
const jwtPassword = "12345";

const app = express();
app.use(express.json())

const ALL_USERS = [
    {
        username : "tezaswa@gmail.com",
        password : "123",
        name : "tezaswa awasthi"
    },
    {
        username : "sumit@gmail.com",
        password : "12312",
        name : "sumit singh"
    },
    {
        username : "navneet@gmail.com",
        password : "12345",
        name : "navneet dutta"
    }
];

function userExists(username,password){
    let userExists = false;
    for(let i=0; i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signIn",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg : "user doesn't exist in out in memory DB"
        })
    }
    var token = jwt.sign({username : username},jwtPassword);
    return res.json({
        token
    });
});

app.get("/users",function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;
    }
    catch{
        return res.status(403).json({
            msg : "Invalid Token"
        })
    }
    res.json({
        users : ALL_USERS
    })
})


app.listen(3001);