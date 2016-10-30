import React from 'react';
import SectionName from "./sectionName"

export default class title extends React.Component {
    render(){
        return(
            <div className="progress_title">
                <SectionName />
                <div className="blockAlign5"><img src="img/PROJECT-ICON.png" /></div>
            </div>
        );
    }
}
