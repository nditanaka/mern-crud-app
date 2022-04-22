const express = require('express')

const HttpError = require('./models/http-error')
const placesRoutes = require('./routes/places-routes')
const usersRoutes = require('./routes/users-routes')
const app = express()

app.use(express.json())

app.use('/api/places', placesRoutes)

app.use('/api/users', usersRoutes)

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