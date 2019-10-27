import React, {Component} from 'react';
import './MyPortfolio.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Headers from './Components/Header';
import Drawers from './Components/Drawer';
import Landing from './Components/landingpage';
import Footer from './Components/Footer';

class MyPortfolio extends Component {
    render() {
        return (
          
                <div className="background">
                    <Headers/>
                    <Drawers/>
                    <Landing/>
                    <About/>
                    <Resume/>
                    <Contact/>
                    <Footer/>
                </div>
           
        )
    }
}

export default MyPortfolio;