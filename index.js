const express = require("express");
const path = require("path");
const port = 8000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

var contactLog = [
  {
    name: "Owais",
    phone: "9876543210",
  },
  {
    name: "CodingNinjas",
    phone: "18001233598",
  },
  {
    name: "Alvi",
    phone: "8833551100",
  },
];

app.get("/", (request, response) => {
  console.log(request.url);
  return response.render("home", {
    title: "render",
    contact_log: contactLog,
  });
});

app.get("/addContact", (req, res) => {
  return res.render("addContact", {});
});

app.post("/create-contact", (request, response) => {
  return response.redirect("/addContact");
});

app.listen(port, (error) => {
  if (error) {
    console.log("There was some problem in starting the server!");
    return;
  } else {
    console.log("server is running on the port", port);
  }
});
