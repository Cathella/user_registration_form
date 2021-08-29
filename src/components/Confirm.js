import React, { Component } from 'react'

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();

    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values: {account, name, phone, grade, username, password} } = this.props

    return (
      <div>
        <div>
          <label>
            Confirm User details
          </label>
        </div>
        <div>
          <p>
            <strong>Account:</strong> {account}
          </p>
          <p>
            <strong>Full Name:</strong> {name}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Class:</strong> {grade}
          </p>
          <p>
            <strong>Username:</strong> {username}
          </p>
        </div>
        <div>
          <button onClick={this.back}>Back</button>
          <button onClick={this.continue}>Confirm</button>
        </div>
      </div>
    )
  }
}

export default Confirm
