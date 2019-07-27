import React from 'react';
import './styles.css';

class Nav extends React.Component {
	render() {
		return (
		 <nav className="navbar">
		    <ul className="main-nav" id="js-menu">
				<li>
 			        <a href="/" className="nav-links">Home</a>
                  </li>
                  <li>
                    <a href="/about" className="nav-links">About</a>
                  </li>
                  <li>
                    <a href="/contact" className="nav-links">Contact</a>
                  </li>
                  <li>
                    <a href="/careers" className="nav-links">Careers</a>
                  </li>
            </ul>
        </nav>
      )
  }
}

export default Nav;