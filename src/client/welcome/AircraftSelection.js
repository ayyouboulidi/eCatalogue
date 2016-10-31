import React, { Component } from 'react';
import AircraftTypes from './AircraftTypes';
import AircraftDescription from './AircraftDescription';
import aircrafts from '../store/welcome';

class AircraftSelection extends Component {
    constructor(){
        super();
        this.state = {aircrafts: []};
    }
    componentWillMount(){
        this.state.aircrafts = aircrafts.getAircrafts();
        this.setState(this.state);
    }
    render(){
        return(
            <div className="aircraft_selection">
                <AircraftTypes aircrafts={this.state.aircrafts} />
                <AircraftDescription aircrafts="A380" />
            </div>
        );
    }
}
export default AircraftSelection;