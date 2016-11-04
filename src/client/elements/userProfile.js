import React from 'react'
import connectStore from "../store/connect"

export default class UserProfile extends React.Component{
  render() {
    console.log(connectStore.getUser());
    if (connectStore.getUser() != undefined) {
      return (
        <div className="user_profile">
          <img src="img/USER-ICON.png"/><span className="main_title">{" "+connectStore.getUser()}</span>
        </div>
      )
    } else {
      return(<div className="no-user"></div>);
    }
  }
}
