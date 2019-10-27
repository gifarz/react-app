import React, {Component } from 'react';
import {Drawer, Navigation, Layout} from 'react-mdl';
import {Link} from 'react-scroll';

class Drawers extends Component {
    render() {
        return (
            <Layout>

                <Drawer title="My Portfolio">
                    <Navigation>
                        <Link 
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >About Me</Link>

                        <Link 
                        activeClass="active"
                        to="resume"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >Contact</Link>

                        <Link 
                        activeClass="active"
                        to="resume"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >Resume</Link>
                    </Navigation>
                </Drawer>
            </Layout>
        )
    }
}

export default Drawers;