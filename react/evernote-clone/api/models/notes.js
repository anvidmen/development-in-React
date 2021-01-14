const mongoose = require('mongoose')
const { Schema, Types: { ObjectId } } = mongoose

const notes = new Schema({
  title: { type: String, require: true },
  content: { type: String, require: true },
  image: { type: String },
  userCreator: { type: ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Notes', notes)
