const express = require("express")
const app =express();
const mongoose = require("mongoose");
const path = require('path')

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



if(process.env.NODE_ENV==="production")
{
    app.use(express.static('client.build'))

    app.get('*',(req,res) =>{
     res.sendFile(path.resolve(__dirname,'client','build','index.js'))
    })

}



const port= process.env.PORT || 5000;

//Server
app.listen(port,function(){
console.log('serwer słucha.. http://localhost:'+port)
})