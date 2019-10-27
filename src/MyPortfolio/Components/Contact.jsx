import React, {Component} from 'react';
import '../MyPortfolio.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact" id="contact">
                <h3> <strong>My Contact</strong> </h3>
                <hr/>
                <p>You can contact me below :</p>
                <div className="contact-field">
                    
                    <i className="fa fa-envelope" aria-hidden="true"> gifarz06@gmail.com</i>
                    <i className="fa fa-paper-plane" aria-hidden="true"> +6281221808679</i>
                    <i className="fa fa-home" aria-hidden="true"> Banjar City, West Java</i>
                    <i className="fa fa-whatsapp" aria-hidden="true"> +6281221808679</i>
                    
                </div>
            </div>
        )
    }
}

export default Contact;