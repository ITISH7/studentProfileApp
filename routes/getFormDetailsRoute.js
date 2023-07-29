const profile = require("../model/profile")
const route = require('express').Router();
route.get("/get-details",async(req,res)=>{
    const details = await profile.find()
    res.render('studentprofiles',{
        data:details
    })
})
module.exports = route;