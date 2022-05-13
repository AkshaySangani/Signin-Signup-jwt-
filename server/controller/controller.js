const {Project} = require("../schema/schema");
const jwt = require("jsonwebtoken")
const createUser = async (req, res) => {
    try {
        const pass = jwt.sign(req.body.password, "AKSHAY666666666");
        console.log("EEEEEEEE", req.body);
        const project = new Project({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            email: req.body.email,
            country: req.body.country,
            // date: req.body.date,
            password: pass,
        });
        console.log("$$$$$$$$$$$$$$$$$$$$$$ svae user");
        const savedUser = await project.save();
        return res.send(savedUser)
    } catch (e) {
        console.log("eeee", e);
        return res.status(400).send("Erroroororororororo");
    }
};

const loginController = async (req, res) => {
    try {
        const data = await Project.findOne({email: req.body.email});
        if (!data) {
            return res.status(400).send("User not found");
        } else {
            const orignalPass = jwt.verify(data.password, "AKSHAY666666666");
            console.log("orignalPass", orignalPass);
            if (orignalPass === req.body.password) {
                return res.status(200).send("Success");
            } else {
                return res.status(400).send("Password not match");
            }
        }
    } catch (e) {
        return res.status(400).send("erorrr")
    }
};

module.exports = {createUser, loginController};