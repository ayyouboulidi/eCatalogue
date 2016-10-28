import React, { Component } from 'react';
import { Link } from 'react-router';

class ConnectionBox extends Component {
    goToDashBoard(){
        console.log("Logged In");
    }
    render(){
        return(
            <div className="connection_box">
                <h3>{this.props.text}</h3>
                <label className="block">Username</label>
                <input className="username block" type="text" name="username" placeholder="username" />
                <label className="block">Password</label>
                <input className="password block" type="password" name="password" placeholder="password" />
                <div className="block"><div className="remember"><input type="checkbox" />{" "}Remember me{" "}</div><a className="forgot" href="#">Forgot password ?</a></div>
                <Link to="/welcome"><input className="submit" type="submit" name="submit" value="Log In" onClick={this.goToDashBoard.bind(this)} /></Link>
            </div>
        );
    }
}
export default ConnectionBox;