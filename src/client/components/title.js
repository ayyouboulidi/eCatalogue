import React from 'react';
import sectionStore from "../store/sectionName"
import SectionName from "./sectionName"

export default class title extends React.Component {
    render(){
        let title = sectionStore.getSectionName().name
        let progress = sectionStore.getSectionName().progress
        return(
            <div className="progress_title">
                <SectionName title={title} progress={progress} />
                <div className="blockAlign5"><img src="" /></div>
            </div>
        );
    }
}
