const express = require("express");
const ejs= require("ejs");
const {MongoClient} =require("mongodb");


const app=express();
let db;

app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  res.render("index");
})

app.post("/contact",async(req,res)=>{
  try{
   let result= await db.collection("ContactDetails").findOne({name:req.body.name})

res.render("view",{result})
  }catch(e){
       res.send("cannot find the contact");
  }
  
})



const client =new MongoClient(
    "mongodb+srv://ABHILASH_A:Mongo123456@cluster0.askpc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    client.connect().then((mClient)=>{
        db= mClient.db();
       console.log("DatabasecConnected");
       app.listen(3000, () => {
       console.log("listening on port 3000");
       });
   });
