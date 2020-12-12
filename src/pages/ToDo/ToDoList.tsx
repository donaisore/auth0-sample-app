import React from 'react';
import {useHistory} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';

import Profile from 'components/Profile';
import LogoutButton from 'components/LogoutButton';

export const ToDoList: React.FC = () => {
  const history = useHistory();
  const {isAuthenticated, isLoading} = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  if (!isAuthenticated) history.push('/');

  return (
    <>
      <h2>todo list</h2>
      <Profile />
      <LogoutButton />
    </>
  );
};
