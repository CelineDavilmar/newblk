import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
         <div className='options'>
          <NavLink class='nav' to="/">Home</NavLink>
          <NavLink class='nav' to="/Login">Login</NavLink>
          <NavLink class='nav' to="/Services">Services</NavLink>
          <NavLink class='nav' to="/Bookmarks">Bookmarks</NavLink>
          <NavLink class='nav' to="/Goal">Goal</NavLink>
          <NavLink class='nav' to="/contact">Contact</NavLink>
         </div>

    );
}

export default Navigation;
