import React, { Component } from 'react'
import Account from './Account'
import Confirm from './Confirm'
import Grade from './Grade'
import Name from './Name'
import Phone from './Phone'
import Username from './Username'
import Password from './Password'
import Success from './Success'

export class Form extends Component {

  state = {
    step: 1,
    account: "",
    name: "",
    phone: "",
    grade: "",
    username: "",
    password: ""
  }

  // Next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // Previous Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  // Handle input change
  handleChange = input => e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  render() {

    const { step, account, name, phone, grade, username, password } = this.state;
    const values = { account, name, grade, username, phone, password };

    switch(step) {
      case 1:
        return(
          <Account 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return(
          <Name 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return(
          <Phone 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 4:
        return(
          <Grade 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 5:
        return(
          <Username 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 6:
        return(
          <Password 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 7:
        return(
          <Confirm 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        )
      case 8:
        return <Success />
    }
  }
}

export default Form
