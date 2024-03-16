import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
	  <ul className="navbar">
		<li>
			<NavLink activeClassName="active" exact to="/">home</NavLink>
		</li>
		<li>
			<NavLink activeClassName="active" to="/courses">courses</NavLink>
		</li>
		<li>
			<NavLink activeClassName="active" to="/about">about</NavLink>	
		</li>
	  </ul>
  );
}

export default NavBar;
