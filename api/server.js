const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const userRouter = require("../users/user-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "Ready to go" });
});

server.use("/api/users", userRouter);
module.exports = server;
