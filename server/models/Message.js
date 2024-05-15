const {Schema, Types} = require("mongoose")
const dateFormat = require('../utils/dateFormat');

const messageSchema = new Schema(
  {
    messageId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    contactName: {
      type: Schema.Types.String,
      required: true
    },
    contactEmail: {
      type: Schema.Types.String,
      required: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    message: {
      type: Schema.Types.String,
      minlength: 1,
      maxlength: 1000
    },
    submitted: {
      type: Schema.Types.Boolean,
      default: false
    },
    received: {
      type: Schema.Types.Boolean,
      default: false
    },
    read: {
      type: Schema.Types.Boolean,
      default: false
    },
    responded: {
      type: Schema.Types.Boolean,
      default: false
    },
    jobLead: {
      type: Schema.Types.Boolean,
      default: false
    },
    studentLead: {
      type: Schema.Types.Boolean,
      default: false
    },
    consultingLead: {
      type: Schema.Types.Boolean,
      default: false
    },
    dateReceived: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
  }
)
module.exports = messageSchema