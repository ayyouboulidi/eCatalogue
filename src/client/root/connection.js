import React from 'react'
import { Link } from 'react-router'

export default class Connection extends React.Component{
  render() {
    return (
      <div>
        <h1>Connection</h1>
        <ul>
          <li><Link to="/dashboard">dashboard</Link></li>
          <li><Link to="/">cabine</Link></li>
        </ul>
      </div>
    )
  }
}
