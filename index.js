'use strict';
require('dotenv').config();
const server = require('./auth-api/src/server');
const { db } = require('./auth-api/src/module/index');



db.sync().then(() => {
    server.start();
});