import React from "react";

const SignupForm = (props) => {
  const { firstName, lastName, email, password } = props.form;
  return (
    <form onSubmit={props.submit} className="form" noValidate>
      <label className="form__label" htmlFor="firstname">
        <input
          className="form__input"
          type="text"
          id="firstName"
          name="First Name"
          value={firstName}
          placeholder="First Name"
          onChange={props.change}
        />
        {props.errors.firstName ? null : (
          <span className="form__incorrect-input">
            {props.messages.firstNameIncorrect}
          </span>
        )}
      </label>

      <label className="form__label" htmlFor="lastname">
        <input
          className="form__input"
          type="text"
          id="lastName"
          name="Last name"
          value={lastName}
          placeholder="Last Name"
          onChange={props.change}
        />
        {props.errors.lastName ? null : (
          <span className="form__incorrect-input">
            {props.messages.lastNameIncorrect}
          </span>
        )}
      </label>

      <label className="form__label" htmlFor="email">
        <input
          className="form__input"
          type="email"
          id="email"
          name="Email"
          value={email}
          placeholder="Email"
          onChange={props.change}
        />
        {props.errors.email ? null : (
          <span className="form__incorrect-input">
            {props.messages.emailIncorrect}
          </span>
        )}
      </label>

      <label className="form__label" htmlFor="password">
        <input
          className="form__input"
          type="password"
          id="password"
          name="Password"
          value={password}
          placeholder="Password"
          onChange={props.change}
        />
        {props.errors.password ? null : (
          <span className="form__incorrect-input">
            {props.messages.passwordIncorrect}
          </span>
        )}
      </label>

      <button type="submit" className="button button--submit">
        Claim your free trial
      </button>
      <p className="form__text-info">
        By clicking the button, you are agreeing to our{" "}
        <a href="#" className="form__link">
          Terms and Services
        </a>
      </p>
    </form>
  );
};

export default SignupForm;
