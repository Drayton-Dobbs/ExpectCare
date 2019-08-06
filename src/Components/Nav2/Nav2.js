import React from 'react';
import './styles.css'


class Nav extends React.Component {

  render() {
    return (
      <div style={{width: '100%', position: 'fixed', top: '50px', zIndex: '1' }}>
        <nav class="navbar2">
          <div class="collapse" id="navbarNav"  style={{ display: 'flex', justifyContent: 'space-between', float: 'right', paddingRight: '20px'}}>
            <ul class="navbar-nav" style={{ display: 'inline-block' }}>
              <a class="nav-link" href="#">About</a>
              <a class="nav-link" href="#">Services</a>
              <a class="nav-link" href="#">Contact</a>
              <a class="nav-link" href="#">Careers</a>
            </ul>
          </div>
        </nav>



      </div>

    )
  }
}

export default Nav