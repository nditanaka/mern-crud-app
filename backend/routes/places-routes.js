const express = require('express')

const router = express.Router()

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'ZB Life Towers',
        description:'One of the most beautiful buildings in the Harare skyline',
        location: {
            lat: -17.8308986,
            lng: 31.0498647
        },
        address: '77 Jason Moyo Ave, Harare, Zimbabwe',
        creator: 'u1'
    }
]
router.get('/:pid', (req, res, next) => {
    console.log('GET Request in Places')
    const placeId = req.params.pid
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId
    })
    if (!place) {
        const error = new Error('Could not find a place for the provided id.')
        error.code = 404
        throw error
    }
    
    res.json({ place })
})

router.get('/user/:uid', (req, res, next) => {
    const userId = req.params.uid
    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId
    })
    if (!place) {
        const error = new Error(`Could not find a place for the provided user id, ${userId}.`)
        error.code = 404
        return next(error)
    }
    res.json(place)
})

module.exports = router