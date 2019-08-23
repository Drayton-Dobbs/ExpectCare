import React from 'react';
import './styles.css'

class Services extends React.Component {

  render() {
    return (
        <div className="servicesContainer">
            <div className="servicesHeader">
                <h1 className="servicesTitle">"CARING RESOURCES YOU CAN RELY ON AND DESERVE"</h1>
            </div>

            <div className="topServices">
                <div className="servicesList1">
                </div>

                <div className="servicesList2">
                    <div className="servicesListTitle">
                        <h3 className="brandFont">Our Services Include</h3>
                    </div>

                    <div className="servicesListUl">
                        <ul>
                            <li className="serviceListItem">Respite</li>
                            <li className="serviceListItem">Housekeeping Services</li>
                            <li className="serviceListItem">24 Hour Care</li>
                            <li className="serviceListItem">Meal Planning and Preparartion</li>
                            <li className="serviceListItem">Companionship</li>
                            <li className="serviceListItem">Long Term Care</li>
                            <li className="serviceListItem">Bathing / Dressing</li>
                            <li className="serviceListItem">Errands</li>
                            <li className="serviceListItem">Laundry</li>
                            <li className="serviceListItem">Transportation Services</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="bottomServices">
                <div className="hospiceContainer">
                    <div className="hospiceServicesPara">
                        <h3 className="brandFont h3">Hospice Care</h3>
                        ExpectCare Hospice supports people in Jefferson County, Alabama and surrounding areas while enabling them to live fully, with comfort and dignity, to the end of life. Our family provides physical, emotional and spiritual support for people faced with life-limiting illness as well as their caregivers and families. “If only we had called you sooner…” is often heard from families who have been served by our staff. We have a team of skilled professionals and volunteers to serve our patients and their families, whether in the comfort of their own homes, in assisted living centers, in skilled nursing facilities or in hospitals.
                    </div>
                    <div className="hospiceServicesPic"></div>
                </div>

                <div className="inHomeContainer">
                    <div className="inHomeServicesPic"></div>
                    <div className="inHomeServicesPara hospiceServicesPara">
                        <h3 className="brandFont h3" >In-Home Care</h3>
                        ExpectCare provides non-medical In-home care services, assistance to locate appropriate housing, assisted living facility tours, and free resources. ExpectCare strives to offer quality services at competitive rates to the Birmingham, Alabama and surrounding areas. We at ExpectCare say "we are an organization founded on the principles that we provide the care you expect with compassion and integrity".
                    </div>
                </div>
            </div>

            
        </div>

    )
  }
}

export default Services