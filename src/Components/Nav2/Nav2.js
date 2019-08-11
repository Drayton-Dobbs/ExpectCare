import React from 'react';
import './styles.css'
import logo from '../../images/logoGreenToWhite.svg'



class Nav extends React.Component {

  render() {
    return (
      <div style={{width: '100%', position: 'fixed', top: '20px', zIndex: '1' }}>
        <nav class="navbar2">
        <img className="logo" src={logo} alt={"logo"} style={{paddingLeft: '20px', zIndex: '2'}}/>
          <div class="collapse" id="navbarNav"  style={{ display: 'flex', justifyContent: 'space-between', float: 'right', paddingRight: '20px'}}>
            <ul class="navbar-nav" style={{ display: 'inline-block' }}>
              <a class="nav-link" href="#">About</a>
              <a class="nav-link" href="#">Services</a>
              <a class="nav-link" href="#">Contact</a>
              <a class="nav-link" href="#">Donate/Volunteer</a>
              <a class="nav-link" href="#">Careers</a>
            </ul>
          </div>
        </nav>



      </div>

    )
  }
}

export default Nav