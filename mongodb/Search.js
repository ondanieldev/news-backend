const mongoose = require('mongoose')
const Schema = mongoose.Schema

const searchSchema = new Schema({
    title: String,
    text: String
})

const Search = mongoose.model('Search', searchSchema)

module.exports = { Search }