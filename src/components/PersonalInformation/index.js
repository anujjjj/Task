import React, { Component } from 'react';
import './style.css';

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
      weight: ""
    }

    this.onStateChange = this.onStateChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onHeightChange = this.onHeightChange.bind(this);
    this.onWeightChange = this.onWeightChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  onStateChange(e) {
    this.setState({ state: e.target.value });
  }

  onAgeChange(e) {
    this.setState({ age: e.target.value });
  }

  onHeightChange(e) {
    this.setState({ height: e.target.value });
  }

  onWeightChange(e) {
    this.setState({ weight: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">

            <form>
              <div className="form-group col-xs-6">
                <label for="state" className="form-group-label">State</label>

                <input type="text" class="form-control" id="state"
                  onChange={this.onStateChange}
                />
              </div>
              <div className="clearfix"></div>
              <div className="horizontal-line"></div>

              <div className="form-group col-xs-6">

                <label for="age" className="form-group-label">Age</label>
                <input type="number" className="form-control" id="age"
                  onChange={this.onAgeChange}
                />
              </div>
              <div className="clearfix"></div>
              <div className="horizontal-line"></div>

              <div className="form-group">
                <label className="form-group-label">Ethnicity</label>
                <div className="row"></div>
                <div className="form-row">
                  <div className="col-xs-6 ">
                    <div className="form-check form-check-inline">
                      <label className="radio-inline" for="ethnicityRadio1">
                        <input className="form-check-input" type="radio" name="ethnicityRadio" id="ethnicityRadio1" value="Hispanic or Latino" />Hispanic or Latino
                          </label>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-check form-check-inline">
                      <label className="radio-inline" for="ethnicityRadio2">
                        <input className="form-check-input" type="radio" name="ethnicityRadio" id="ethnicityRadio" value="Non-Hispanic or Non-Latino" />Non-Hispanic or Non-Latino
                        </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="clearfix"></div>
              <div className="horizontal-line"></div>

              <div className="form-group">
                <label className="form-group-label">Race</label>
                <div className="row"></div>
                <div className="form-row">

                  <div className="col-sm-2">

                    <div className="form-check form-check-inline form-check-input">
                      <label className="radio-inline" for="raceRadio1">
                        <input className="form-check-input" type="radio" name="raceRadioOptions" id="raceRadio1" value="option1" />
                        American Indian</label>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="form-check form-check-inline">
                      <label className="radio-inline" for="raceRadio2">
                        <input className="form-check-input" type="radio" name="raceRadioOptions" id="raceRadio2" value="option2" />
                        Asian</label>
                    </div>
                  </div>
                  <div className="col-sm-2">
                    <div className="form-check form-check-inline">
                      <label className="radio-inline" for="raceRadio3">
                        <input className="form-check-input" type="radio" name="raceRadioOptions" id="raceRadio3" value="option3" />
                        Native Hawaiian or Other Pacific Islander</label>
                    </div>
                  </div>

                  <div className="col-sm-2">
                    <div className="form-check form-check-inline">
                      <label className="radio-inline" for="raceRadio4">
                        <input className="form-check-input" type="radio" name="raceRadioOptions" id="raceRadio4" value="option3" />
                        Black or African American</label>
                    </div>
                  </div>

                  <div className="col-sm-2">
                    <div className="form-check form-check-inline">
                      <label className="radio-inline" for="raceRadio5">
                        <input className="form-check-input" type="radio" name="raceRadioOptions" id="raceRadio5" value="option3" />
                        White</label>
                    </div>
                  </div>

                </div>
              </div>

              <div className="clearfix"></div>
              <div className="horizontal-line"></div>

              <div className="form-group">
                <label className="form-group-label">Sex</label>
                <div className="row"></div>
                <div className="form-row">

                  <div className="col-sm-6">

                    <div className="form-check form-check-inline">
                      <label className="form-check-label" for="sexRadio1">
                        <input className="form-check-input" type="radio" name="sexRadioOptions" id="sexRadio1" value="Male" />
                        Male</label>
                      <span class="checkmark"></span>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" for="sexRadio2">
                        <input className="form-check-input" type="radio" name="sexRadioOptions" id="sexRadio2" value="Female" />
                        Female</label>
                      <span class="checkmark"></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="clearfix"></div>
              <div className="horizontal-line"></div>

              <div class="form-group">
                <div class="col-sm-6">
                  <label for="input-type">Account Type *:</label>
                  <div id="input-type" class="row">
                    <div class="col-sm-2">
                      <label class="radio-inline">
                        <input name="account_type" id="input-type-student" value="Student" type="radio" />Student
                      </label>
                    </div>
                    <div class="col-sm-2">
                      <label class="radio-inline">
                        <input name="account_type" id="input-type-tutor" value="Tutor" type="radio" />Tutor
                      </label>
                    </div>
                    <div class="col-sm-2">
                      <label class="radio-inline">
                        <input name="account_type" id="input-type-tutor" value="Tutor" type="radio" />Tutor
                      </label>
                    </div>
                    <div class="col-sm-2">
                      <label class="radio-inline">
                        <input name="account_type" id="input-type-tutor" value="Tutor" type="radio" />Tutor
                      </label>
                    </div>
                    <div class="col-sm-2">
                      <label class="radio-inline">
                        <input name="account_type" id="input-type-tutor" value="Tutor" type="radio" />Tutor
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="horizontal-line"></div>

              <div className="form-group col-xs-6">
                <label className="form-group-label">Height</label>
                <input type="number" className="form-control" id="height" placeholder="in-inches"
                  onChange={this.onHeightChange}
                />
              </div>
              <div className="clearfix"></div>
              <div className="horizontal-line"></div>
              <div className="form-group col-xs-6">
                <label for="state" className="form-group-label">Weight</label>
                <input type="number" className="form-control" id="weight" placeholder="in-pounds"
                  onChange={this.onWeightChange}
                />
              </div>

              <div className="clearfix"></div>
              <div className="row">
                <button className="btn btn-primary">Proceed</button>
              </div>

            </form>

          </div>
        </div>
      </div >

    );
  }
}

export default PersonalInformation;