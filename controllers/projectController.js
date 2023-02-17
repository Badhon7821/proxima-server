const mongoose = require("mongoose");
const Project = require("../models/projectModels");

//get all projects
const getAllProjectController = async (req, res) => {
  const projects = await Project.find({});
  try {
    res.status(200).json(projects);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//get single project
const getSingleProjectController = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }

  const singleProject = await Project.findById(id);

  try {
    if (!singleProject) {
      return res.status(400).json({ message: "Project not found" });
    }
    res.status(200).json(singleProject);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Post a project
const postProjectController = async (req, res) => {
  const data = req.body;

  try {
    const project = await Project.create({
      ...data,
    });
    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  postProjectController,
  getAllProjectController,
  getSingleProjectController,
};
