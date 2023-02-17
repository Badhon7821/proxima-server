const mongoose = require("mongoose");
const Project = require("../models/projectModels");

//get all projects
const getAllProjectController = async (req, res) => {
  const projects = await Project.find({}).sort({ createdAt: -1 });
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
    return res.status(404).json({ message: "Invalid ID" });
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

// delete a project
const deleteProjectController = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const project = await Project.findOneAndDelete({ _id: id });

  if (!project) {
    res.status(400).json({ error: "project not found" });
  }
  res.status(200).json(project);
};

// update a project
const updateProjectController = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid ID" });
  }

  const project = await Project.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!project) {
    res.status(400).json({ error: "project not found" });
  }
  res.status(200).json(project);
};

module.exports = {
  postProjectController,
  getAllProjectController,
  getSingleProjectController,
  deleteProjectController,
  updateProjectController,
};
