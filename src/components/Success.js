import React, { Component } from 'react'

export class Success extends Component {
  render() {

    return (
      <div>
        <div>
          <h3>
            Success!
          </h3>
        </div>
        <div>
          <p>
            Thank you for creating an account. Please click the link below to login.
          </p>
        </div>
        <div>
          <button>Login</button>
        </div>
      </div>
    )
  }
}

export default Success
