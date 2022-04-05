require('dotenv').config();
const mongoose = require('mongoose');

const UserCreation = new mongoose.schema({

    FirstName:{
    type:String,required:true    
    },
    LastName:{
    type:String,required:true  
    },
    Title:{
    type:String,required:true  
    },
    Email:{
    type:String,required:true  
    },
    Message:{
    type:String,required:true  
    }

  })
  const User = mongoose.model('User',UserCreation);
  module.exports = User;