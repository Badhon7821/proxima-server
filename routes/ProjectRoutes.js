const express = require("express");
const {
  postProjectController,
  getAllProjectController,
  getSingleProjectController,
  deleteProjectController,
  updateProjectController,
} = require("../controllers/projectController");

const requireAuth = require("../middleware/requireAuth");

//router
const router = express.Router();

router.use(requireAuth);

//get all project
router.get("/", getAllProjectController);

//get single project
router.get("/:id", getSingleProjectController);

// post new project
router.post("/", postProjectController);

// delete a project
router.delete("/:id", deleteProjectController);

//update a project
router.patch("/:id", updateProjectController);

module.exports = router;
