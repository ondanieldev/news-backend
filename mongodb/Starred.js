const mongoose = require('mongoose')
const Schema = mongoose.Schema

const starredSchema = new Schema({
    title: String,
    url: String
})

const Starred = mongoose.model('Starred', starredSchema)

module.exports = { Starred }