import React from 'react'
import { Link } from 'react-router'
import Header from '../elements/header'
import SideMenu from '../elements/sideMenu'
import MainContent from '../elements/MainContent'
//import AirlinesContent from '../elements/AirlinesContent'
//import AirbusContent from '../elements/AirbusContent'


export default class Dashboard extends React.Component{
  constructor(){
    super(...arguments);
  }
  render() {
    return (
      <div>
        <Header />
        <SideMenu />
        <MainContent />
        {/*<section>
          <SideMenu />
          <AirlinesContent />
        </section>*/}
      </div>
    )
  }
}
