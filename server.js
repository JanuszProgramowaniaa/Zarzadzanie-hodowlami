const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const apiRouter = require("./routes/api");
const cors = require("cors");

//parser
app.use(express.json());

//DB COnfig
const db = require("./config/keys").mongoURI;

app.use(cors());
//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

//Use Routes
app.use("/api", apiRouter);
app.use("/public/uploads", express.static("public/uploads"));

app.use(express.static(path.join(__dirname, "client/build")));

const port = process.env.PORT || 5000;

//Server
app.listen(port, function () {
  console.log("serwer słucha.. http://localhost:" + port);
});
