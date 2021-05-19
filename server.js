const express = require("./Develop/node_modules/express");
const fs = require("fs");
const path = require("path");

const jsondb = require("./Develop/db/db.json");

const { v4: uuidv4 } = require("uuid");
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const app = express();

app.use(express.json());
app.use(express.static("./Develop/public"));

const PORT = 3000;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});

app.get("/notes", function (req, res) {
  console.log("looking for /notes");
  res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
});

app.get("/api/notes", (req, res) => {
  console.log("Looking for saved notes");
  res.sendFile(path.join(__dirname, "Develop/db/db.json"));
});

app.post("/api/notes", function (req, res) {
  var newNote = req.body;
  let uniqueID = uuidv4();
  newNote.id = uniqueID;
  jsondb.push(newNote);

  fs.writeFile("./Develop/db/db.json", JSON.stringify(jsondb), function (err) {
    if (err) {
      console.log(err);
    } else {
      res.json("Note Posted!");
    }
  });
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
