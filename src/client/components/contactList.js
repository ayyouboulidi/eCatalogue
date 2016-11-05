import React, { Component } from 'react';

export default class contactList extends Component {
  constructor(props){
    super(props);
    this.state={
      contacts:[]
    }
  }

  componentWillMount(){
    let _this = this
    $.post('/GetContacts',function(data){
      _this.state.contacts=data.result
      _this.setState(_this.state)
    },"json")
  }

    render(){
        return(
            <div className="width25 fright bgcontact">
              <div className="second_title">My Airbus Contacts</div>
              <table className="width100 padding2 contact-list">
                <tbody>
                  {
                    this.state.contacts.map(function(contact,key){
                      return(
                      <tr key={key}>
                        <td className="contact-list-name">{contact.name}</td>
                        <td>{contact.role}</td>
                        <td><a href={contact.email}><img className="fright contact-list-mail" src="img/MAIL-ICON.png"/></a></td>
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
