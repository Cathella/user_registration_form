import React, { Component } from 'react'

export class Name extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props

    return (
      <div>
        <div>
          <label>
            What is your name?
          </label>
        </div>
        <div>
          <input type="text" name="name" onChange={handleChange('name')} defaultValue={values.name} placeholder="Full Name" />
        </div>
        <div>
          <button onClick={this.back}>Back</button>
          <button onClick={this.continue}>Continue</button>
        </div>
      </div>
    )
  }
}

export default Name
