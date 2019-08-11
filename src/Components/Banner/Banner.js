import React from 'react'
import './styles.css'

class Banner extends React.Component {
  render () {
    return (
      <section className='banner brandFont'>
        <div className='bannerBlur' />
        <div className='bannerElements'>
          <h1 className='brandFontBold'>
            In-Home and Hospice Care
          </h1>
          <p className='brandFontLight'>
            When you are living a serious illness, it's important to find care that supports your needs and goals.
             ExpectCare Hospice Has a philosophy of care that recognizes that a serious illness affects the patient
             and the patient's loved ones.
          </p>
          <span className='button brandFontLight'>Learn More</span>
        </div>
      </section>
    )
  }
}

export default Banner
