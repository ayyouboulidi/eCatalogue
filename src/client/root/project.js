import React from 'react'
import { Link } from 'react-router'
import Header from '../elements/header'
import SideMenu from '../elements/sideMenu'
import ProjectMainContent from '../elements/ProjectMainContent'


export default class Project extends React.Component{
  constructor(){
    super(...arguments);
  }
  render() {
    return (
      <div>
        <Header />
        <SideMenu />
        <ProjectMainContent/>
      </div>
    )
  }
}
