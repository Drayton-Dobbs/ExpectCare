import React from 'react';
import './styles.css'
import logo from '../../images/EC-logo.png'

class Nav extends React.Component {

  render() {
    return (
      <div style={{position: 'fixed', width: '100%', zIndex: '2'}}>
        <nav class="navbar" >
          <img className="logo" src={logo} alt={"logo"} style={{paddingLeft: '20px', position: 'fixed', top: '25px', zIndex: '2'}}/>
        </nav>
        <div className="nav-link" style={{position: 'fixed', top: '13px', right: '40%', color: 'white'}}>
        <a class="nav-link" id="call" href="#">Call Us Today:  205-939-4122</a>
        </div>
        <div>
          <button className="consultBtn" style={{position: 'fixed', top: '7px', right: '15px'}}>
            Request a Free Consultation! 
          </button>
        </div>
      </div>

    )
  }
}

export default Nav