const uuid = require('uuid/v4')

const HttpError = require('../models/http-error')

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

const getPlaceById = (req, res, next) => {
    console.log('GET Request in Places')
    const placeId = req.params.pid
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId
    })
    if (!place) {
        throw new HttpError('Could not find a place for the provided id.')
    }
    
    res.json({ place })
}

const getPlaceByUserId = (req, res, next) => {
    const userId = req.params.uid
    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId
    })
    if (!place) {
        return next(new HttpError('Could not find a place for the provided user id', 404))
    }
    res.json(place)
}

const createPlace = (req, res, next) => {
    const { title, description, coordinates, address, creator } = req.body
    const createdPlace = {
        id: uuid(),
        title,
        description,
        location: coordinates,
        address,
        creator
    }
    DUMMY_PLACES.push(createdPlace)
    res.status(201).json({ place: createdPlace })

}

const updatePlace = (req, res, next) => {
    const { title, description } = req.body
    const placeId = req.params.pid

    const updatedPlace = { ...DUMMY_PLACES.find(p => p.id === placeId) }
    const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId)
    updatedPlace.title = title
    updatedPlace.description = description

    DUMMY_PLACES[placeIndex] = updatedPlace

    res.status(200).json({place: updatedPlace})

}

const deletePlaceBy = (req, res, next) => {
    
}

exports.getPlaceById = getPlaceById
exports.getPlaceByUserId = getPlaceByUserId
exports.createPlace = createPlace
exports.updatePlace = updatePlace
// exports.deletePlace = deletePlace