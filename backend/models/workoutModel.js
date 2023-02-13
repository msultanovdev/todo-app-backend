const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: false
  },
  isDone: {
    type: Boolean,
    required: false
  },
  color: {
    type: String
  },
  user_id: {
    type: String,
    required: true
  },
  time: {
    type: String
  },
  overdue: {
    type: Boolean
  },
  from: {
    type: String
  },
  assignTo: {
    type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)