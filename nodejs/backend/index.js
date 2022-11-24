const express = require("express")
const path=require('path');
const port=1000

const mongodb = require("mongodb");
const { join, dirname } = require("path");
const mongodbClient = require("mongodb").MongoClient

const bodyParser=require("body-parser")
const methodOverride=require("method-override")
const cors=require("cors")

const app = express()
app.use(bodyParser.json())
app.use(cors())

const connection = "mongodb+srv://admin:admin1234@cluster0.3j6pyh4.mongodb.net/?retryWrites=true&w=majority"


var collection1 ;
var register;
mongodbClient.connect(connection,(err,succ)=>{
        if (err) throw err;
        console.log("database connected")

        collection1 = succ.db("Database4").collection("collection1");

        register = succ.db("Database4").collection("register");
})

app.get("/add",(req,res)=>{
        collection1.insertOne({
                Name:'riya1',
                RollNo:1
        }).then((succ) => {
           res.send("data added")     
        }).catch((err) => {
                res.send(err)
        });
})
//deleteOne
app.get("/del",(req,res)=>{
        var id1 = new mongodb.ObjectId("634a432c56c5c95289193b69")
        collection1.deleteOne({
                // match the id first
                _id:id1
        }).then((succ)=>{
                res.send("data deleted")
        })
})

app.get("/updatedata",(req,res)=>{
        var id1 = new mongodb.ObjectId("634a432c56c5c95289193b69");
        collection1.updateOne({
                _id:id1
        },{
                $set:{
                        Name:'RIYA 123'
                }
        }).then((succ)=>{
                res.send("data updated")
        })
})

app.post("/addform",(req,res)=>{
        console.log(req.body)
        collection1.insertOne(req.body).then((succ)=>{
                res.send("data added")
        })
})
app.post("/deldata",(req,res)=>{
        console.log(req.body.ID)
        var id1=new mongodb.ObjectId(req.body.ID)
        collection1.deleteOne({
                _id:id1
        
        }).then((succ)=>{
                res.send("deleted")
        })
})

var id1 ;
app.post("/getonedata",(req,res)=>{
        id1 = new mongodb.ObjectId(req.body.ID)
        collection1.findOne({
                _id:id1
        }).then((succ)=>{
                res.send(succ)
        })
})

app.post("/editdata",(req,res)=>{
        collection1.updateOne({
                _id:id1
        },{
                $set:{
                        Name: req.body.Nm,
                        Email: req.body.Em,
                        Password: req.body.Ps,
                        Contact:req.body.Ct
                }
        }).then((succ)=>{
                res.send("data updated")
        })
})




app.get("/getdata1",(req,res)=>{
        collection1.find().toArray().then((succ)=>{
                res.send(succ)
        })
})
app.get('/about',(req,res)=>{
        res.send('about')
        res.sendFile(path,join(--dirname,'index.html'))
})


app.get('/getdata',(req,res)=>{
        collection1.find().toArray().then((succ)=>{
                res.send(succ)    
        })  
})

app.get("/",(req,res)=>{
        res.send("abcgjtfhbvjghfbkhnbugjfubvkhgfjvbhkbh")
})

app.get("/abc1",(req,res)=>{
        res.send("page 1")
})
app.get('/about',(req,res)=>{
        res.send('about')
        res.sendFile(path,join(--dirname,'index.html'))
})


app.post("/register",(req,res)=>{
        console.log(req.body)
        register.findOne({
                UserName:req.body.UserName,
        }).then((succ)=>{
                res.send(succ)
        })
})

app.post("/adduser",(req,res)=>{
        register.insertOne(req.body).then((succ)=>{
                res.send(succ)
        })
})


app.listen(port,(req,res)=>{
        console.log("server start")
})