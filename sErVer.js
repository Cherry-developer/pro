const express=require("express")
const { v4: uuidv4 }=require("uuid");
const app=express();
const server = require(“http”).Server(app);
const io = require(“socket.io”);
io.on(“connection”, (socket) => {
socket.io(“join-room”, (roomId) => {
  console.log(roomId);
//socket.join(roomId);
//socket.to().broadcast.emit(“user-connected”, userId);
});
app.set("view engine","ejs");
app.use(express.static("public"));
app.get("/",function(req,res)
{
  res.redirect(`/${uuidv4()}`);
});
app.get("/:room",function(req,res)
{
  res.render("room",{roomId:req.params.room});
});
app.listen(3000,function()
{
  console.log("Server started on port 3000");
});
