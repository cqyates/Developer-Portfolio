const { Schema, model } = require('mongoose');

const techSchema = new Schema({
  tech_name: {
    type: String,
    required: true,
    unique: true,
  },
  category_name: {
    type: String,
    required: true
  }
});
const Tech = model("Tech", techSchema)

module.exports = Tech;