import React, { Component } from 'react'

export class Phone extends Component {
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
            How can we reach you?
          </label>
        </div>
        <div>
          <input type="tel" name="phone" onChange={handleChange('phone')} defaultValue={values.phone} placeholder="Phone Number" />
        </div>
        <div>
          <button onClick={this.back}>Back</button>
          <button onClick={this.continue}>Continue</button>
        </div>
      </div>
    )
  }
}

export default Phone
