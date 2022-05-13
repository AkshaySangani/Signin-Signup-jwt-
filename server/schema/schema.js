const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

const projectSchema =  mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, required: true},
    email: {type: String,unique:true, required: true},
    country: {type: String, required: true},
    // date: {type: String, required: true},
    password: {type: String, required: true},
}, {
    timestamps: true,
    versionKey: false,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = {Project};