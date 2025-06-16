const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// CREATE a new project
router.post('/', async (req, res) => {
  try {
    const { name, description, codeUrl, viewUrl } = req.body;
    const project = new Project({
      name,
      description,
      codeUrl,
      viewUrl,
    });
    await project.save();
    res.status(201).send(project);
  } catch (error) {
    res.status(400).send(error);
  }
});

// UPDATE an existing project
router.put('/:id', async (req, res) => {
  try {
    const { name, description, codeUrl, viewUrl } = req.body;
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        codeUrl,
        viewUrl,
      },
      { new: true }
    );
    if (!updated) {
      return res.status(404).send();
    }
    res.send(updated);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Other routes (GET, DELETE, etc.) would go here

module.exports = router;