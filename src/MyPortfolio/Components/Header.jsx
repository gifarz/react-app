import React, {Component} from 'react';
import { Header,Navigation, Layout } from 'react-mdl';
import {Link} from 'react-scroll';

class Headers extends Component {
    render() {
        return (
            <Layout>

                <Header title="Portfolio" className="text-header">
                    <Navigation className="nav">

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
                </Header>
            </Layout>
        )
    }
}

export default Headers;