import React, { Component } from 'react'
import { Button, Form, Label, Field, Back } from './Elements'

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
      <Form>
        <Field>
          <Label>
            Confirm User details
          </Label>
        </Field>
        <Field>
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
        </Field>
        <Field>
          <Button onClick={this.continue}>Continue</Button>
        </Field>
        <Back onClick={this.back}>Back</Back>
      </Form>
    )
  }
}

export default Confirm
