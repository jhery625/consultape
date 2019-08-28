
'use strict'
require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const endpoints = require('./routes/endpoints');
const swaggerDoc = require('./routes/swagger-doc');

const app = express();

// Settings
app.set('PORT', process.env.PORT || 5000);

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
endpoints(app);
swaggerDoc(app);

// 404 handler
app.use((req, res, next) => {
    res.status(404).render('404');
});

module.exports = app;