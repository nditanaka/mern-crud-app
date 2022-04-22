const express = require('express')
const bodyParser = require('body-parser')

const HttpError = require('./models/http-error')
const placesRoutes = require('./routes/places-routes')
const app = express()

app.use(bodyParser.json())

app.use('/api/places', placesRoutes)

// middleware to handle unsupported routes
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404)
    throw error // could call it as next(error) if this were in asynchronous code eg. communication with the database
})

//error handling middleware
app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error)
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occured!'})
})

app.listen(5000)