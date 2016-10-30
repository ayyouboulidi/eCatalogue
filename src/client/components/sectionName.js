import React from 'react';
import sectionStore from "../store/sectionName"

export default class sectionName extends React.Component {
    render(){
      let title = sectionStore.getSectionName().name
      let progress = sectionStore.getSectionName().progress
        return(
            <div className="blockAlign2">
              <span className="title">{title}</span>
              <br/>
              <span className="progressarien">{progress}</span>
            </div>
        );
    }
}
