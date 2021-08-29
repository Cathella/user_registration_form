import React, { Component } from 'react'

export class Grade extends Component {
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
            Which class are you?
          </label>
        </div>
        <div>
          <select 
            name="grade" 
            onChange={handleChange('grade')} 
            defaultValue={values.grade}
          >
            <option value="">Select class</option>
            <option value="Preschool">Preschool</option>
            <option value="Primary One">Primary One</option>
            <option value="Primary Two">Primary Two</option>
            <option value="Primary Three">Primary Three</option>
            <option value="Primary Four">Primary Four</option>
            <option value="Primary Five">Primary Five</option>
            <option value="Primary Six">Primary Six</option>
            <option value="Primary Seven">Primary Seven</option>
          </select>
        </div>
        <div>
          <button onClick={this.back}>Back</button>
          <button onClick={this.continue}>Continue</button>
        </div>
      </div>
    )
  }
}

export default Grade
