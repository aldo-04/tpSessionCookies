var express = require('express');
var router = express.Router();
const { index,register, process,destroy }=require("../controllers/mainController")
const loginValidations = require("../middlewares/loginValidations")

/* GET home page. */
router.get('/', index);
router.get("/register",register)
router.post("/register",loginValidations,process)
router.get("/destroy",destroy)

module.exports = router;
