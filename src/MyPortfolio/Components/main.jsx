import React from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Landing from './landingpage';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/About" component={About}/>
            <Route path="/Resume" component={Resume}/>
            <Route path="/Contact" component={Contact}/>
        </Switch>
    )
}

export default Main;