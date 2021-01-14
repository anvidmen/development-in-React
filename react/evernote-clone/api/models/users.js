const mongoose = require('mongoose')
const { Schema, Types: { ObjectId } } = mongoose

const users = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createNotes: [{ type: ObjectId, ref: 'Notes' }]
})

module.exports = mongoose.model('Users', users)
