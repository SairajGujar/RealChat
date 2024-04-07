const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket)=>{
  console.log('connection success')
  socket.on('send_message', (data)=>{
    const {message, room_name, date, sender} = data
    // console.log(room_name)
    io.sockets.in(room_name).emit('receive_message', {
      message:message.message,
      date,
      sender
    })
  })
  socket.on('join_room', (room)=>{
    console.log(room)
    socket.join(room)
  })
})






server.listen(4000, () => {
    console.log("listening on 4000");
  });
  