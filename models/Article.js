const mongoose = require('mongoose');
const { Schema } = mongoose;

const user = new Schema({
  userName: String,
  accountNumber: Number,
  emailAddress: String,
  identityNumber: Number
});

mongoose.model('User', user);