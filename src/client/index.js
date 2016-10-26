import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute, browserHistory } from 'react-router'
import Connection from './root/connection'
import Dashboard from './root/dashboard'

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
      {/*<Route path="cabine" component={Cabine}/>
      <Route path="System" component={System}/>
      <Route path="Airplane" component={Airplane}/>
      <Route path="crew" component={Crew}/>
      <Route path="emergency" component={Emergency}/>
      <Route path="cart" component={Cart}/>*/}
    </Route>
  </Router>
),document.getElementById('root')
);
