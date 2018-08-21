import React, { Component } from 'react';
import Navbar from '../Navbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './style.css';
import NavigationComponent from '../NavigationComponent';
import Introduction from '../Introduction';
import PersonalInformation from '../PersonalInformation';
import NotFound from '../NotFound';
import Successfull from '../Successfull';


class AppLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <React.Fragment>
            <Navbar />
            <NavigationComponent />
            <Switch>
              <Route path="/introduction" component={Introduction} exact={true} />
              <Route path="/personal_information" component={PersonalInformation} exact={true} />
              <Route path="/successfull" component={Successfull} exact={true} />
              <Redirect to="/introduction" from="/" />
              <Route path="*" component={NotFound} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </React.Fragment >
    );
  }
}

export default AppLayout;