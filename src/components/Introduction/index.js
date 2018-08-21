import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import logo from '../../useravatar.png';

class Introduction extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-4 col-xs-4">
            <form>
              <div className="form-row">
                <div className="col-sm-3" >
                  <img src={logo} alt="Avatar" className="avatar" />
                </div>
                <div class="col-sm-9">
                  <label for="name" className="form-group-label">Your Name </label>
                  <input type="text" className="form-control" id="name" />
                </div>

                <div className="clearfix"></div>
                <div className="horizontal-line"></div>
              </div>
              <div className="form-row">
                <label for="description" className="form-group-label">Write a short description about yourself</label>
                <textarea rows="4" class="form-control" placeholder="May be you can write about your goals and motivations" />
              </div>

              <button class="btn btn-primary">Proceed</button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}



export default Introduction;