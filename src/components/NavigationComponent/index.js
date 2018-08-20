import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import './style.css';
import logo from '../../logo.svg';

import PropTypes from 'prop-types';

class NavigationComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey: 1
    };
  }


  handleSelect(selectedKey) {
    this.setState({ activeKey: selectedKey });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <Nav
          className="navigation"
          bsStyle="pills"
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect} >
          <NavItem eventKey={1} componentClass={Link} href="/introduction" to="/introduction">
            <span className="glyphicon glyphicon-ok" ></span>
            Introduction
          </NavItem>

          <NavItem eventKey={2} title="Item" componentClass={Link} href="/personal_information" to="/personal_information">
            <span className="glyphicon glyphicon-ok" ></span>
            Personal Information
          </NavItem>
        </Nav>
      </div>
    );
  }
}

NavigationComponent.propTypes = {

};

export default NavigationComponent;