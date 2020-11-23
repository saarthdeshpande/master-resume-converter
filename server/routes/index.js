var express = require('express');
var router = express.Router();

const { showProjects, addProject } = require('../controllers/project.controller')

router.get('/project', showProjects);
router.post('/project', addProject);

module.exports = router;
