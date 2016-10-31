import React, { Component } from 'react';
import welcome from '../store/welcome';

class AircraftDescription extends Component {
    constructor(props){
        super(props);
        this.state = {aircrafts: []};
    }
    componentWillMount(){
        let filter = this.props.selected;
        var aircrafts = welcome.getAircrafts();
        console.log("Searching for " + filter);
        aircrafts.forEach(function(aircraft) {
            if (aircraft.family == filter) {
                this.state.aircrafts.push(aircraft);
            }
        }, this);
        console.log(this.state);
        this.setState(this.state);
    }
    handleSelect(event){
        console.log("Selected : " + event.target);
    }
    render(){
        return(
            <div className="aircraft_description">
                <div>
                    {this.props.selected}
                </div>
                {
                    this.state.aircrafts.map((aircraft, key)=>{
                        return(
                            <div key={key} onClick={this.handleSelect.bind(this)}>
                                <div>{aircraft.type}</div>
                                <div>{aircraft.description}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
export default AircraftDescription;