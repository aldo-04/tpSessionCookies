const {body} = require("express-validator")

let loginValidations = [
    body("nombre").notEmpty().withMessage("Debes indicar tu nombre"),
    body("edad").notEmpty().withMessage("Debes indicar tu edad").isNumeric({no_symbols:true}).withMessage("Debes indicar una edad valida"),
    body("email").notEmpty().withMessage("Debes indicar tu email").isEmail().withMessage("Tienes que indicar un email valido"),
    body("color").notEmpty().withMessage("Debes seleccionar un color preferido")
]

module.exports= loginValidations