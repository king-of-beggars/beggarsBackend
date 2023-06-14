require("dotenv").config();

const express = require("express");
const http = require('http');
const app = express();
const server = http.createServer(app);
const port = process.env.SERVICE_PORT || 3000
const routes = require("./routes");


app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);



const start = async () => {
    try {
      server.listen(port, () => {
        console.log("Server is running. PORT :", port);
      });
    } catch (err) {
      console.error(err);
    }
  }

  start();
  