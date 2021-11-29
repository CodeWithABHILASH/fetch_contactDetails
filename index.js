const {MongoClient} = require("mongodb");
const client =new MongoClient(
   "mongodb+srv://ABHILASH_A:Mongo123456@cluster0.askpc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");


client.connect().then((mClient)=>{
const db= mClient.db();
db.collection("ContactDetails").insertMany([{
    name:"ABHILASH A",
    phone:"8688164789",
    email:"abcxyz@gmail.com",
    protofolio:"https://codewithabhilash.github.io/"
},{
    "name" :"Sagnik Biswas",
    "phone": "6289202677",
    "email":"me@sagnikbiswas.tech",
    
    "portfolio": "https://sagnikbiswas.tech"
    }
    ])
.then(()=>{
    console.log("content added");
});
});