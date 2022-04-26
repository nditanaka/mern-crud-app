const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();

const HttpError = require('./models/http-error')
const placesRoutes = require('./routes/places-routes')
const usersRoutes = require('./routes/users-routes')
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

mongoose
    .connect(process.env.URL)
    .then(() => {
        app.listen(5000) // start connection if backend server connection is successful
    })
    .catch(error => {
        console.log(error)
    })

