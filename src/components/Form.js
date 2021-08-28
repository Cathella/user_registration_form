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
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    switch(step) {
      case 1:
        return <Account />
      case 2:
        return <Name />
      case 3:
        return <Phone />
      case 4:
        return <Grade />
      case 5:
        return <Username />
      case 6:
        return <Password />
      case 7:
        return <Confirm />
      case 8:
        return <Success />
    }
  }
}

export default Form
