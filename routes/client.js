const express = require("express");
const router = express.Router();
const Client = require("../models/client");

// Create Client
router.post("/add-client", async (req, res) => {
  try {
    let { name, phone, address, photo } = await Client.create(req.body);

    res.json({
      msg: "Client created",
    });
  } catch (err) {
    res.json({
      msg: "Something is wrong",
    });
  }
});

// Read all Clients
router.get("/get-clients", async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    console.log(error);
  }
});
// Get single client
router.get("/get-client", async (req, res) => {
  try {
    const client = await Client.findById(req.body._id);
    res.json(client);
  } catch (error) {
    console.log(error);
  }
});

// Update Client
router.put("/update-client", async (req, res) => {
  let id = req.body._id;

  try {
    await Client.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    });
    res.json({ msg: "Client updated" });
  } catch (error) {
    console.log(error);
  }
});

// Delete Client
router.delete("/delete-client", async (req, res) => {
  try {
    await Client.deleteOne({ _id: req.body._id });
    res.json({ msg: "Client deleted" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
