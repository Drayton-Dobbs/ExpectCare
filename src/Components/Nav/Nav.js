import React from 'react';
import './styles.css'


class Nav extends React.Component {

  render() {
    return (
      <div  className="navOne" style={{zIndex: '2', position: 'fixed', width: '100%'}}>
        <nav class="navbar" >
        <div className="">
        <a style={{paddingLeft: '20px'}}  class="nav-link-phone" id="call" href="#">Call Us Today:  205-939-4122</a>
        </div>
        <div>
          <button className="consultBtn">
            Request a Free Consultation! 
          </button>
        </div>
        </nav>

      </div>

    )
  }
}

export default Nav