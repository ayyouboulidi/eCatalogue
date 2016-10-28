import React from 'react'

export default class SideMenu extends React.Component{
  render() {
    return (
      <div className="side_menu">
        <div className="side_menu_box">Dashboard</div>
        <div className="side_menu_box">Cabin</div>
        <div className="side_menu_box">Cabin System</div>
        <div className="side_menu_box">System</div>
        <div className="side_menu_box">Emergency Equipment</div>
        <div className="side_menu_box">My Favourites</div>
        <div className="side_menu_box">My Project</div>
      </div>
    )
  }
}
