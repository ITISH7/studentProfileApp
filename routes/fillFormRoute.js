const [addData,deleteProfile,getProfile,updateProfile] = require('../controller/formHandle');
const route  = require('express').Router();
const upload = require('../middleware/upload');
route.get("/",(req,res)=>{
    res.render('index');
})
route.get("/addprofile",(req,res)=>{
    res.render('addprofile')
})
route.post('/send-details',upload.single('image'),addData)
route.get('/delete-user/:id',deleteProfile);
route.get('/update-user-v1/:id',getProfile);
route.post('/update-user-v2/:id',upload.single('image'),updateProfile)
module.exports =route;