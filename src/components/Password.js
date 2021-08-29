import React, { Component } from 'react'

export class Password extends Component {
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
            Enter your secret code
          </label>
        </div>
        <div>
          <input 
            type="password" 
            name="password" 
            onChange={handleChange('password')} 
            defaultValue={values.password} 
            placeholder="Password" 
          />
        </div>
        <div>
          <button onClick={this.back}>Back</button>
          <button onClick={this.continue}>Continue</button>
        </div>
      </div>
    )
  }
}

export default Password
