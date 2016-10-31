import React, { Component } from 'react';

export default class lastVisits extends Component {
  constructor(props){
    super(props);
    this.state={
      items:["AA","CC","CXX","jhsd","sds","sxx","kjd","jhd","jhh","jh","jh","kjifc","kllo"]
    }
  }
    render(){
        return(
            <div className="width25 fleft bgcontact">
              Last visits
              <div className="activeoverflow height250">
                <table className="width100 padding2">
                  <tbody>
                    {
                      this.state.items.map(function(item,key){
                        return(
                        <tr key={key}>
                          <td><img className="fright" src="img/MAIL-ICON.png"/></td>
                          <td>{item} - DATE 05/45/4553</td>
                        </tr>
                      )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
        );
    }
}