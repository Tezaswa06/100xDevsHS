// creating a http server
// express

const express = require('express')

function calculateSum(n){
    let ans = 0;
    for(let i=0; i<n; i++){
        ans += i;
    }
    return ans;
}

const app = express();
// below we are taking input as queery parameter as after /?n=30 => this is how we will take input
// app.get("/",function(req,res){
//     const n = req.query.n;
//     const ans = calculateSum(n);
//     res.send(ans.toString());
// })

// the above logic is very simple


// app.listen(3001);