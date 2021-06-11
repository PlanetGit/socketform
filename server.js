const httpServer = require("http").createServer();
const options = { 
  // cors: {
  //   origin: ["http://127.0.0.1:5500/"],
  //   allowedHeaders: ["*"],
  //   credentials: true
  // }
 };
const io = require("socket.io")(httpServer, options);

io.on("connection", (socket) => {
  socket.on("editing", (arg) => {
    console.log(arg); // 
  });
});

// io.on("connection", (socket) => {
//   console.log(socket.id);
  
//   socket.emit('editing', 'true');

//   socket.on("disconnecting", (reason) => {
//     for (const room of socket.rooms) {
//       if (room !== socket.id) {
//         socket.to(room).emit("user has left", socket.id);
//       }
//     }
//   });
// });

httpServer.listen(1000);
