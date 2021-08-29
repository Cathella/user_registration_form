import React, { Component } from 'react'
import { Button, Form, Input, Label, Field, Back } from './Elements'

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
      <Form>
        <Field>
          <Label>
            Enter your secret code
          </Label>
        </Field>
        <Field>
          <Input 
            type="password" 
            name="password" 
            onChange={handleChange('password')} 
            defaultValue={values.password} 
            placeholder="Password" 
          />
        </Field>
        <Field>
          <Button onClick={this.continue}>Continue</Button>
        </Field>
        <Field>
          <Back onClick={this.back}>Back</Back>
        </Field>
      </Form>
    )
  }
}

export default Password
