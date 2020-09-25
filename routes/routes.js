const router = require("express").Router();

router.get("/",(req,res)=>{
    res.render("homepage")
})

router.get("/author",(req,res)=>{
    res.render("authorone")
})
router.get("/authortwo",(req,res)=>{
    res.render("autherthree")
})




module.exports = router;