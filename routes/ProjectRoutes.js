const express = require("express");
const {
  postProjectController,
  getAllProjectController,
  getSingleProjectController,
} = require("../controllers/projectController");

//router
const router = express.Router();

//get all project
router.get("/", getAllProjectController);

//get single project
router.get("/:id", getSingleProjectController);

// post new project
router.post("/", postProjectController);

router.delete("/:id", (req, res) => {
  res.json({ message: "Delete a project..." });
});
router.patch("/:id", (req, res) => {
  res.json({ message: "Update a project..." });
});

module.exports = router;
