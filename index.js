/* *********************************************** how http works */

/*import http from "http";
import { generateLovePercent } from "./features.js";
import fs from "fs";

const homeFile = fs.readFile("./index.html", () => {
  console.log("file read");
});

const server = http.createServer(function (req, res) {
  console.log(req.method);
  if (req.url === "/") {
    fs.readFile("./index.html", (err, home) => {
      res.end(`<h1>{home}</h1>`);
    });
  } else if (req.url === "/about") {
    res.end(`Love is ${generateLovePercent()}`);
  } else if (req.url === "/contact") {
    res.end("contact page");
  } else {
    res.end("<h1>not found</h1>");
  }
});
server.listen(5000, function () {
  console.log("server is working");
});*/

/* **************************************************how express works*/
import fs from "fs";
import path from "path";

import express from "express";
const app = express();

const home = fs.readFile("./index.html", function () {
  console.log("file read");
});

app.get("/", (req, res) => {
  const way = path.resolve();
  const finalPath = path.join(way, "./index.html");
  console.log(finalPath);
  res.sendFile(finalPath);
});

app.listen(5000, function () {
  console.log("server is working ");
});
