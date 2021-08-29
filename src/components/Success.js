import React, { Component } from 'react'
import { Button, Form, Label, Field, Back } from './Elements'

export class Success extends Component {
  render() {

    return (
      <Form>
        <Field>
          <Label>
            Success!
          </Label>
        </Field>
        <Field>
          <p>
            Thank you for creating an account. Please click the link below to login.
          </p>
        </Field>
        <Field>
          <Button>Login</Button>
        </Field>
      </Form>
    )
  }
}

export default Success
