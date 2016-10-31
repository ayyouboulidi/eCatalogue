import React, { Component } from 'react';
import AircraftTypes from './AircraftTypes';

class AircraftSelection extends Component {
    render(){
        return(
            <div className="aircraft_selection">
                <AircraftTypes />
            </div>
        );
    }
}
export default AircraftSelection;