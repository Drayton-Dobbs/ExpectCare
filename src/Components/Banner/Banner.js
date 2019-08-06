import React from 'react';
import './styles.css'

class Banner extends React.Component {

  render() {
    return (
      <section class='banner'>
        <div class='bannerItemsWrapper'>
          <div class='bannerDescriptionWrapper'>
            <h1 class='bannerTitle  brandFontBold'>In-Home Care</h1>
            <p className='bannerDecription brandFontCondensed'>
            At ExpectCare, we apply our mission of glorifying God by serving our clients, families, and the community. As a faith-based organization, we seek to meet the needs and expectations of those that we serve each day through providing healing and compassionate care. We believe in doing our very best - and then some.
            </p>
            <button class='bannerButton'><strong>Contact Us Today</strong></button>
          </div>
        </div>
      </section>
    )
  }
}

export default Banner