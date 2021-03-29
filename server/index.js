const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./router");

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

//Socket connection
io.on("connection", (socket) => {
  console.log("We have a new connection!!!");

  socket.on("disconnect", () => {
    console.log("User had left !!!");
  });
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
