import React, { Component } from "react";
import "./App.css";
import SignupForm from "./SignupForm";
import SubscribeButton from "./SubscirbeButton";

class App extends Component {
  state = {
    isFormSubmited: false,
    isFormCorrect: false,
    isSubscribed: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",

    errors: {
      correct: false,
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    },
  };

  messages = {
    firstNameIncorrect: "First name cannot be empty",
    lastNameIncorrect: "Last name cannot be empty",
    emailIncorrect: "Email cannot be empty and must got an '@' ",
    passwordIncorrect: "Password cannot be empty",
  };
  validateForm = () => {
    // ok - true , there is error - false
    let firstName = false;
    let lastName = false;
    let email = false;
    let password = false;

    let correct = false;

    if (this.state.firstName !== "") {
      firstName = true;
    }

    if (this.state.lastName !== "") {
      lastName = true;
    }

    if (this.state.email !== "" || this.state.email.indexOf("@") !== -1) {
      email = true;
    }

    if (this.state.password !== "") {
      password = true;
    }

    if (firstName && lastName && email && password) {
      correct = true;
      this.setState({
        isFormCorrect: true,
        errors: {
          correct: true,
          firstName: true,
          lastName: true,
          email: true,
          password: true,
        },
      });
    }

    return correct, firstName, lastName, email, password;
  };
  handleChange = (e) => {
    const name = e.target.id;

    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleIsSubscribed = () => {
    console.log("klik");
    this.setState({
      isSubscribed: true,
    });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.isFormCorrect) {
      this.setState({
        isFormSubmited: true,
      });
      alert(
        "Welcome aboard! Check your email box to activate your account and start learning"
      );
    } else {
      this.validateForm();
    }
  };

  render() {
    return (
      <div className="App">
        <div className="text-container">
          <h1 className="text-container__heading">
            Learn how to code by watching others
          </h1>
          <p className="text-container__text">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div className="form-container">
          <SubscribeButton isSubscribed={this.handleIsSubscribed} />
          <SignupForm
            form={this.state}
            errors={this.state.errors}
            change={this.handleChange}
            submit={this.handleSubmitForm}
            messages={this.messages}
          />
        </div>
      </div>
    );
  }
}

export default App;
