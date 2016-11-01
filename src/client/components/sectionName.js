import React from 'react';

export default class sectionName extends React.Component {
    render(){
        return(
            <div className="blockAlign2">
              <span className="title">{this.props.title}</span>
              <span className="progressarien">{this.props.progress}</span>
            </div>
        );
    }
}
