import React, { Component } from 'react'

export class Account extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props

    return (
      <div>
        <div>
          <label>
            Choose User Account
          </label>
        </div>
        <div>
          <select name="account" onChange={handleChange('account')} defaultValue={values.account}>
            <option value="">Select account</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div>
          <button onClick={this.continue}>Continue</button>
        </div>
      </div>
    )
  }
}

export default Account
