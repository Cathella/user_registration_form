import React, { Component } from 'react'
import { Button, Form, Input, Label, Field, Back } from './Elements'

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
      <Form>
        <Field>
          <Label>
            What is your Nickname?
          </Label>
        </Field>
        <Field>
          <Input 
            type="text" 
            name="username" 
            onChange={handleChange('username')} 
            defaultValue={values.username} 
            placeholder="Nickname" 
          />
        </Field>
        <Field>
          <Button onClick={this.continue}>Continue</Button>
        </Field>
        <Back onClick={this.back}>Back</Back>
      </Form>
    )
  }
}

export default Username
