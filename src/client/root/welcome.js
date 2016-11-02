import React, { Component } from 'react';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router'
import Header from '../elements/header';
import PageTitle from '../elements/PageTitle';
import Search from '../components/searchbox';
import AircraftSelection from '../welcome/AircraftSelection';

class Welcome extends Component {
    constructor(){
        super(...arguments);
    };
    render(){
        return(
            <div className="welcome_page">
                <Header />
                <section className="welcome">
                    <div className="headdashboard">
                        <PageTitle title="Welcome to My Airbus" excerpt="Please select an aircraft to continue" />
                        <Search />
                    </div>
                    <div className="welcome-middle">
                        <AircraftSelection />
                        <Link to="/dashboard"><input className="submit" type="submit" name="goToDashBoard" value="Continue to Catalog" /></Link>
                    </div>
                </section>
            </div>
        );
    }
}
export default Welcome;
