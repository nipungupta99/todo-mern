const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const todoRouter = require("./routes/Todo");
app.use("/todos", todoRouter);

mongoose.connect(
  "mongodb+srv://admin-nipun:nipun99@cluster0.fmmyz.mongodb.net/todoDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3000, () => console.log("listening on port 3000"));
