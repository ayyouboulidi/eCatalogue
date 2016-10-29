import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Customers from './Customers';
import Updates from './Updates';
import MostViewed from './MostViewed';

class AirbusContent extends Component {
    render(){
        return(
            <div className="content">
                <Breadcrumb location="Dashboard" />
                <div className="overview">
                    <Customers />
                    <Updates />
                    <MostViewed />
                </div>
            </div>
        );
    }
}
export default AirbusContent;