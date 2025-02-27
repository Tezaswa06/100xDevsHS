const jwt = require("jsonwebtoken");

// decode , verify , generate

const value = {
    name : "tezaswa",
    accountNumber : 1234545564
}

const token = jwt.sign(value , "secret");// the secret written in this line must not be exposed
console.log(token);
// the above token is generated using this secret ans hence this token can only be verified using this secret
// so this token is my checkbook from bank's example
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGV6YXN3YSIsImFjY291bnROdW1iZXIiOjEyMzQ1NDU1NjQsImlhdCI6MTczOTA5NjE0M30.MuQGl5bRIjBn9SJQ0AXUg4FYIS7bfaCK_XgY7pKXT7I
// so the above token can be decoded so we have to protect the above token


