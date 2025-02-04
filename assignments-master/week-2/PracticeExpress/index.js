const express = require('express');
const app = express();

var users = [{
    name : "jhon",
    kidneys : [{
        healthy : false
    }]
}];

app.use(express.json());

app.get('/gettingNoOfKidneys',function(req,res){
    const jhonKidneys = users[0].kidneys;
    const numberOfKidneys = jhonKidneys.length;
    let noOfHealthyKidneys = 0;
    for(let i=0; i<jhonKidneys.length; i++){
        if(jhonKidneys[i].healthy){
            noOfHealthyKidneys = noOfHealthyKidneys + 1;
        }
    }
    const noOfUnhealthyKidneys = numberOfKidneys - noOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    });
})
app.post('/addingNewKidney',function(req,res){// in post we send data in body
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "kidneys are added !"
    })
})

app.put('/makingKidneysHealthy',function(req,res){
    for(let i=0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})

app.delete('/removeAllUnhealthyKidneys',function(req,res){
    
    if(isThereAtLeastOneUnhealthyKidney()){
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy : true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg : "removed all the unhealthy kidneys"})
    }
    else{
        res.status(404).json({
            msg : "kidneys are already healthy"
        });
    }
})

function isThereAtLeastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3001);


