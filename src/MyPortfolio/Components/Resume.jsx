import React, {Component} from 'react';
import '../MyPortfolio.css';
import CV from '../img/CV.jpg'

class Resume extends Component {
    render() {
        return (
            <div className="resume" id="resume">
                <h3> <strong>My Resume</strong> </h3>
                <hr/>
                <p>You can view or download my resume just click on the pic below :</p> 
                <div className="resume-file">
                    
                    <a href="http://bit.ly/CV_GifarZ" target="_blank" rel="noopener noreferrer">
                        <img src={CV} alt="Resume"/>
                    </a>  
                    
                </div>
            </div>
        )
    }
}

export default Resume;