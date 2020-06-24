module.exports = app => {
    app.route('/news')
        .get(app.api.news.getNews)
    
    app.route('/news-by-source/:source')
        .get(app.api.news.getNewsBySource)

    app.route('/news-by-search/:search')
        .get(app.api.news.getNewsBySearch)

    app.route('/searches')
        .get(app.api.news.getSearches)
        .post(app.api.news.saveSearch)

    app.route('/searches/:id')
        .delete(app.api.news.removeSearch)

    app.route('/starreds')
        .get(app.api.starreds.getStarreds)
        .post(app.api.starreds.saveStarred)

    app.route('/starreds/:id')
        .delete(app.api.starreds.removeStarred)
}