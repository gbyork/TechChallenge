import mongoose from 'mongoose';
import dbConnect from '../utils/dbConnect';





export default function handler(req, res) {
    
    const FirstName = req.body.FirstName
    const LastName = req.body.LastName
    const Title = req.body.Title
    const Email = req.body.Email
    const Message = req.body.Message
    
    
    
    dbConnect(String(FirstName),String(LastName),String(Title),String(Email),String(Message));
    //unsure what "openUri() problem is refering to"
    console.log(req.body.FirstName);
    console.log(req.body.LastName);
    console.log(req.body.Title);
    console.log(req.body.Email);
    console.log(req.body.Message);
    res.redirect('../Contact');
    // Then save email to your database, etc...
  }