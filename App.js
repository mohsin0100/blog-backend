// create server 
const express=require("express");
const app =express();

const http =require("http");
const bodyparser=require("body-parser")
const mongoose=require("mongoose")
const server=http.createServer(app);

app.use(bodyparser.json());
// connect with database

let uri="mongodb://127.0.0.1:27017/Blog"
mongoose.set("strictQuery",false);
mongoose.connect(uri).then(()=>{
    console.log("database connected")
})


// import routes

app.use("/v1/api",require("./Routes/Api"));



server.listen(4000,()=>{
    console.log("Server is running at 4000");
})