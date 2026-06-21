const express = require("express");

console.log("Auth Routes Loaded");

const router = express.Router();

router.get("/register", (req, res) => {
  res.send("Register Route Working");
});

module.exports = router;