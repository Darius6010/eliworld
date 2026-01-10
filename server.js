const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
res.send("Senworld server is running!");
});

io.on("connection",(socket) => {
console.log("Player disconnected:", socket.id);
 });

const PORT = process.env.PORT|| 3000;
server.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);

});
