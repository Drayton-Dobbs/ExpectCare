import React from 'react';
import './styles.css';
import ExpectChangeLogo from '../../images/ExpectChangeLogo.png'
import Badge from '../../images/ExpectChange.png'

class ExpectChangeCom extends React.Component {
    render() {
        return (
            <div>
                <section className="ExpectChangeComContainer">
                    <div className="ExpectChangeContainer">
                        <div className="picHolder">
                            <img id='headerLogo2' className="logo" src={ExpectChangeLogo} alt='logo' />
                        </div>

                        <h3 className="title">Helping is our Mission</h3>


                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className='changeMission'>
                                The Mission of ExpectChange is to align the resources of a community to provide life skills training, personal and professional development, consulting, and other social services in an effort to assist those at a disadvantage
                        </p>
                            <img id="badge" src={Badge} alt='badge' />
                        </div>

                        <h1 className="title2">Programs</h1>

                        <div class="gridContainer">
                            <div class="grid-item">Autism Early Detection</div>
                            <div class="grid-item">Alzeimer's Early Detection</div>
                            <div class="grid-item">Advanced Care Hospice</div>
                            <div class="grid-item">Senior Housing</div>
                            <div class="grid-item">Community Support</div>
                            <div class="grid-item">Corporate Care</div>
                        </div>




                    </div>

                </section>

                <div>
                <div className="volunteer">
                    <strong>
                    <h1>Volunteer</h1>
                    </strong>

                  
                </div>


                <div className="changeMission2Container">


                    <p className="changeMission2">
                        ExpectChange relies on a compassionate corps of volunteers and local resource groups to make a difference in someone’s life. Play an essential role in providing care and help those in need.
            </p>
                </div>


                </div>



               

                <div className="btnContainer">
                <button type="button" class="btn btn-lg">Volunteer</button>
                <button type="button" class="btn btn-lg">Learn More</button>
                <button type="button" class="btn btn-lg">Donate</button>
                </div>

            </div>
        )
    }
}

export default ExpectChangeCom;