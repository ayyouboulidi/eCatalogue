import React, { Component } from 'react'
import MonumentsList from "../components/MonumentsList"
import SupplierList from "../components/SupplierList"
import FilterPanel from "../components/FilterPanel"
import ItemList from "../components/ItemList"

export default class CatalogMode extends Component {

    render(){
        return(
            <div className="catalog_mode">
              <div className="monument_list">
                <div className="monument-left-title">MONUMENTS</div>
                <MonumentsList />
              </div>
              <div className="supplier_list">
                <div className="features-left-title">FEATURES</div>
                <SupplierList />
              </div>
              <div className="cabin_bottom_block">
                <FilterPanel/>
                <ItemList />
              </div>
            </div>
        );
    }
}
