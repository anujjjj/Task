import React, { PureComponent } from 'react';
import { Navbar } from 'react-bootstrap';
import './style.css';
import PropTypes from 'prop-types';

class CustomNavbar extends PureComponent {
  render() {
    return (
      <Navbar className="navigation">
        <Navbar.Header>
          <Navbar.Brand>
            React-Firebase
          </Navbar.Brand>

        </Navbar.Header>

      </Navbar>
    );
  }
}

CustomNavbar.propTypes = {

};

export default CustomNavbar;
