import React from 'react'
import { Link } from 'react-router'

export default class SideMenu extends React.Component{
  render() {
    return (
      <div className="side_menu">
        <div className="side_menu_box"><Link to="/dashboard">Dashboard</Link></div>
        <div className="side_menu_box"><Link to="/cabin">cabin</Link></div>
        <div className="side_menu_box">Cabin System</div>
        <div className="side_menu_box">System</div>
        <div className="side_menu_box">Emergency Equipment</div>
        <div className="side_menu_box">My Favourites</div>
        <div className="side_menu_box">My Project</div>
      </div>
    )
  }
}
