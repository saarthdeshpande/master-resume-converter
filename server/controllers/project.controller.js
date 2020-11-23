const Project = require('../models/project.model')

showProjects = async (req, res, next) => {
    try {
        const projects = await Project.find({  })
        res.send(projects)
    } catch (e) {
        return console.log(e)
    }
}

addProject = async (req, res, next) => {
    try {
        console.log(req.body)
        const { projectName, projectDomain, projectCompleted, projectTechStack, projectDescription, projectURL } = req.body
        const project = new Project({ projectName, projectDomain, projectCompleted, projectTechStack, projectDescription, projectURL })
        await project.save()
        res.send(project)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
}

module.exports = { showProjects, addProject }