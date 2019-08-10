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


/*
…or create a new repository on the command line
echo "# consultape" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/surenperu/consultape.git
git push -u origin master

…or push an existing repository from the command line
git remote add origin https://github.com/surenperu/consultape.git
git push -u origin master
*/




