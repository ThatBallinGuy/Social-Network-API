const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
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
      match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/],
  },
  thoughts: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
      },
  ],
  friends: [
      {
          type: Schema.Types.ObjectId,
          ref: 'User',
      },
  ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const User = model('User', studentSchema);

module.exports = User;