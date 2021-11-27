let colores = ["red", "green", "blue", "yellow", "gray"]

const {validationResult} = require("express-validator")

module.exports={
    index: function(req, res, next) {
            res.render('index', { title: 'Express' });
      },
      register : (req,res)=>{
          res.render("register",{
              colores,
              nombre: req.body.nombre,
              hola: `hola ${req.body.nombre} tu email es ${req.body.email} tu edad es ${req.body.edad} y elegiste el color ${req.body.color}`
          })
      },
      process : (req, res)=>{
          let errors = validationResult(req)
          
          if(errors.isEmpty()){
              req.session.user = {
                  color : req.body.color,
                  nombre : req.body.nombre
              }
            if(req.body.recordar){
                res.cookie("colorCookie", req.session.user, {maxAge: 1000 * 60})
            }
            res.render("register",{
                colores,
                old: req.body
            })
          }else{
              res.render("register",{
                colores,
                errores:errors.mapped(),
                old: req.body
              })
          }          
      },
      destroy: (req, res) => {
		res.clearCookie('colorCookie');
		req.session.destroy();
		return res.redirect('/');
	}
}