import React, { Component } from 'react'
import { Button, Form, Input, Label, Field, Back } from './Elements'

export class Phone extends Component {
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
            How can we reach you?
          </Label>
        </Field>
        <Field>
          <Input 
            type="tel" 
            name="phone" 
            onChange={handleChange('phone')} 
            defaultValue={values.phone} 
            autoComplete="off"
            required
          />
          <label for="phone" className="label-name">
            <span className="content-name">Phone Number</span>
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

export default Phone
