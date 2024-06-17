const { Schema, Types } = require('mongoose');

const recommendationSchema = new Schema(
  {
    recommendationId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    relationship: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    currentRole: {
      type: String,
    },
    currentCompany: {
      type: String,
    },
    recommendationText: {
      type: String,
      required: true,
    },
    github: {
      type: String,
    },
    featuredProject: {
      type: String,
    },
    website: {
      type: String,
    },
    approved: {
      type: Boolean,
      default: false,
    },
  }
);



module.exports = recommendationSchema;
