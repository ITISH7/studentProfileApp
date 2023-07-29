const path =require('path');
const fs =require('fs');
const profile = require('../model/profile');
const addData =async(req,res)=>{
    let{Name,age,fatherName,motherName,className,schoolName,mobile,addressName,disability}=req.body;
    if(addressName.trim().length===0){
        addressName= "kakad slum Indore";
    }
    const newProfile = await profile.create({
        Name:Name,
        age:age,
        motherName:motherName,
        className:className,
        schoolName:schoolName,
        mobile:mobile,
        addressName:addressName,
        disability:disability,
        fatherName:fatherName,
    })
    if(req.file){
        const updateprofile = await profile.findByIdAndUpdate(newProfile._id,{image:req.file.filename})
    }
    if(newProfile){
        console.log("New Profile Added");
    }
    res.redirect("/addprofile")
} 
const deleteProfile = async(req,res)=>{
    const userid = req.params.id;
    const finduser = await profile.findById(userid);
    const image_name = finduser.image;
    const file_location = path.join(__dirname,"../public/media/")+image_name
    console.log(file_location); 
    if(image_name !="not available"){
        fs.unlink(file_location,function(err){
            if(err) return console.log(err);
            console.log('file deleted successfully');
       }); 
    }

    const deleteuser = await profile.findByIdAndDelete(userid);
    res.redirect('/get-details')
}
const getProfile = async(req,res)=>{
    res.render('updateprofile',{
        data: await profile.findById(req.params.id)
    })
}
const updateProfile = async(req,res)=>{
    let{Name,age,fatherName,motherName,className,schoolName,mobile,addressName,disability}=req.body;
    if(addressName.trim().length===0){
        addressName= "kakad slum Indore";
    }
    const newProfile = await profile.findByIdAndUpdate(req.params.id,{
        Name:Name,
        age:age,
        motherName:motherName,
        className:className,
        schoolName:schoolName,
        mobile:mobile,
        addressName:addressName,
        disability:disability,
        fatherName:fatherName,
    })
    if(req.file){
        console.log(newProfile.image)

        const file_location = path.join(__dirname,'../public/media/') + newProfile.image
        fs.unlink(file_location,function(err){
            if(err) return console.log(err);
            console.log('image updated successfully');
       });
       const updateprofile = await profile.findByIdAndUpdate(newProfile._id,{image:req.file.filename});


    }
    if(newProfile){
        console.log("Profile updated");
    }
    res.redirect("/get-details")
}
module.exports = [addData,deleteProfile,getProfile,updateProfile];