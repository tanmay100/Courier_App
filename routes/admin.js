const express = require("express");
const router = express.Router();
const Admin = require("../models/admin");

router.post("/register", async (req, res) => {
  try {
    let { name, password } = await Admin.create(req.body);
    res.json({
      msg: "Admin registered",
    });
  } catch (err) {
    res.json({
      msg: "Something wrong",
    });
  }
});

module.exports = router;
