import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import authContext from '../../context/auth-context';


const Navigation = () => {
  const cxt = useContext(authContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {cxt.isLogged && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {cxt.isLogged && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {cxt.isLogged && (
          <li>
            <button onClick={cxt.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
