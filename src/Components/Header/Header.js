import React from 'react';
import './styles.css';

// Components
import Nav from '../Nav/Nav'

import logo from '../../images/EC-logo.png'
class Header extends React.Component {
  render() {
    return (
      <header>
        <div class='headerFlex'>
          <img id='headerLogo' src={logo} alt='logo' />
          <Nav />
        </div>
      </header>
    )
  }
}

export default Header