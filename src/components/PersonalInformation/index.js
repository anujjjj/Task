import React, { Component } from 'react';
import './style.css';
import { createUser } from '../../firebase/firebase';

class PersonalInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: "",
      age: "",
      ethnicity: "",
      race: "",
      sex: "",
      height: "",
      weight: "",
      info: props.location.state ? props.location.state.info ? props.location.state.info : null : null
    }

    this.onStateChange = this.onStateChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onHeightChange = this.onHeightChange.bind(this);
    this.onWeightChange = this.onWeightChange.bind(this);
    this.onEthnicityChange = this.onEthnicityChange.bind(this);
    this.onRaceChange = this.onRaceChange.bind(this);
    this.onSexChange = this.onSexChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.state.info === null) {
      if (localStorage.getItem("info")) {
        const info = JSON.parse(localStorage.getItem("info"));
        this.setState({ info });
      }
      else {
        this.props.history.goBack();
      }
    }
  }

  onStateChange(e) {
    this.setState({ state: e.target.value });
  }

  onAgeChange(e) {
    this.setState({ age: e.target.value });
  }

  onEthnicityChange(e) {
    this.setState({ ethnicity: e.target.value });
  }

  onHeightChange(e) {
    this.setState({ height: e.target.value });
  }

  onWeightChange(e) {
    this.setState({ weight: e.target.value });
  }

  onSexChange(e) {
    this.setState({ sex: e.target.value });
  }

  onRaceChange(e) {
    this.setState({ race: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { state, age, ethnicity, race, sex, height, weight, info } = this.state;
    const { name, description, profileUrl } = info;

    const user = {
      name,
      description,
      profileUrl,
      state,
      age,
      ethnicity,
      race,
      sex,
      height,
      weight
    }
    console.log("info ", info);

    createUser(user)
      .then((data) => {
        console.log(data);
        console.log("Data submitted");
        this.props.history.replace({
          pathname: '/successfull',
        });
      })
      .catch(function (error) {
        console.log(error);
      });


  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-offset-2 col-sm-8 col-xs-12">

            <form>
              <div className="form-group">
                <div className="col-sm-6 col-xs-12">
                  <label for="state" className="form-group-label">State</label>
                  <input type="text" class="form-control" id="state"
                    onChange={this.onStateChange}
                  />
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="horizontal-line"></div>

              <div className="form-group">
                <div className="col-sm-6 col-xs-12" >
                  <label for="age" className="form-group-label">Age</label>
                  <input type="number" className="form-control" id="age"
                    onChange={this.onAgeChange}
                  />
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="horizontal-line"></div>

              <div className="form-group row no-margin">
                <div className="col-xs-12">
                  <label className="form-group-label">Ethnicity</label>
                </div>
                <div className="col-xs-12">
                  <div className="row override">
                    <div className="col-sm-3 col-xs-12">
                      <div className="form-check form-check-inline">
                        <label className="radio-inline" for="ethnicityRadio1">
                          <input className="form-check-input" type="radio" name="ethnicityRadio" id="ethnicityRadio1" value="Hispanic or Latino"
                            checked={this.state.ethnicity === "Hispanic or Latino"}
                            onChange={this.onEthnicityChange}
                          />
                          Hispanic or Latino
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="form-check form-check-inline">
                        <label className="radio-inline" for="ethnicityRadio2">
                          <input className="form-check-input" type="radio" name="ethnicityRadio" id="ethnicityRadio" value="Non-Hispanic or Non-Latino"
                            checked={this.state.ethnicity === "Non-Hispanic or Non-Latino"}
                            onChange={this.onEthnicityChange}
                          />Non-Hispanic or Non-Latino
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="clearfix"></div>
              <div className="horizontal-line"></div>

              <div className="form-group row no-margin">
                <div className="col-xs-12">
                  <label className="form-group-label">Race</label>
                </div>
                <div className="col-xs-12">
                  <div className="row override" >
                    <div className="col-sm-3 col-xs-12">
                      <div className="form-check form-check-inline">
                        <label className="radio-inline" for="raceRadio1">
                          <input className="form-check-input" type="radio" name="raceRadioOptions" id="raceRadio1" value="American Indian"
                            checked={this.state.race === "American Indian"}
                            onChange={this.onRaceChange}
                          />
                          American Indian</label>
                      </div>
                    </div>
                    <div className="col-sm-2 col-xs-12">
                      <div className="form-check form-check-inline">
                        <label className="radio-inline" for="raceRadio2">
                          <input className="form-check-input" type="radio" name="raceRadioOptions" id="raceRadio2" value="Asian"
                            checked={this.state.race === "Asian"}
                            onChange={this.onRaceChange}
                          />
                          Asian</label>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-12 override-sm3">
                      <div className="form-check form-check-inline">
                        <label className="radio-inline" for="raceRadio3">
                          <input className="form-check-input" type="radio" name="raceRadioOptions" id="raceRadio3" value="Native Hawaiian or Other Pacific Islander"
                            checked={this.state.race === "Native Hawaiian or Other Pacific Islander"}
                            onChange={this.onRaceChange}
                          />
                          Native Hawaiian or Other Pacific Islander</label>
                      </div>
                    </div>

                    <div className="col-sm-3 col-xs-12 override-sm3">
                      <div className="form-check form-check-inline">
                        <label className="radio-inline" for="raceRadio4">
                          <input className="form-check-input" type="radio" name="raceRadioOptions" id="raceRadio4" value="Black or African American"
                            checked={this.state.race === "Black or African American"}
                            onChange={this.onRaceChange}
                          />
                          Black or African American</label>
                      </div>
                    </div>

                    <div className="col-sm-2 col-xs-12 override-sm3">
                      <div className="form-check form-check-inline">
                        <label className="radio-inline" for="raceRadio5">
                          <input className="form-check-input" type="radio" name="raceRadioOptions" id="raceRadio5" value="White"
                            checked={this.state.race === "White"}
                            onChange={this.onRaceChange}
                          />
                          White</label>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="clearfix"></div>
              <div className="horizontal-line"></div>

              <div className="form-group row no-margin">
                <div className="col-xs-12">
                  <label className="form-group-label">Sex</label>
                </div>
                <div className="col-xs-12">
                  <div className="row override">
                    <div className="col-sm-3 col-xs-12">
                      <div className="form-check form-check-inline">
                        <label className="radio-inline" for="sexRadio1">
                          <input className="form-check-input" type="radio" name="sexRadioOptions" id="sexRadio1" value="Male"
                            checked={this.state.sex === "Male"}
                            onChange={this.onSexChange}
                          />
                          Male</label>
                        <span class="checkmark"></span>
                      </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                      <div className="form-check form-check-inline">
                        <label className="radio-inline" for="sexRadio2">
                          <input className="form-check-input" type="radio" name="sexRadioOptions" id="sexRadio2" value="Female"
                            checked={this.state.sex === "Female"}
                            onChange={this.onSexChange}
                          />
                          Female</label>
                        <span class="checkmark"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="horizontal-line"></div>

              <div className="col-sm-6 col-xs-12">
                <label className="form-group-label">Height</label>
                <input type="number" className="form-control" id="height" placeholder="in-inches"
                  onChange={this.onHeightChange}
                />
              </div>
              <div className="clearfix"></div>
              <div className="horizontal-line"></div>
              <div className="col-sm-6 col-xs-12">
                <label for="state" className="form-group-label">Weight</label>
                <input type="number" className="form-control" id="weight" placeholder="in-pounds"
                  onChange={this.onWeightChange}
                />
              </div>

              <div className="clearfix"></div>
              <div className="row">
                <button className="btn btn-primary" onClick={this.handleSubmit}>Proceed</button>
              </div>

            </form>

          </div>
        </div >
      </div >

    );
  }
}

export default PersonalInformation;