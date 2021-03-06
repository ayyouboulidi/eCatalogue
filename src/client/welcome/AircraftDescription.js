import React, { Component } from 'react';
import { Link } from 'react-router';
import welcome from '../store/welcome';

class AircraftDescription extends Component {
    constructor(props){
        super(props);
        this.state = {aircrafts: [], description: {text:"",title:"", lineChart:"", donutChart:""}, selected: ""};
    }
    componentWillMount(){
        let filter = this.props.selected;
        var aircrafts = welcome.getAircrafts();
        aircrafts.forEach(function(aircraft) {
            if (aircraft.family == filter) {
                if (this.state.selected == ""){
                    this.state.selected = aircraft.type;
                    this.state.description.text = aircraft.text;
                    this.state.description.title = aircraft.title;
                    this.state.description.lineChart = aircraft.lineChart;
                    this.state.description.donutChart = aircraft.donutChart;
                }
                this.state.aircrafts.push(aircraft);
            }
        }, this);
        this.setState(this.state);
    }
    componentWillReceiveProps(props){
        let self = this;
        self.state.aircrafts = [];
        self.state.selected = "";
        let filter = props.selected;
        var aircrafts = welcome.getAircrafts();
        aircrafts.forEach(function(aircraft) {
            if (aircraft.family == filter) {
                if (self.state.selected == ""){
                    self.state.selected = aircraft.type;
                    self.state.description.text = aircraft.text;
                    self.state.description.title = aircraft.title;
                    self.state.description.lineChart = aircraft.lineChart;
                    self.state.description.donutChart = aircraft.donutChart;
                }
                self.state.aircrafts.push(aircraft);
            }
        }, self);
        self.setState(self.state);
    }
    handleSelect(event){
        let self = this;
        let select = event.target.getAttribute("name");
        let aircrafts = this.state.aircrafts;
        aircrafts.forEach(function(aircraft){
            if (select == aircraft.type) {
                self.state.selected = aircraft.type;
                    self.state.description.text = aircraft.text;
                    self.state.description.title = aircraft.title;
                    self.state.description.lineChart = aircraft.lineChart;
                    self.state.description.donutChart = aircraft.donutChart;
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
                    <div className="description"><p>{this.state.description.title}</p><span dangerouslySetInnerHTML={{__html:this.state.description.text}} /></div>
                    <div className="diagram"><img src={this.state.description.donutChart} alt="circle diagram" /></div>
                    <div className="chart"><img src={this.state.description.lineChart} alt="chart" /></div>
                    <Link className="continue" to="/dashboard"><input className="submit" type="submit" name="goToDashBoard" value="Continue" /></Link>
                </div>
            </div>
        );
    }
}
export default AircraftDescription;
