const app = require('express')()
const consign = require('consign')

require('./config/mongodb')

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(process.env.PORT || 3000)