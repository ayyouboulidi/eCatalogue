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
        console.log("Logged In");
        connectStore.setUser(this.state.userName)
    }

    setUserName(event){
      this.setState({userName: event.target.value});
    }

    render(){
        return(
            <div className="connection_box">
                <h3>{this.props.text}</h3>
                <label className="block">Username</label>
                <input className="username block" type="text" name="username" placeholder="username" value={this.state.userName} onChange={this.setUserName.bind(this)} />
                <label className="block">Password</label>
                <input className="password block" type="password" name="password" placeholder="password" />
                <div className="block"><div className="remember"><input type="checkbox" />{" "}Remember me{" "}</div><a className="forgot" href="#">Forgot password ?</a></div>
                <Link to="/welcome"><input className="submit" type="submit" name="submit" value="Log In" onClick={this.goToWelcome.bind(this)} /></Link>
            </div>
        );
    }
}
export default ConnectionBox;
