import React, { Component } from 'react';
import './style.css';

class PersonalInformation extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-4 col-xs-4">

            <form>
              <div className="form-group">
                <label for="state" className="form-group-label">State</label>
                <input type="text" class="form-control" id="state" />
              </div>
              <div className="clearfix"></div>
              <div className="horizontal-line"></div>

              <div className="form-group">

                <label for="state" className="form-group-label">Age</label>
                <input type="number" class="form-control" id="age" />
              </div>
              <div className="clearfix"></div>
              <div className="horizontal-line"></div>

              <div className="form-group">
                <label className="form-group-label">Ethnicity</label>
                <div className="row"></div>
                <div className="form-row">

                  <div className="col-xs-6 ">
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" for="ethnicityRadio1">
                        <input className="form-check-input" type="radio" name="ethnicityRadio" id="ethnicityRadio1" value="Hispanic or Latino" />Hispanic or Latino
                          </label>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" for="ethnicityRadio2">
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

                  <div className="col-xs-3">

                    <div className="form-check form-check-inline form-check-input">
                      <label className="form-check-label" for="raceRadio1">
                        <input className="form-check-input" type="radio" name="raceRadioOptions" id="raceRadio1" value="option1" />
                        American Indian</label>
                    </div>
                  </div>
                  <div className="col-xs-3">
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" for="raceRadio2">
                        <input className="form-check-input" type="radio" name="raceRadioOptions" id="raceRadio2" value="option2" />
                        Asian</label>
                    </div>
                  </div>
                  <div className="col-xs-3">
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" for="raceRadio3">
                        <input className="form-check-input" type="radio" name="raceRadioOptions" id="raceRadio3" value="option3" />
                        Native Hawaiian or Other Pacific Islander</label>
                    </div>
                  </div>

                  <div className="col-xs-2">
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" for="raceRadio4">
                        <input className="form-check-input" type="radio" name="raceRadioOptions" id="raceRadio4" value="option3" />
                        Black or African American</label>
                    </div>
                  </div>

                  <div className="col-xs-2">
                    <div className="form-check form-check-inline">
                      <label className="form-check-label" for="raceRadio5">
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

                  <div className="col-xs-6">

                    <div className="form-check form-check-inline">
                      <label className="form-check-label" for="sexRadio1">
                        <input className="form-check-input" type="radio" name="sexRadioOptions" id="sexRadio1" value="Male" />
                        Male</label>
                    </div>
                  </div>

                  <div className="col-xs-6">

                    <div className="form-check form-check-inline">
                      <label className="form-check-label" for="sexRadio2">
                        <input className="form-check-input" type="radio" name="sexRadioOptions" id="sexRadio2" value="Female" />
                        Female</label>
                    </div>
                  </div>

                </div>
              </div>

              <div className="clearfix"></div>
              <div className="horizontal-line"></div>

              <div className="form-group">
                <label for="state" className="form-group-label">Height</label>
                <input type="number" className="form-control" id="height" placeholder="in-inches" />
              </div>
              <div className="clearfix"></div>
              <div className="horizontal-line"></div>
              <div className="form-group">

                <label for="state" className="form-group-label">Weight</label>
                <input type="number" className="form-control" id="weight" placeholder="in-pounds" />
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>

            </form>

          </div>
        </div>
      </div>

    );
  }
}

export default PersonalInformation;