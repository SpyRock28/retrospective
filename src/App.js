import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import CreateRetro from './components/retros/CreateRetro';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/create' component={CreateRetro} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
