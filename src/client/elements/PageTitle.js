import React, { Component } from 'react';

class PageTitle extends Component {
    render(){
        return(
            <div className="page_title">
                <h2>{this.props.title}</h2>
                <h3>{this.props.excerpt}</h3>
            </div>
        );
    }
}
export default PageTitle;