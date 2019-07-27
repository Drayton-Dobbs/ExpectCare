import React from 'react';
import '../about.css';






class About extends React.Component {


    render() {


        return (
            <div style={{padding: "1em", height: "100vh" }}>
                <div class="jumbotron" style={{ marginTop: "1em"}}>
                    <div class="container">
                        <h1>ExpectCare</h1>
                    </div>
                </div>

                <div class="container">
                    <h2>About us</h2>
                    <p style={{margin: '1em', fontWeight: 'bold'}}>
                        ExpectCare is a regional provider of personalized healthcare services for patients and their families as they face serious or terminal illness.
                        Our care services are designed to help patients and loved ones live a full life during serious illness.
                        Our care services are provided in the comfortable surrounding where patients live to help reduce the physical and emotional suffering during serious illness.
                        We work with your physician and other healthcare providers to assist with your recovery or cope with other life events.</p>
                </div>
            </div>
        )
    }
}

export default About;