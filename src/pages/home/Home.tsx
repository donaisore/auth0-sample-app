import React from 'react';
import LoginButton from 'components/LoginButton';
import LogoutButton from 'components/LogoutButton';
import Profile from 'components/Profile';
import {useHistory} from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react';

const Home: React.FC = () => {
  const {user, isAuthenticated, isLoading} = useAuth0();
  const history = useHistory();

  return (
    <div className="App">
      home
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
};

export default Home;
