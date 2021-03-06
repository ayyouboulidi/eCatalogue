import React, { Component } from 'react'
import CheckListAccordion from "./checkListAccordion"

export default class checkList extends Component {
    render(){
      return(
          <div className="width25 fright bgchecklist prelative">
            <div className="height50">
              <div className="second_title fleft">My checklist</div>
              <div className="fright padding2"><img title="Export Excel" src="img/EXPORT-ICON.png"/></div>
            </div>
            <div className="height400 mleft mright">
              <CheckListAccordion />
            </div>
          </div>
      );
    }
}
