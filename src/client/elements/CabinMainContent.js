import React, { Component } from 'react'
import SearchBox from "../components/searchbox"
import Title from "../components/title"
import MonumentsList from "../components/MonumentsList"
import SupplierList from "../components/SupplierList"
import FilterPanel from "../components/FilterPanel"
import ItemList from "../components/ItemList"

export default class MainContent extends Component {
    render(){
        return(
            <div className="content">
              <div className="headdashboard">
                <Title />
                <SearchBox />
              </div>
              <div className="height250 bgcurrentproject">
                <MonumentsList />
              </div>
              <div className="height250 bgchecklist">
                <SupplierList />
              </div>
              <div className="height300 bgcontact pflex">
                <FilterPanel/>
                <ItemList />
              </div>
            </div>
        );
    }
}
