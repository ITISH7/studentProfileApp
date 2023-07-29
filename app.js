// required modules
const express= require("express")
const path = require('path');
const app= express();
const hbs= require('hbs');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;
//database connectivity
mongoose.connect(process.env.ConnectionString).then(()=>{
    console.log("database connected!!");
}).catch(err=>{
    console.log(err);
})
//middle ware
app.use(bodyParser.urlencoded({extended: true}))
const static_path = path.join(__dirname,'/public');
const view_path = path.join(__dirname,'/public/views');
const partials_path = path.join(__dirname,'/public/partials');

app.set('view engine','hbs');
app.set('views',view_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path);

//Routing
app.use(require('./routes/fillFormRoute'));
app.use(require('./routes/getFormDetailsRoute'));
app.listen(port,()=>{
    console.log(`server is started at !! ${port}`);
})
