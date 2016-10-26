import React from 'react'
import Connectuser from './userProfile'

export default class Header extends React.Component{
  render() {
    return (
      <div>
        <span><img src="img/logo"/></span>
        <Connectuser/>
      </div>
    )
  }
}
