import './index.css'

import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    secondName: '',
    onBlurFirstName: false,
    onBlurSecondName: false,
    registration: true,
  }

  onBlurFirstNameTr = event => {
    if (event.target.value === '') {
      this.setState({onBlurFirstName: true})
    } else {
      this.setState({onBlurFirstName: false})
    }
  }

  onBlurSecondNameTr = event => {
    if (event.target.value === '') {
      this.setState({onBlurSecondName: true})
    } else {
      this.setState({onBlurSecondName: false})
    }
  }

  firstNameChange = event => {
    this.setState({firstName: event.target.value})
  }

  secondNameChange = event => {
    this.setState({secondName: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, secondName} = this.state
    if (firstName === '' && secondName === '') {
      this.setState({
        onBlurFirstName: true,
        onBlurSecondName: true,
      })
    } else if (firstName === '') {
      this.setState({onBlurFirstName: true, onBlurSecondName: false})
    } else if (secondName === '') {
      this.setState({onBlurSecondName: true, onBlurFirstName: false})
    } else {
      this.setState({
        onBlurFirstName: false,
        onBlurSecondName: false,
        registration: false,
      })
    }
  }

  submitAnotherResponse = () => {
    this.setState({
      registration: true,
      firstName: '',
      secondName: '',
    })
  }

  registrationFail = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="btn-another-response"
        onClick={this.submitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  registrationSuccess = () => {
    const {
      firstName,
      secondName,
      onBlurFirstName,
      onBlurSecondName,
    } = this.state

    return (
      <form className="form" onSubmit={this.submitForm}>
        <label htmlFor="first-name">FIRST NAME</label>
        <input
          type="text"
          id="first-name"
          className="user-input"
          placeholder="First name"
          onBlur={this.onBlurFirstNameTr}
          value={firstName}
          onChange={this.firstNameChange}
        />
        {onBlurFirstName ? <p className="error-msg">Required</p> : ''}
        <label htmlFor="second-name">LAST NAME</label>
        <input
          type="text"
          id="second-name"
          className="user-input"
          placeholder="Second name"
          onBlur={this.onBlurSecondNameTr}
          value={secondName}
          onChange={this.secondNameChange}
        />
        {onBlurSecondName ? <p className="error-msg">Required</p> : ''}
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {registration} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="registration-container">
          {registration ? this.registrationSuccess() : this.registrationFail()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
