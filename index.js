const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http,{cors:{"origin":[
    "http://localhost:3000",
  ],
  credentials: true,
}});
// const cors = require("cors");
// app.use(express.json());
//Serve static react app

io.on("connection", (socket) => {
    // console.log(socket)
    console.log('A user connected');
    // socket.emit("vishal",{desc:"vishal server"})
    socket.broadcast.emit("sharma",{desc:"sharma server"})
    // socket.on("sharma",(data)=>{console.log("FROM SHARMA : ",data)})
});

// setInterval(()=>{console.log(io.engine.clientsCount, io.of("/").sockets.size);
// },2000)

http.listen(5000, () => {
  console.log('listening on : 5000');
});

// const path=require("path");

// app.use(express.static('client/build'));
//  app.get('*', (req, res) => {
//         res.sendFile(path.resolve('client','build','index.html'));
// });