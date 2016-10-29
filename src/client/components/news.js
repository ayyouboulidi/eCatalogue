import React, { Component } from 'react';

export default class news extends Component {
  constructor(props){
    super(props);
    this.state={
      contacts:["Ayyoub","Benjamin","Reda"]
    }
  }
    render(){
        return(
            <div className="width75 height100 fright bgnews">
              <img className="maxwidth100 maxheight100" src="img/airbus.png"/>
            </div>
        );
    }
}
