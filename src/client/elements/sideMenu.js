import React from 'react'
import { Link } from 'react-router'
import switcherView from "../store/switcherView"

export default class SideMenu extends React.Component{
  constructor(props){
    super(props);
    let url = window.location.href;
    let urlSplit = url.split('/');
    let view = urlSplit[urlSplit.length - 1];
    this.state = { selected: view};
  }
  resetCabin(){
    switcherView.setView("Catalog")
  }
  render() {
    return (
      <div className="side_menu">
        <Link to="/dashboard" ><div className={(this.state.selected == "dashboard") ? "side_menu_box selected" : "side_menu_box"}><img src="/img/DASHBOARD-ICON.png"/><span>Dashboard</span></div></Link>
        <Link to="/cabin"><div onClick={this.resetCabin.bind(this)} className={(this.state.selected == "cabin") ? "side_menu_box selected" : "side_menu_box"}><img src="/img/CABIN-ICON.png"/><span>Cabin</span></div></Link>
        <div className={(this.state.selected == "cabin_system") ? "side_menu_box selected" : "side_menu_box"}><img src="/img/CABIN-SYSTEM-ICON.png"/><span>Cabin System</span></div>
        <div className={(this.state.selected == "system") ? "side_menu_box selected" : "side_menu_box"}><img src="/img/SYSTEM-ICON.png"/><span>System</span></div>
        <div className={(this.state.selected == "emergency") ? "side_menu_box selected" : "side_menu_box"}><img src="/img/EMERGENCY-ICON.png"/><span>Emergency Equipment</span></div>
        <div className={(this.state.selected == "favorites") ? "side_menu_box selected" : "side_menu_box"}><img src="/img/FAVOURITE-ICON.png"/><span>My Favorites</span></div>
        <Link to="/project" ><div className={(this.state.selected == "project") ? "side_menu_box selected" : "side_menu_box"}><img src="/img/MY-PROJECT-ICON.png"/><span>My Project</span></div></Link>
      </div>
    )
  }
}
