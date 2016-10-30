import React from 'react'
import { Link } from 'react-router'
import Header from '../elements/header'
import SideMenu from '../elements/sideMenu'
import CabinMainContent from '../elements/CabinMainContent'


export default class Cabin extends React.Component{
  constructor(){
    super(...arguments);
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
