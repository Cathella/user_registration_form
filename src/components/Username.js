import React, { Component } from 'react'

export class Username extends Component {
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
            What is your Nickname?
          </label>
        </div>
        <div>
          <input 
            type="text" 
            name="username" 
            onChange={handleChange('username')} 
            defaultValue={values.username} 
            placeholder="Nickname" 
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

export default Username
