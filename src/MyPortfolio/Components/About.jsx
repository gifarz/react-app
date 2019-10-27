import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell} from 'react-mdl';
import '../MyPortfolio.css';

class About extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }
    
    toggleCategories() {
        if(this.state.activeTab === 0){
            return (
                <div className="active-tab">
                    <p>Hallo my name is Gifar, I am fresh graduated Geophysics of Padjadjaran University. Im living in Banjar City, West Java. I have interested in Geophysics field are Microseismic and Geoelectrical Method. While in different field I have been interesting into Web Development, since I had responsible in organization to develop a website using wordpress. In two Months I had studied and still going on to learn about HTML5, CSS3 and Javascript, also I can use framework there are Bootstrap (Competent), ReactJS (Beginner), and Angular (Novice). I am fast learner person with what I want to achieve, and also of course accompenied with hard working. Since in college I had join organization to develope my communication skill and soft skill, there are :</p>
                    <ul>
                        <li><p> KMG Al-Fatih (Major Field)</p></li>
                        <li><p> PEDRA GEOFISIKA (Major Field)</p></li>
                        <li><p> SPE UNPAD (University Field)</p></li>
                        <li><p> Nurul Ilmi (Faculty Field)</p></li>
                    </ul>                    
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="active-tab">
                    <p>My education School there are : </p>
                    <hr/>
                    <p>2015 - 2019 | Padjadjaran University with GPA 3.08 </p>
                    <p>2012 - 2015 | SMAN 1 BANJAR </p>
                    <p>2009 - 2012 | MTs.Muhammadiyyah Al-Furqon </p>
                </div>
            )
        } else if(this.state.activeTab === 2) {
            return(
                <div className="active-tab">
                    <p>I had experiences in related field there are :</p>
                    <hr/>
                    <p>Practical work and final bachelor task on 2018 - 2019</p>
                    <p>> Determination of Disaster Areas Use the Value of Magnitude and Ground Acceleration Case Study (West Java Faults) at BMKG</p>
                    <p>Practical work on 2018 (3 Months)</p>
                    <p>> Wave Selection Method in Real Time Situation at BMKG</p>
                    <p>Field Practical Work on 2017 (1 Month include acquitition and processing data)</p>
                    <p>> Slip Field Investigation Use Resistivity Method (Case Study : Desa Anjung, Sumedang)</p>
                </div>
            )
        }
    }

    render() {
        return (
                
            <div id="about">
                
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple className="Tabs">
                    <Tab>Who am I?</Tab>
                    <Tab>Education</Tab>
                    <Tab>Experiences</Tab>
                </Tabs>

                <section className="">
                    <Grid className="">
                        <Cell col={12}><div className="content">{this.toggleCategories()}</div></Cell>
                    </Grid>
                </section>

            </div>

        )
    }
}

export default About;