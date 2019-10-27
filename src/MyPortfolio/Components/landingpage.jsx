import React, {Component} from 'react';
import '../MyPortfolio.css';
import Foto from '../Foto.png';
import Typist from 'react-typist';

class Landing extends Component {

    render () {
        return (
            
                <div className="header">
                    <Typist>
                        <h1> Welcome To My Website
                        <Typist.Backspace count={10} delay={2000}/>
                        <Typist.Delay ms={1000}/>
                        My Portfolio</h1>
                        <Typist.Delay ms={500}/>
                        <Typist.Backspace count={23} delay={1000}/>
                        <h1> Muhammad Gifar Zaini </h1>
                    </Typist>
                    <p>Geophysicist | Frontend Developer</p>
                    <img src={Foto} alt="Foto"/>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/muhammad-gifar-zaini-7b76a7142/" rel="noopener noreferrer" target="_blank" className="linked">
                            <i className="fa fa-linkedin-square" aria-hidden="true"/>
                        </a>
                        <a href="https://www.github.io/gifarz" rel="noopener noreferrer" target="_blank" className="github">
                            <i className="fa fa-github-square" aria-hidden="true"/>
                        </a>
                    </div>
                </div>

        )
    }
}

export default Landing;