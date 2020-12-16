'use strict';

const mongoose = require('mongoose');

// Create a mongoose model
const usersSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

usersSchema.pre('save', async function(){
  //checks to see if the password has changed
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 10);
  }
})

userSchema.statics.authenticateBasic = async function(username, password){
  const user = await this.findOne({ username });
  const valid = await bcrypt.compare(password, user.password);
  if(valid) {return user; }
  throw new Error('Invalid User')
}

const Users = mongoose.model('users', usersSchema);

module.exports = Users;
