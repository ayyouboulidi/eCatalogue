import React, { Component } from 'react'
import connectStore from "../store/connect"
import SearchBox from "../components/searchbox"
import MyCustomers from "../components/myCustomers"
import CurrentProjects from "../components/currentProjects"
import MostVisitedItems from "../components/mostVisitedItems"
import ContactList from "../components/contactList"
import LastUpdate from "../components/lastUpdate"
import CheckList from "../components/checkList"
import LastVisits from "../components/lastVisits"
import News from "../components/news"
import Title from "../components/title"

export default class MainContent extends Component {
    render(){
      let user = connectStore.getUser()
        return(
            <div className="content">
              <div className="headdashboard">
                <Title />
                <SearchBox />
              </div>
              <div  className="firstblockContent">
                {user === "admin" ? <MyCustomers /> : <CurrentProjects /> }
                {user === "admin" ? <LastUpdate /> :<CheckList />}
                {user === "admin" ? <MostVisitedItems /> : <ContactList /> }
              </div>
              <div className="secondblockContent">
                <LastVisits/>
                <News />
              </div>
            </div>
        );
    }
}
