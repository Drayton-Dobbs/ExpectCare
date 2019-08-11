import React from 'react';
import './styles.css'

class Contact extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <h1>We want to hear from you!</h1>
                </div>

                <div>
                   
                    <div className="formContainer">
                      
                        <form className="form" action="/action_page.php">
                            <div>Contact Us Today</div>
                            <input className="text" type="text" name="firstname" value="Name" />
                            <br />
                            <input className="text" type="text" name="lastname" value="Email" />
                            <br />
                            <input className="text" type="text" name="lastname" value="Phone Number" />
                            <br />
                            <textarea className="text" rows="5" cols="20" id="TITLE">
                            </textarea>
                            <br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>

                </div>


            </div>

        )
    }
}

export default Contact