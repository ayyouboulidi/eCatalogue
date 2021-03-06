import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css'
import { Router, Route,IndexRoute, browserHistory } from 'react-router'
import Connection from './root/connection'
import Dashboard from './root/dashboard'
import Welcome from './root/welcome'
import Cabin from './root/cabin'
import Project from './root/project'
require("jquery");
require("jquery-ui-bundle");
//require("jquery-ui/themes/base/jquery-ui.css");
//require("jquery-ui/themes/base/jquery-ui.theme.css");

const App = React.createClass({
			  render() {
			    return (
			      <div>
			        {this.props.children}
			      </div>
			    )
			  }
			})

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Connection} />
      <Route path="dashboard" component={Dashboard}/>
      <Route path="welcome" component={Welcome}/>
      <Route path="cabin" component={Cabin}/>
      {/*<Route path="System" component={System}/>
      <Route path="Airplane" component={Airplane}/>
      <Route path="crew" component={Crew}/>
      <Route path="emergency" component={Emergency}/>*/}
      <Route path="project" component={Project}/>
    </Route>
  </Router>
),document.getElementById('root')
);
