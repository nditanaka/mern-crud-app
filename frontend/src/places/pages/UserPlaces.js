import React from 'react'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous skyscrapers in Manhattan',
        imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/130802164459-skyscrapers-gallery-empire-state-building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator:'u1'
    },
    {
        id: 'p2',
        title: 'An ugly green building',
        description: 'One of the tallest skyscrapers in Manhattan',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/40_Wall_Street.jpg/300px-40_Wall_Street.jpg',
        address: '40 Wall St, New York, NY 10001',
        location: {
            lat: 30.7484405,
            lng: -50.9878584
        },
        creator:'u2'
    }
]
const UserPlaces = () => {
  return (
      <PlaceList items={DUMMY_PLACES}/>
  )
}

export default UserPlaces