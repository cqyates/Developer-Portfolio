const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const messageSchema = require("./Message")
const recommendationSchema = require("./Recommendation")

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false
    },
    techStack: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tech"
      }
    ],
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Project',
      },
    ],
    messages: [messageSchema],
    recommendations: [recommendationSchema]
  },
 
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;
