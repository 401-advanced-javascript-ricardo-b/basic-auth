'use strict';

const express = require('express');
const app = express();
const router = require('./auth/auth-route');
const cors = require('cors')

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);


module.exports = {
  server: app,
  start: PORT =>{
    if(!PORT){throw new Error('Missing Port')}
    app.listen(PORT, ()=>{
      console.log(`Server Up, Port: ${PORT}`);
    })
    
  }
}
