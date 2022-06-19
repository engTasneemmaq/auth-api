'use strict';
const express = require('express');
const getUsersRouter=express.Router();
const {Users}=require('../module/index');
const bearer = require('../middlewares/bearer');


getUsersRouter.get('/users', bearer ,async(req,res,next)=>{
    const userRecords = await Users.findAll({});
    const list = userRecords.map(user => user.username);
    res.status(200).json(list);
  
});


module.exports= getUsersRouter;
