const express = require("express");
const http = require("http");
const {Server} = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("../client"));

io.on("connection", (socket) => {
    console.log("Player connected:", socket.id);

    socket.on("move", data => {
        socket.broadcast.emit("move", data);
    });

    socket.on("disconnect", () => {
        console.log("Player disconnected:",
             socket.id);
    });
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});

