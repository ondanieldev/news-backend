const { Starred } = require('../mongodb/Starred')

module.exports = app => {
    const saveStarred = (req, res) => {
        const { title, url } = req.body
        const starred = new Starred()
        starred.title = title
        starred.url = url
        starred.save()
            .then(starred => res.status(200).send(starred))
            .catch(e => res.status(500).send(e))
    }

    const getStarreds = (req, res) => {
        Starred.find()
            .then(starreds => res.status(200).send(starreds))
            .catch(e => res.status(500).send(e))
    }

    const removeStarred = (req, res) => {
        const _id = req.params.id
        Starred.deleteOne({ _id })
            .then(() => res.status(204).send())
            .catch(e => res.status(500).send(e))
    }

    return { saveStarred, getStarreds, removeStarred }
}