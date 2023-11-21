const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  classlevel: {
    type: Number,
    required: true,
  },
});

const UserModel = mongoose.model("users", UsersSchema);
module.exports = UserModel;
