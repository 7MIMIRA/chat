const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));

const router = require('./routes/index.js');
app.use('/api', router);

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (_socket) => {
  console.log("a user has connected");
});

httpServer.listen(port);
console.log(`Server started at http://localhost: ${port}`);