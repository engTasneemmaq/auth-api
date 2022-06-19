'use strict';
require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const notFoundHandler = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");

const signInRouter=require("./routes/signInRouter");
const signUpRouter=require("./routes/signUpRouter");
const secretRouter=require("./routes/secretRouter");
const getUsersRouter=require("./routes/allUsersRouter");
const aclRouter =require("./routes/aclRouter");
const router =require("./routes/router-server");


app.use(express.json());
app.use(signInRouter);
app.use(signUpRouter);
app.use(secretRouter);
app.use(getUsersRouter);
app.use(aclRouter);
app.use(router);



app.use("*", notFoundHandler);
app.use(errorHandler); 

function start() {
    app.listen(PORT, () => {
        console.log(`Listen and Running on port ${PORT}`);
    });
}

module.exports = {
    app: app,
    start: start,
};