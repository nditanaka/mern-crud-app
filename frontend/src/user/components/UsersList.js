import React from 'react'
import PropTypes from 'prop-types'

import UserItem from './UserItem'
import './UsersList.css'

const UsersList = (props) => {
    if (props.items.length === 0) {
        return (
            <div className='center'>
                <h2>No users found.</h2>
            </div>
        )
    }
    return <ul className='users-list'>
        {props.items.map(user => {
            return <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places} 
                />
        })}
    </ul>
}

export default UsersList

UsersList.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    placeCount: PropTypes.number,
    items: PropTypes.array
}
