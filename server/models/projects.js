const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    projectDomain: {
        type: Array,
        required: true
    },
    projectCompleted: {
        type: Boolean,
        required: true
    },
    projectTechStack: {
        type: Array,
        required: true
    }
})

const Project = mongoose.model('Project', projectSchema)

module.exports = Project