import React, { Component } from 'react';
import welcome from '../store/welcome';
import AircraftDescription from './AircraftDescription';

class AircraftTypes extends Component {
    constructor(props){
        super(props);
        this.state = {families: [], selected: ""};
    }
    componentWillMount(){
        this.state.families = welcome.getFamily();
        this.state.selected = "A380";
        this.setState(this.state);
    }
    handleSelect(event){
        console.log("Selected : " + event.target);
    }
    render(){
        var self = this;
        return(
            <div className="aircraft_types">
                <div className="carousel">
                Airbus Families
                    {
                        this.state.families.map(function(family, key){
                            return(
                                <div key={key} className="aircraft_card" onClick={self.handleSelect.bind(this)}>
                                    <div name={family.name}>{family.name}</div>
                                    <div>{family.description}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <AircraftDescription selected={this.state.selected} />
            </div>
        );
    }
}
export default AircraftTypes;