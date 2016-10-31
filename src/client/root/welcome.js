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
            <div className="welcome">
                <Header />
                <section className="welcome">
                    <div className="welcome-top">
                        <PageTitle title="Welcome to My Airbus" excerpt="Please select an aircraft to continue" />
                        <Search />
                    </div>
                    <div className="welcome-middle">
                        <AircraftSelection />
                    </div>
                </section>
                <Link to="/dashboard"><input className="submit" type="submit" name="goToDashBoard" value="Continue to Catalog" /></Link>
            </div>
        );
    }
}
export default Welcome;