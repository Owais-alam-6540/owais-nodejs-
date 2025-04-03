// npm i mongooes

let mongo =require("mongoose");
require("dotenv").config()

let url = process.env.DB

mongo.connect(url).
then(() => {
    console.log("connected to db")
}).catch((e)=>{
    console.log(e)
})