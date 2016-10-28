import React from 'react'
import { Link } from 'react-router'
import Header from '../elements/header'
import SideMenu from '../elements/sideMenu'
import MainContent from '../elements/MainContent'


export default class Dashboard extends React.Component{
  constructor(){
    super(...arguments);
  }
  render() {
    return (
      <div>
        <Header />
        <section>
          <SideMenu />
          <MainContent />
        </section>
      </div>
    )
  }
}
