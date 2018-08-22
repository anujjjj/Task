import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';


import './style.css';
import logo from '../../logo.svg';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';

class NavigationComponent extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.location.pathname === "/successfull") {
      return (null);
    }
    return (
      <div>
        <Nav
          className="navigation"
          bsStyle="pills"
        >
          <LinkContainer to="/introduction">
            <NavItem eventKey={1} id="tab1">
              <span className="glyphicon glyphicon-ok" ></span>
              Introduction
            </NavItem>
          </LinkContainer>

          <LinkContainer to="/personal_information" disabled={!(localStorage.getItem("info"))}>
            <NavItem eventKey={2} id="tab2" >
              <span className="glyphicon glyphicon-ok" ></span>
              Personal Information
            </NavItem>
          </LinkContainer>
        </Nav>
      </div>
    );
  }
}

NavigationComponent.propTypes = {

};

export default withRouter(NavigationComponent);

