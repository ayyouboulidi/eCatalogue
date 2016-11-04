import React, { Component } from 'react'
import Cigare from "../components/cabin/Cigare"
import ProposedItem from "../components/cabin/ProposedItem"
import AccordionElements from "../components/cabin/AccordionElements"

export default class AreaMode extends Component {
    render(){
        return(
            <div className="area-mode">
                <Cigare />
                <ProposedItem />
                <AccordionElements />
            </div>
        );
    }
}
