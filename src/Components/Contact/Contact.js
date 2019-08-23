import React from 'react';
import './styles.css'

class Contact extends React.Component {

    render() {
        return (
            <div>
                <div className="contactHeader">
                    <h1 className="brandFont">We want to hear from you!</h1>
                </div>

                <div>
                   
                    <div className="formContainer">
                      
                        <form className="form" action="/action_page.php">
                            <h3 className="brandFont contactTitle">Contact Us Today</h3>
                            <input className="text" type="text" name="firstname" value="Name" />
                            <br />
                            <input className="text" type="text" name="lastname" value="Email" />
                            <br />
                            <input className="text" type="text" name="lastname" value="Phone Number" />
                            <br />
                            <textarea className="textArea" rows="5" cols="60" id="TITLE">
                            </textarea>
                            <br />
                            <input className="submitBtn" type="submit" value="Submit" />
                        </form>
                    </div>

                </div>


            </div>

        )
    }
}

export default Contact