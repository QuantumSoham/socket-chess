const express= require("express");
const socket =require("socket.io");
const http=require("http");
const {Chess} =require("chess.js"); //Chess class in js
const path=require("path");

const app=express();
const server=http.createServer(app);
//instantiate socket io in http server
const io=socket(server);//link http server with socket 

//initialize chess
const chess=new Chess(); //from chess js
let players={};
let currentPlayer="white";

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("index",{title: "Chess Game"});
});

io.on("connection", function(uniquesocket)
{
    console.log("connected");
    uniquesocket.on("test-event",function(){
        console.log("test-event received");
        //broadcast event to all the connected clients
        io.emit("test-event-received");
    });
    uniquesocket.on("disconnect",function(){
        console.log("client disconnected");
    });
});

server.listen(3000,function(){
    console.log("listening on port 3000");
});
