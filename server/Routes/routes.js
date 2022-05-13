const express = require('express');
const {createUser,loginController} = require("../controller/controller");
const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginController);

module.exports = router;