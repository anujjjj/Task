import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import logo from '../../useravatar.png';


class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileUrl: "",
      name: "",
      description: ""
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { profileUrl, name, description } = this.state;
    const that = this;

    if (name !== "") {
      const info = {
        name,
        description,
        profileUrl
      }
      this.props.history.push({
        pathname: '/personal_information',
        state: {
          info
        }
      });
    }
  }

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
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    onChange={this.onNameChange}
                  />
                </div>

                <div className="clearfix"></div>
                <div className="horizontal-line"></div>
              </div>
              <div className="form-row">
                <label for="description" className="form-group-label">Write a short description about yourself</label>
                <textarea rows="4" class="form-control" placeholder="May be you can write about your goals and motivations"
                  onChange={this.onDescriptionChange}
                />
              </div>

              <button className="btn btn-primary" onClick={this.handleSubmit}>Proceed</button>
              <div ></div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default Introduction;