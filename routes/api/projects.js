const express = require('express');
const router = express.Router();

// Project Model
const Project = require('../../models/Project');


// @route POST api/projects
// @desc Create A Project
// @access Public
router.post('/', (req, res) => {
  const newProject = new Project({
    name: req.body.newName,
    info: req.body.newInfo,
    url: req.body.newUrl
  });

  newProject.save(function(err, project) {
    if(err) return res.status(500)
    res.status(200).json(project)
  })
});



module.exports = router;
