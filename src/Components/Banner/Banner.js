import React from 'react';
import './styles.css'

class Banner extends React.Component {

  render() {
    return (
      <section class='banner'>
        <div class='bannerItemsWrapper'>
          <img className='bannerImg'
          src='http://www.expectcare.com/images/InHomeCare.jpg'
          alt='In Home Care' />
          <div class='bannerDescriptionWrapper'>
            <h1 class='bannerTitle  brandFontBold'>In-Home Care</h1>
            <p className='bannerDecription brandFontCondensed'>
              ExpectCare’s professional staff and volunteers serve our 
              patients and their families, whether in the comfort of 
              their homes or other care facilities.
            </p>
            <button class='bannerButton'>Learn More</button>
          </div>
        </div>
      </section>
    )
  }
}

export default Banner