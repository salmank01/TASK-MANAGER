const express = require("express");
const app = express();
const connectionDB = require("./DB/connect");
require("dotenv").config();
const router = require("./router/router");

app.use(express.json())
app.use("/api/v1", router);

const port = 3000;
const startServer = async () => {
  try {
    app.listen(port, console.log("Server is listening..."));
    await connectionDB(
      process.env.MONGO_URI,
      console.log("Connected to the database...")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
