import React, { Component } from 'react';
import Notifications from './Notifications';
import RetroList from '../retros/RetroList';

class Dashboard extends Component {
  render(){
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col s12 m6">
            <RetroList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;