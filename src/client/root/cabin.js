import React from 'react'
import { Link } from 'react-router'
import Header from '../elements/header'
import SideMenu from '../elements/sideMenu'
import CabinMainContent from '../elements/CabinMainContent'
import sectionNameStore from "../store/sectionName"


export default class Cabin extends React.Component{
  constructor(){
    super(...arguments);
  }
  componentWillMount(){
    let prevValue = sectionNameStore.getSectionName()
    let progress = "Cabin > "+prevValue.aircraft
    sectionNameStore.setSectionName({name:"Cabin Catalog",progress:progress,aircraft:prevValue.aircraft})
  }
  render() {
    return (
      <div>
        <Header />
        <SideMenu />
        <CabinMainContent/>
      </div>
    )
  }
}
