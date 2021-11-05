const express = require("express")
const app =express();
const mongoose = require("mongoose");

const user=require('./routes/api/user')


//parser
app.use(express.json());



//DB COnfig
const db= require('./config/keys').mongoURI


//Connect to Mongo
mongoose.connect(db)
.then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err));

//Use Routes
app.use('/api/user',user)




const port= process.env.PORT || 5000;

//Server
app.listen(port,function(){
console.log('serwer słucha.. http://localhost:'+port)
})