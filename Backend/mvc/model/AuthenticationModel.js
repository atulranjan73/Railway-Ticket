const  mongoose = require("mongoose") 
const userSchema = new mongoose.Schema({
    name: {
      type:String ,
      required: true, // Fixed typo
    },
    email: {
      type: String, // Fixed type
      required: true, // Fixed typo
      unique: true,
    },
    password: {
      type: String, // Fixed type
      required: true, // Fixed typo
    }
  });
  
  const user = mongoose.model("user", userSchema);
  module.exports = user; 
  