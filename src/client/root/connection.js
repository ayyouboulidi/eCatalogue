import React from 'react'
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router'
import ConnectionBox from '../elements/ConnectionBox'
import Header from '../elements/header'

export default class Connection extends React.Component{
  render() {
    return (
      <div className="connection">
        <Header />
        <img className="A320" src="/img/login/A320.png" />
        <img className="A330" src="/img/login/A330.png" />
        <img className="A350" src="/img/login/A350.png" />
        <ConnectionBox text="Airbus" />
        <img className="A380" src="/img/login/A380.png" />
      </div>
    )
  }
}
