import React, { Component } from 'react'
import { Button } from './Elements'

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
          <select 
            name="account" 
            onChange={handleChange('account')} 
            defaultValue={values.account}
          >
            <option value="">Select account</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <div>
          <Button onClick={this.continue}>Continue</Button>
        </div>
      </div>
    )
  }
}

export default Account
