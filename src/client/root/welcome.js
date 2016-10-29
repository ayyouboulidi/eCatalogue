import React, { Component } from 'react';
import Header from '../elements/header';
import { Link } from 'react-router';

class Welcome extends Component {
    render(){
        return(
            <div className="welcome">
                <Header />
                <Link to="/dashboard"><input className="submit" type="submit" name="goToDashBoard" value="go To DashBoard" /></Link>
            </div>
        );
    }
}
export default Welcome;
