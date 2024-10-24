import {Component} from 'react'
import './index.css'

class Form extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    isSuccess: false,
    nameErrorMsg: '',
    emailErrorMsg: '',
    messageErrorMsg: '',
  }

  updateName = event => this.setState({name: event.target.value})
  updateEmail = event => this.setState({email: event.target.value})
  updateMessage = event => this.setState({message: event.target.value})

  onSubmitForm = event => {
    event.preventDefault()
    const {name, email, message} = this.state
    let nameErrorMsg = ''
    let emailErrorMsg = ''
    let messageErrorMsg = ''
    if (name === '') {
      nameErrorMsg = 'Name Field is Empty'
    }
    if (email === '') {
      emailErrorMsg = 'Email Field is Empty'
    }
    if (message === '') {
      messageErrorMsg = 'Message Field is Empty'
    }
    if (nameErrorMsg || emailErrorMsg || messageErrorMsg) {
      this.setState({nameErrorMsg, emailErrorMsg, messageErrorMsg})
    } else {
      this.setState(prevState => ({
        isSuccess: !prevState.isSuccess,
        nameErrorMsg: '',
        emailErrorMsg: '',
        messageErrorMsg: '',
      }))
    }
  }

  addButton = event => {
    event.preventDefault()
    this.setState(prevState => ({
      isSuccess: !prevState.isSuccess,
      name: '',
      email: '',
      message: '',
    }))
  }

  renderNameField = () => {
    const {name, nameErrorMsg} = this.state
    return (
      <div className="input-container">
        <label htmlFor="name" className="input-label">
          NAME
        </label>
        <input
          type="text"
          value={name}
          className="input-field"
          id="name"
          placeholder="Enter Your Name"
          onChange={this.updateName}
        />
        {nameErrorMsg && <p className="error-msg">{nameErrorMsg}</p>}
      </div>
    )
  }

  renderEmailField = () => {
    const {email, emailErrorMsg} = this.state
    return (
      <div className="input-container">
        <label htmlFor="email" className="input-label">
          EMAIL
        </label>
        <input
          type="email"
          value={email}
          className="input-field"
          id="email"
          placeholder="Enter Your Email"
          onChange={this.updateEmail}
        />
        {emailErrorMsg && <p className="error-msg">{emailErrorMsg}</p>}
      </div>
    )
  }

  renderMessageField = () => {
    const {message, messageErrorMsg} = this.state
    return (
      <div className="input-container">
        <label htmlFor="message" className="input-label">
          MESSAGE
        </label>
        <textarea
          className="input-textarea"
          id="message"
          value={message}
          rows="4"
          cols="50"
          placeholder="Write your message here"
          onChange={this.updateMessage}
        ></textarea>
        {messageErrorMsg && <p className="error-msg">{messageErrorMsg}</p>}
      </div>
    )
  }

  render() {
    const {isSuccess} = this.state
    return (
      <div className="app-container">
        <div className="app-card">
          {isSuccess ? (
            <div>
              <h1 className="success-message">Message Successful</h1>
              <button onClick={this.addButton} className="button">
                Add Again
              </button>
            </div>
          ) : (
            <form className="form" onSubmit={this.onSubmitForm}>
              {this.renderNameField()}
              {this.renderEmailField()}
              {this.renderMessageField()}
              <button type="submit" className="button">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default Form































































