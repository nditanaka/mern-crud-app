import React from 'react';

import UsersList from '../components/UsersList';

function Users() {
  const USERS = [
    {
    id: 'u1',
    name: 'Morgan M',
    image: 'https://pbs.twimg.com/profile_images/1455648172080988162/7pxrViW5_400x400.jpg',
    places: 3,
    },
    {
    id: 'u2',
    name: 'Vanessa B',
    image: 'https://pbs.twimg.com/profile_images/1382097017552265216/Qq1-d3vO_400x400.jpg',
    places: 1,
    }

  ];
  return <UsersList items={USERS} />;
}

export default Users;
