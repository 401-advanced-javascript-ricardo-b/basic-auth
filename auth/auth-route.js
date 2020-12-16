'use strict';

const express = require('express');
const router = express.Router();

const basicAuth = require('./sign-in-middleware')
const Users = require('./usersSchema');

// app.use(express.urlencoded({ extended: true }));

const bcrypt = require('bcrypt');
const base64 = require('base-64');
// const mongoose = require('mongoose');


router.post('/signup', async (req, res) => {

  try {
    // req.body.password = await bcrypt.hash(req.body.password, 10); //prehook auto hashes password
    const user = new Users(req.body);
    const record = await user.save(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
});

// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
router.post('/signin', basicAuth, (req, res) => {
  res.status(200).json(req.user);  
});

module.exports = router;