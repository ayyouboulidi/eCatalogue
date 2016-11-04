import React, { Component } from 'react';
import { Link } from 'react-router';
import welcome from '../store/welcome';

class AircraftDescription extends Component {
    constructor(props){
        super(props);
        this.state = {aircrafts: [], description: "", selected: ""};
    }
    componentWillMount(){
        let filter = this.props.selected;
        var aircrafts = welcome.getAircrafts();
        console.log("Searching for " + filter);
        aircrafts.forEach(function(aircraft) {
            if (aircraft.family == filter) {
                if (this.state.selected == ""){
                    this.state.selected = aircraft.type;
                    this.state.description = aircraft.description;
                }
                this.state.aircrafts.push(aircraft);
            }
        }, this);
        this.setState(this.state);
    }
    componentWillReceiveProps(){
        let self = this;
        setTimeout(function(){
            self.state.aircrafts = [];
            self.state.selected = "";
            let filter = self.props.selected;
            var aircrafts = welcome.getAircrafts();
            console.log("Searching for " + filter);
            aircrafts.forEach(function(aircraft) {
                if (aircraft.family == filter) {
                    if (self.state.selected == ""){
                        self.state.selected = aircraft.type;
                        self.state.description = aircraft.description;
                    }
                    self.state.aircrafts.push(aircraft);
                }
            }, self);
            self.setState(self.state);
        }, 100);
    }
    handleSelect(event){
        let self = this;
        console.log("Selected : " + event.target.getAttribute("name"));
        let select = event.target.getAttribute("name");
        let aircrafts = this.state.aircrafts;
        aircrafts.forEach(function(aircraft){
            if (select == aircraft.type) {
                self.state.selected = aircraft.type;
                self.state.description = aircraft.description;
            }
        });
        this.setState(this.state);
    }
    render(){
        return(
            <div className="aircraft_description">
                <div className="tablist">
                    {
                        this.state.aircrafts.map((aircraft, key)=>{
                            return(
                                    <div key={key} name={aircraft.type} className={this.state.selected == aircraft.type ? "tab selected" : "tab"} onClick={this.handleSelect.bind(this)}>{aircraft.type}</div>
                            );
                        })
                    }
                </div>
                <div className="aircraft_details">
                    <div className="description">{this.state.description}</div>
                    <img className="diagram" src="" alt="circle diagram" />
                    <img className="chart" src="" alt="chart" />
                </div>
                    <Link className="continue" to="/dashboard"><input className="submit" type="submit" name="goToDashBoard" value="Continue" /></Link>
            </div>
        );
    }
}
export default AircraftDescription;