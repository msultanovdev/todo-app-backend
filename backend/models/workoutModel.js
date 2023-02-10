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
  }
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)