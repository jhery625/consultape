'use strict'
require("dotenv").config();
const express = require("express");
const bodyParser  = require('body-parser');
const cors = require('cors');
const endpoints=require('./helper/endpoints');
const swaggerDoc=require('./helper/swagger-doc');

const app = express();
const port  = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


endpoints(app);
swaggerDoc(app);

app.listen(port, function(err){
    if (err) {
        console.log(err);
    }
    console.info('>>> Open http://localhost:%s/ in your browser.', port);
  });
