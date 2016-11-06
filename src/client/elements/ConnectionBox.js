import React, { Component } from 'react';
import { Link } from 'react-router';
import connectStore from "../store/connect"

class ConnectionBox extends Component {
    constructor(props){
      super(props)
      this.state={
        userName : ""
      }
    }

    goToWelcome(){
        connectStore.setUser(this.state.userName)
    }

    setUserName(event){
      this.setState({userName: event.target.value});
    }

    render(){
        return(
            <div className="connection_box">
                <h3>My <b>{this.props.text}</b></h3>
                <label className="block">Login :</label>
                <input className="username block" type="text" name="username" value={this.state.userName} onChange={this.setUserName.bind(this)} />
                <label className="block">Password :</label>
                <input className="password block" type="password" name="password" />
                <div className="block"><div className="remember"><input type="checkbox" />{" "}Remember me{" "}</div><a className="forgot" href="#">Forgot password ?</a></div>
                <Link to="/welcome"><input className="submit" type="submit" name="submit" value="Login" onClick={this.goToWelcome.bind(this)} /></Link>
            </div>
        );
    }
}
export default ConnectionBox;
