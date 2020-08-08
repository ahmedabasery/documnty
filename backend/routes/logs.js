const router = require("express").Router();

let Log = require("../models/log.model");

router.route("/").get((req, res) => {
  Log.find()
    .then((logs) => res.json(logs))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const newLog = new Log({ name });
  newLog
    .save()
    .then(() => res.json("Log added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
