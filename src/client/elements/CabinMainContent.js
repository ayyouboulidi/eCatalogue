import React, { Component } from 'react'
import MonumentsList from "../components/MonumentsList"
import SupplierList from "../components/SupplierList"
import FilterPanel from "../components/FilterPanel"
import ItemList from "../components/ItemList"
import HeadCabin from "../components/HeadCabin"

export default class MainContent extends Component {

    render(){
        return(
            <div className="content">
              <HeadCabin/>
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
