import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Reserve Bank of Zimbabwe Building',
        description: 'One of the tallest skyscrapers in Zimbabwe',
        imageUrl: 'https://www.zimbabweyp.com/img/zw/h/1610726039-60-reserve-bank-of-zimbabwe.jpg',
        address: 'New Reserve Bank Tower, Harare, Zimbabwe',
        location: {
            lat: 17.8259,
            lng: 31.0492
        },
        creator:'u1'
    },
    {
        id: 'p2',
        title: 'ZB Life Towers',
        description: 'A skyscraper with a striking architectural style in Harare',
        imageUrl: 'https://www.worldatlas.com/r/w1200/upload/c9/32/8c/untitled-design-387.jpg',
        address: 'Monomotapa Building, Samora Machel Avenue, Harare, Zimbabwe',
        location: {
            lat: 49,
            lng: -17
        },
        creator:'u2'
    }
]
const UserPlaces = () => {
    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return (
      <PlaceList items={loadedPlaces}/>
  )
}

export default UserPlaces