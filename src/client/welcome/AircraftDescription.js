import React, { Component } from 'react';
import welcome from '../store/welcome';

class AircraftDescription extends Component {
    constructor(props){
        super(props);
        this.state = {aircrafts: [], description: "No description for this aircraft model"};
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
        this.setState(this.state);
    }
    componentWillReceiveProps(){
        let self = this;
        setTimeout(function(){
            self.state.aircrafts = [];
            let filter = self.props.selected;
            var aircrafts = welcome.getAircrafts();
            console.log("Searching for " + filter);
            aircrafts.forEach(function(aircraft) {
                if (aircraft.family == filter) {
                    self.state.aircrafts.push(aircraft);
                }
            }, self);
            self.setState(self.state);
        });
    }
    handleSelect(event){
        console.log("Selected : " + event.target.getAttribute("name"));
        var tabs = document.getElementsByClassName('tab');
        console.log(tabs);
    }
    render(){
        return(
            <div className="aircraft_description">
                <div className="tablist">
                    {
                        this.state.aircrafts.map((aircraft, key)=>{
                            return(
                                    <div key={key} name={aircraft.type} className="tab" onClick={this.handleSelect.bind(this)}>{aircraft.type}</div>
                            );
                        })
                    }
                </div>
                <div>{this.state.description}</div>
            </div>
        );
    }
}
export default AircraftDescription;