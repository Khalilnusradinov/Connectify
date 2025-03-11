const { Schema, model } = require('mongoose');
const Thought = require('./Thought'); // ✅ Ensure Thought is imported

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Must be a valid email address']
  },
  thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }], // ✅ Ensure correct reference
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

// Register the model
const User = model('User', userSchema);

module.exports = User;
