import React, { Component } from 'react'
import { Button, Form, Select, Label, Field, Back } from './Elements'

export class Grade extends Component {
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
            Which class are you?
          </Label>
        </Field>
        <Field>
          <Select 
            name="grade" 
            onChange={handleChange('grade')} 
            defaultValue={values.grade}
          >
            <option value="">Select class</option>
            <option value="Preschool">Preschool</option>
            <option value="Primary One">Primary One</option>
            <option value="Primary Two">Primary Two</option>
            <option value="Primary Three">Primary Three</option>
            <option value="Primary Four">Primary Four</option>
            <option value="Primary Five">Primary Five</option>
            <option value="Primary Six">Primary Six</option>
            <option value="Primary Seven">Primary Seven</option>
          </Select>
        </Field>
        <Field>
          <Button onClick={this.continue}>Continue</Button>
        </Field>
        <Back onClick={this.back}>Back</Back>
      </Form>
    )
  }
}

export default Grade
