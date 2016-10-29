import React, { Component } from 'react'

export default class projectList extends Component {
  constructor(props){
    super(props);
    this.state={
      projects:[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    }
  }
    render(){
        return(
            <table className="width100 padding2">
              <tbody>
                {
                  this.state.projects.map(function(project,key){
                    return(
                    <tr key={key}>
                      <td><input type="checkbox"/></td>
                      <td>Option Name</td>
                      <td>{project}</td>
                      <td>29/10/2016</td>
                      <td><img className="fright" src="img/DELETE-ICON-SMALL.png"/></td>
                    </tr>
                  )
                  })
                }
              </tbody>
            </table>
        );
    }
}
