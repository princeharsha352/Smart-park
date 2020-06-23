var express=require("express")
const user = require("../models/user")
var router=express.Router({mergeParams: true})
var passport=require("passport")


// +++++++ User Routes +++++++++++++
router.get("/signup",function(req,res){
    res.render("user/signup")
})

router.post("/signup",function(req,res){
    if(req.body.password==req.body.confirmpassword){
        newUser={
            username:req.body.username,
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone
        }
        console.log(req.body)
        console.log(newUser)
        user.register(newUser,req.body.password,function(err,foundUser){
            if(err){
                console.log(err)
            }else{
                res.send("Successfully signed up plases login")
                console.log(foundUser)
            }
        })
    }else{
        res.send("Pass did not match")
    }
})




// Export models
module.exports=router