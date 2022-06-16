'use strict';
const express = require('express');
const signUpRouter=express.Router();
const {Users}=require('../module/Users');
const bcrypt = require('bcrypt');
const logger=require("../middlewares/logger");


signUpRouter.post('/signup',async(req,res)=>{
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        let role= req.body.role;
        const record = await Users.create(req.body);
        role: role;
        res.status(201).json(record);
      } catch (e) { res.status(403).send('this username is already used , try again'); }

})
signUpRouter.use(logger);
module.exports= signUpRouter;