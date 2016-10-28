import React, { Component } from 'react';

class Breadcrumb extends Component {
    render(){
        return(
            <div className="breadcrumb">
                <span>{this.props.location}</span>
            </div>
        );
    }
}
export default Breadcrumb;