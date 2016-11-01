import React, { Component } from 'react'
import MonumentsList from "../components/MonumentsList"
import SupplierList from "../components/SupplierList"
import FilterPanel from "../components/FilterPanel"
import ItemList from "../components/ItemList"

export default class CatalogMode extends Component {

    render(){
        return(
            <div>
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
