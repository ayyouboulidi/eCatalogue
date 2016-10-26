import React from 'react'
import { Link } from 'react-router'

export default class Dashboard extends React.Component{
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <ul>
          <li><Link to="/dashboard">dashboard</Link></li>
          <li><Link to="/">cabine</Link></li>
        </ul>
      </div>
    )
  }
}
