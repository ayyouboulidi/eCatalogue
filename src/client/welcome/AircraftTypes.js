import React, { Component } from 'react';
import welcome from '../store/welcome';
import sectionNameStore from '../store/sectionName';
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
        this.getName(event.target.parentNode);
    }
    getName(node){
        let name = node.getAttribute("name");
        if ( name == null ) {
            this.getName(node.parentNode);
        } else {
            console.log("Selected : " + name);
            this.state.selected = name;
            this.setState(this.state);
            sectionNameStore.setSectionName({name:"Airbus Dashboard",progress:"dashboard > "+name,aircraft:name})
        }
    }
    render(){
        let self = this;
        let imgStyle = {
        }
        return(
            <div className="aircraft_types">
                <div className="welcome-carousel">
                    {
                        this.state.families.map(function(family, key){
                            return(
                                <div key={key} name={family.name} className={(self.state.selected == family.name) ? "aircraft_card selected": "aircraft_card" } onClick={self.handleSelect.bind(self)}>
                                    <div className="clicker-zone">
                                        <div className="inside-block">
                                            <img src={family.image} />
                                            <div className="card_text-title" name={family.name}>{family.name}</div>
                                            <div className="card_text-description" name="description">{family.description}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <AircraftDescription selected={self.state.selected} />
            </div>
        );
    }
}
export default AircraftTypes;
