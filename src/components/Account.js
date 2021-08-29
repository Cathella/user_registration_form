import React, { Component } from 'react'
import { Button, Form, Select, Label, Field } from './Elements'

export class Account extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props

    return (
      <Form>
        <Field>
          <Label>
            Choose User Account
          </Label>
        </Field>
        <Field>
          <Select 
            name="account" 
            onChange={handleChange('account')} 
            defaultValue={values.account}
          >
            <option value="">Select account</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </Select>
        </Field>
        <Field>
          <Button onClick={this.continue}>Continue</Button>
        </Field>
      </Form>
    )
  }
}

export default Account
