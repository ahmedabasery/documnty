const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  function () {
    console.log("database connected succesfully");
  }
);

const logsRouter = require("./routes/logs");
const usersRouter = require("./routes/users");

app.use("/logs", logsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`server is running in port: ${port}`);
});
