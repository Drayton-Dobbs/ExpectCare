import React from 'react'
import './styles.css'


class Footer extends React.Component {
	render() {
		return (
    <footer>
      <div className='footerItemWrapper'>
        <div className='footerItem map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.0948822566784!2d-86.79793654883215!3d33.49890845403806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891bc4b80ad6a1%3A0x98474260a761d28b!2s1220+20th+St+S%2C+Birmingham%2C+AL+35205!5e0!3m2!1sen!2sus!4v1564121551747!5m2!1sen!2sus" style={{width:"100%", height:"450", frameborder:"0", border:"0", marginTop: "23px"}} allowfullscreen />
        </div>
          <div className='footerItem contact'>
            <ul className='footerContactList'>
              <li className='listTitle brandFontCondensed'>Contact Us</li>
              <li><a href='mailto:info@expectcare.com'>Email: info@expectcare.com</a></li>
              <li>1220 20th Street South</li>
              <li>Birmingham, AL 35205</li>
              <li>Find us on the map.</li>
              <li>Office: 205.939.4122</li>
              <li>Fax: 205.444.0128</li>
              <li className='socialIconsWrapper'>
                <a src=''>
                  <img src='https://img.icons8.com/officel/26/000000/linkedin.png' alt='LinkedIn Profile' />
                </a>
                <a src=''>
                  <img src='https://img.icons8.com/officel/26/000000/facebook.png' alt='Facebook Profile' />
                </a>
                <a src=''>
                <img id='youtubeIcon' src='https://img.icons8.com/color/30/000000/youtube-squared.png' alt='YouTube Channel' />
                </a>

              </li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer