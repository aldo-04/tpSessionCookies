module.exports=(req,res,next)=>{
    if(req.cookies.colorCookie){
        /* res.locals.user.color */res.locals.user = req.cookies.colorCookie
    }
  next()
}