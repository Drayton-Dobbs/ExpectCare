import React from 'react';
import './styles.css'

class Banner extends React.Component {

  render() {
    return (
      <section class='banner'>
        <div class='bannerItemsWrapper'>
          <div class='bannerDescriptionWrapper'>
            <h1 class='bannerTitle  brandFontBold'>OUR MISSION:</h1>
            <p className='bannerDecription brandFontCondensed'>
              Our mission is to provide care with the highest quality of services. Our focus is to help you or your loved ones remain independent in the comfort of your home.
            </p>
            <button class='bannerButton'><strong>Contact Us Today</strong></button>
          </div>
        </div>
      </section>
    )
  }
}

export default Banner