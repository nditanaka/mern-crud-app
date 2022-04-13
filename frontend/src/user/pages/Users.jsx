import React from 'react';

import UsersList from '../components/UsersList';

function Users() {
  const USERS = [{
    id: 'u1', name: 'Morgan M', image: 'https://pbs.twimg.com/profile_images/1455648172080988162/7pxrViW5_400x400.jpg', places: 3,
  }];
  return <UsersList items={USERS} />;
}

export default Users;
