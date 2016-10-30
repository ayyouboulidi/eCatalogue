import React, { Component } from 'react';
import AircraftTypes from './AircraftTypes';
import AircraftDescription from './AircraftDescription';

class AircraftSelection extends Component {
    render(){
        return(
            <div className="aircraft_selection">
                <AircraftTypes aircrafts="A380" />
                <AircraftDescription aircrafts="A380" />
            </div>
        );
    }
}
export default AircraftSelection;