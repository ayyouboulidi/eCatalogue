import React from 'react'
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router'
import ConnectionBox from '../elements/ConnectionBox'

export default class Connection extends React.Component{
  render() {
    return (
      <div className="connection">
        <ConnectionBox text="Connect to My Airbus" />
      </div>
    )
  }
}
