'use strict';
const server = require('./src/server');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    server.startServer(process.env.PORT || 4000);

}).catch(error => {
    console.log('Error:', error.message);
});

