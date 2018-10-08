const express = require('express');
const router = express.Router();

// Project Model
const Project = require('../../models/Project');


// @route POST api/projects
// @desc Create A Project
// @access Public
router.post('/', (req, res) => {
  const newProject = new Project({
    name: req.body.name,
    info: req.body.info,
    url: req.body.url
  });

  newProject.save(function(err, project) {
    if(err) return res.status(500)
    res.status(200).json(project)
  })
});


// @route GET api/projects
// @desc Read All Projects
// @access Public
router.get('/', (req, res) => {
  Project.find()
  .sort({date: -1})
  .then(projects => res.status(200).json(projects))
  .catch(err => res.status(500))
});


module.exports = router;
