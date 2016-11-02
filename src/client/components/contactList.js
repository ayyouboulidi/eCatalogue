import React, { Component } from 'react';

export default class contactList extends Component {
  constructor(props){
    super(props);
    this.state={
      contacts:["Ayyoub","Benjamin","Reda"]
    }
  }
    render(){
        return(
            <div className="width25 fright bgcontact">
              <div className="second_title">My Airbus Contacts</div>
              <table className="width100 padding2">
                <tbody>
                  {
                    this.state.contacts.map(function(contact,key){
                      return(
                      <tr key={key}>
                        <td>{contact}</td>
                        <td><img className="fright" src="img/SETTINGS-ICON.png"/></td>
                        <td><img className="fright" src="img/MAIL-ICON.png"/></td>
                      </tr>
                    )
                    })
                  }
                </tbody>
              </table>
            </div>
        );
    }
}
