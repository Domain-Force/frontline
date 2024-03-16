import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
	<footer>
	  <nav>
		<ul>
			<li>
				<NavLink to="/" end>home</NavLink>
			</li>
			<li>
				<NavLink to="/about" end>about</NavLink>
			</li>
			<li>
				<NavLink to="/courses" end>courses</NavLink>
			</li>
		</ul>
	  </nav>
	<div className="footer-content">
	  <div className="footer-left">
          <NavLink style={{paddingRight: '10px'}}to="/privacy-policy" end>Privacy Policy</NavLink>
          <NavLink to="/terms-of-service" end>Terms of Service</NavLink>
        </div>
        <div className="footer-right">
			<p>{"powered by your friend Justin's faith in you"}</p>
        </div>
	</div>
	</footer>
  );
}

export default Footer;
