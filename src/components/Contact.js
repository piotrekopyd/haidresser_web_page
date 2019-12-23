import React, {Component} from 'react';
import  '../css/ContactStyle.css'

class Contact extends Component {
    render() {
        return (
            <div className="contact-container">
                <div className="contact-header">
                    <h1> Contact Us! </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        A accusamus alias architecto at beatae eligendi et ex iste, iure, modi pariatur perferendis quae sunt, unde.
                    </p>
                </div>

                <div className="form">
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="E-mail" />
                        <input type="text" id="contact-message" placeholder="Message" />
                    </form>
                    <button type="button">
                        Let's talk
                    </button>
                </div>
            </div>
        );
    }
}

export default Contact;