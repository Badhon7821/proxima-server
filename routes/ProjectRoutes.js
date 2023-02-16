const express = require("express");

//router
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "get all projects!" });
});

router.get("/:id", (req, res) => {
  res.json({ message: "get single project..." });
});

router.post("/", (req, res) => {
  res.json({ message: "Post a new project..." });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a project..." });
});
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a project..." });
});

module.exports = router;
