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
    type: String,
    required: false
  },
  user_id: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: false
  },
  overdue: {
    type: Boolean,
    required: false
  },
  from: {
    type: String,
    required: false
  },
  assignTo: {
    type: String,
    required: false
  }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)