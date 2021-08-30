import React, { Component } from 'react'
import { Button, Form, Input, Label, Field, Back } from './Elements'

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
      <Form>
        <Field>
          <Label>
            What is your name?
          </Label>
        </Field>
        <Field>
          <Input 
            type="text" 
            name="name" 
            onChange={handleChange('name')} 
            defaultValue={values.name}
            autoComplete="off"
            required
          />
          <label for="name" className="label-name">
            <span className="content-name">Full Name</span>
          </label>
        </Field>
        <Field>
          <Button onClick={this.continue}>Continue</Button>
        </Field>
        <Back onClick={this.back}>Back</Back>
      </Form>
    )
  }
}

export default Name
