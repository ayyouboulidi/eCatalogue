import React from 'react'
import { Link } from 'react-router'
import Header from '../elements/header'
import SideMenu from '../elements/sideMenu'


export default class Project extends React.Component{
  constructor(){
    super(...arguments);
  }
  render() {
    return (
      <div>
        <Header />
        <SideMenu />
        <div>This is the list of your selected Items</div>
      </div>
    )
  }
}
