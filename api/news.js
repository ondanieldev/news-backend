const axios = require('axios')
const { Search } = require('../mongodb/Search')

module.exports = app => {
    const headers = { 'Authorization': 'bearer 1d4c72910ba54321b8601c9a91fafd52' }
    
    const getNews = (req, res) => {
        axios.get('https://newsapi.org/v2/top-headlines?country=br', {headers})
            .then(news => res.status(200).json(news.data))
            .catch(e => res.status(500).send(e))
    }

    const getNewsBySource = (req, res) => {
        const { source } = req.params
        axios.get(`https://newsapi.org/v2/top-headlines?sources=${source}`, {headers})
            .then(news => res.status(200).json(news.data))
            .catch(e => res.status(500).send(e))
    }

    const getNewsBySearch = (req, res) => {
        const { search } = req.params
        axios.get(`https://newsapi.org/v2/everything?q=${search}`, {headers})
            .then(news => res.status(200).json(news.data))
            .catch(e => res.status(500).send(e))
    }

    const saveSearch = (req, res) => {
        const { title, text } = req.body
        const search = new Search()
        search.title = title
        search.text = text
        search.save()
            .then(search => res.status(200).send(search))
            .catch(e => res.status(500).send(e))
    }

    const getSearches = (req, res) => {
        Search.find()
            .then(searches => res.status(200).send(searches))
            .catch(e => res.status(500).send(e))
    }

    const removeSearch = (req, res) => {
        const _id = req.params.id
        Search.deleteOne({ _id })
            .then(() => res.status(204).send())
            .catch(e => res.status(500).send(e))
        
    }

    return { getNews, getNewsBySource, getNewsBySearch, saveSearch, getSearches, removeSearch }
}