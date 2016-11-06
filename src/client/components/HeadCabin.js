import React, { Component } from 'react'
import SearchBox from "./searchbox"
import Title from "./title"

export default class HeadCabin extends Component {


  render(){
    return(
      <div className="headdashboard">
      <Title />
      <SearchBox page="cabin" />
      </div>
    );
  }
}
