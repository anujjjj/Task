import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import logo from '../../useravatar.png';
import { storageRef } from '../../firebase/firebase';
import FileUploader from 'react-firebase-file-uploader';

class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileUrl: "",
      name: "",
      description: "",
      avatar: '',
      isUploading: false,
      progress: 0,
      errors: {}
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("info")) {
      const info = JSON.parse(localStorage.getItem("info"));
      const { profileUrl, name, description } = info;
      this.setState({
        profileUrl, name, description
      });
    }
  }

  handleUploadStart = () => {
    this.setState({ isUploading: true, progress: 0 });
    let errors = this.state.errors;
    errors.profileUrl = "";
    this.setState({ errors });

  };

  handleProgress = (progress) => this.setState({ progress });

  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.error(error);
  }

  handleUploadSuccess = (filename) => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    storageRef.child(filename).getDownloadURL().then(url => this.setState({ profileUrl: url }));
  };

  onNameChange(e) {
    this.setState({ name: e.target.value });
    let errors = this.state.errors;
    errors.name = "";
    this.setState({ errors });
  }

  onDescriptionChange(e) {
    this.setState({ description: e.target.value });
    let errors = this.state.errors;
    errors.description = "";
    this.setState({ errors });
  }

  handleValidation() {
    let formIsValid = true;
    let errors = {};
    let name = this.state.name;
    let description = this.state.description;
    let profileUrl = this.state.profileUrl;

    if (!name) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (!description) {
      formIsValid = false;
      errors["description"] = "Cannot be empty";
    }
    if (!profileUrl) {
      formIsValid = false;
      errors["profileUrl"] = "Upload a photo";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.handleValidation()) {
      alert("Form has errors");
    }
    else {
      const { profileUrl, name, description } = this.state;
      const that = this;

      if (name !== "") {
        const info = {
          name,
          description,
          profileUrl
        }
        localStorage.setItem("info", JSON.stringify(info));
        this.props.history.push({
          pathname: '/personal_information',
          state: {
            info
          }
        });
      }
    }
  }


  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-offset-3 col-sm-6 col-xs-12">
            <form>
              <div className="form-group">
                <div className="col-sm-3">
                  <label >

                    <div>
                      {this.state.isUploading ?
                        <div className="loader"></div> : <img src={this.state.profileUrl ? this.state.profileUrl : logo} alt="Avatar" className="avatar" />
                      }
                    </div>
                    <FileUploader
                      hidden
                      accept="image/*"
                      name="avatar"
                      randomizeFilename
                      storageRef={storageRef}
                      onUploadStart={this.handleUploadStart}
                      onUploadError={this.handleUploadError}
                      onUploadSuccess={this.handleUploadSuccess}
                      onProgress={this.handleProgress}
                    />
                    <span className="validn " style={{ color: "red", fontWeight: "300" }} > {this.state.errors["profileUrl"]}</span>
                  </label>
                </div>



                <div class="col-sm-9">
                  <label for="name" className="form-group-label">Your Name </label>
                  <input
                    id="name"
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onNameChange}
                  />
                </div>
                <span className="validn " style={{ color: "red" }}>{this.state.errors["name"]}</span>
                <div className="clearfix"></div>
              </div>
              <div className="form-group">
                <div className="col-xs-12">
                  <label for="description" className="form-group-label">Write a short description about yourself</label>
                  <textarea rows="4" class="form-control" placeholder="May be you can write about your goals and motivations"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                  />
                </div>
                <span className="validn " style={{ color: "red" }}>{this.state.errors["description"]}</span>
                <div className="clearfix"></div>
              </div>
              <button class="btn btn-primary" onClick={this.handleSubmit}>Proceed</button>
            </form>
          </div>
        </div>
      </div >

    );
  }
}

export default Introduction;