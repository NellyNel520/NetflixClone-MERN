const mongoose = require('mongoose')
const UserSchema = require('./User')
const MovieSchema = require('./Movie')
const ListSchema = require('./List')



const User = mongoose.model('User', UserSchema)
const Movie = mongoose.model('Movie', MovieSchema)
const List = mongoose.model('List', ListSchema)

module.exports = {
  User,
  Movie,
  List,
}