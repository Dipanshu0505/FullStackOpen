const mongoose = require('mongoose')
// require('dotenv').config()

// MONGODB_URI = process.env.MONGODB_URI

// // mongoose.set('strictQuery',false)
// // mongoose.connect(MONGODB_URI)

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

blogSchema.set('toJSON', {
  transform: (doucment, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Note', blogSchema)