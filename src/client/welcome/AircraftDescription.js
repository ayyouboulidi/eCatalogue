import React, { Component } from 'react';

class AircraftDescription extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div className="aircraft_description">
                {this.props.aircrafts}
            </div>
        );
    }
}
export default AircraftDescription;