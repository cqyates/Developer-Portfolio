const { Schema, model } = require('mongoose');

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true
    },
    githubLink: {
      type: String,
      required: true
    },
    deployedLink: {
      type: String,
      unique: true
    },
    imageName: {
      type: String
    },
    tech: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tech"
      }
    ]
  },
 
  {
    toJSON: {
      virtuals: true,
    },
  }
);


const Project = model('Project', projectSchema);

module.exports = Project;
