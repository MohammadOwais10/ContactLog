const express = require("express");
const path = require("path");
const port = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));

var contactLog = [];
// {
//   name: "Owais",
//   phone: "9876543210",
// },
// {
//   name: "CodingNinjas",
//   phone: "18001233598",
// },
// {
//   name: "Alvi",
//   phone: "8833551100",
// },

app.get("/", (req, res) => {
  var options = {
    title: "Contact Log",
    contact_log: contactLog,
  };
  return res.render("home", options);
});

app.post("/create-contact", (req, res) => {
  contactLog.push(req.body);
  return res.redirect("back");
});

app.listen(port, (error) => {
  if (error) {
    console.log("There was some problem in starting the server!");
    return;
  } else {
    console.log("server is running on the port", port);
  }
});
