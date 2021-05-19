const express = require("./Develop/node_modules/express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3000;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});

app.get("/notes", function (req, res) {
  console.log("looking for /notes");
  res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  fs.readFile(`${__dirname}/Develop/db/db.json`, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end(
        "<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>"
      );
    } else {
      res.writeHead(200, { "Content-Type": "json" });
      res.end(data);
    }
  });
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
