import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = memo(() => {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')).id);
    return () => setUser('');
  }, [user]);

  const clearLoginDataLocalStorage = () => {
    localStorage.clear('user');
    localStorage.clear('token');
  };

  return (
    <header className='header'>
      <div className='imgBox'>
        <img src='../img/logo.png' alt='' />
        <h1>Academia</h1>
      </div>

      <nav>
        <Link to={`/${user}/alltweets`}>
          <span>All Tweets</span>
        </Link>
        <Link to={`/${user}/mytweets`}>
          <span>My Tweets</span>
        </Link>
        <Link onClick={clearLoginDataLocalStorage} to={'/'}>
          <span>Log Out</span>
        </Link>
      </nav>
    </header>
  );
});

export default Header;
