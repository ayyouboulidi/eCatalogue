import React, { Component } from 'react'
import SearchBox from "../components/searchbox"
import Title from "../components/title"

export default class MainContent extends Component {
    render(){
        return(
            <div className="content">
              <div className="headdashboard">
                <Title />
                <SearchBox />
              </div>
              <div>
                blablabla
              </div>
              <div>
                blabla again
              </div>
            </div>
        );
    }
}
