const { Schema, model } = require('mongoose');

const recommendationSchema = new Schema(
  {
   relationship: {
     type: String,
     required: true
   },
   firstName: {
     type: String,
     required: true
   },
   lastName: {
     type: String,
     required: true
   },
   currentRole: {
     type: String
   },
   currentCompany: {
     type: String,
   },
   recommendationText: {
     type: String,
     required: true
   },
   github: {
     type: String,
   },
   featuredProject: {
     type: String
   }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


const Recommendation = model('Recommendation', recommendationSchema);

module.exports = Recommendation;
