import React, { Component } from 'react';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router'
import Header from '../elements/header';
import Breadcrumb from '../elements/Breadcrumb';
import PageTitle from '../elements/PageTitle';
import Search from '../elements/Search';
import AircraftSelection from '../elements/AircraftSelection';

class Welcome extends Component {
    constructor(){
        super(...arguments);
    };
    render(){
        return(
            <div className="welcome">
                <Header />
                <Breadcrumb title="My Airbus" location="Aircraft" />
                <section className="welcome">
                    <div className="welcome-top">
                        <PageTitle title="Welcome to My Airbus" excerpt="Please select an aircraft to continue" />
                        <Search />
                    </div>
                    <div className="welcome-middle">
                        <AircraftSelection />
                    </div>
                </section>
            </div>
        );
    }
}
export default Welcome;
