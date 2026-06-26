const Project = require("../models/Project");

// Create Project
exports.createProject = async (req, res) => {
  try {
    const { title, description, status, deadline } = req.body;

    const project = await Project.create({
      title,
      description,
      status,
      deadline,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Project Created Successfully",
      project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("createdBy", "name email");

    res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Project
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate(
      "createdBy",
      "name email"
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project Not Found",
      });
    }

    res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Project
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project Updated",
      project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Project
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};