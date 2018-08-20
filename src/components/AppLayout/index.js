import React, { Component } from 'react';
import Navbar from '../Navbar';

import './style.css';
import NavigationComponent from '../NavigationComponent';
import Introduction from '../Introduction';
import PersonalInformation from '../PersonalInformation';

class AppLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <NavigationComponent />

        <Introduction />
        <PersonalInformation />
      </React.Fragment >
    );
  }
}

export default AppLayout;