import React, { Component } from "react";
import "./style.css";

const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let isNoEmpty = true;

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      age: "",
      gender: "",
      billingAddress: ""
    };
  }
  handleOnchange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem("userData", JSON.stringify(this.state));
    this.props.history.push('/checkout')
  };
  handleOnBlur = event => {
    const { name, email, phone, url } = this.state;
    switch (event.target.name) {
      case "name":
        this.setState({ isNameValid: this.validateName(name) });
        break;
      case "email":
        this.setState({ isEmailValid: this.validateEmailAddress(email) });
        break;
      case "phone":
        this.setState({ isPhoneValid: this.validatePhone(phone) });
        break;
      case "url":
        this.setState({ isUrlValid: this.validateurl(url) });
        break;
      default:
        break;
    }
  };
  validateEmailAddress(email) {
    isNoEmpty = !!email.trim();
    return isNoEmpty && emailValidator.test(email);
  }

  validateName(name) {
    isNoEmpty = !!name.trim();
    return isNoEmpty;
  }
  showPassword = () => {
    const x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  render() {
    const { name, email, password, age, billingAddress } = this.state;
    return (
      <div className="row">
        <h1 className="registration">Registration</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleOnchange}
            onBlur={this.handleOnBlur}
            size="30"
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            value={email}
            name="email"
            onChange={this.handleOnchange}
            onBlur={this.handleOnBlur}
            size="30"
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              id="password"
              type="password"
              value={password}
              name="password"
              onChange={this.handleOnchange}
              onBlur={this.handleOnBlur}
              size="30"
              minLength="8"
              required
            />
            <div className="checkboxContainer">
              <div>Show Password</div>
              <input
                className="checkbox"
                type="checkBox"
                onClick={this.showPassword}
              />
            </div>
          </div>
          <label htmlFor="age">Age</label>
          <br />
          <input
            type="number"
            value={age}
            name="age"
            onChange={this.handleOnchange}
            onBlur={this.handleOnBlur}
            min="18"
            required
          />
          <br />
          <label htmlFor="gender">Gender</label>
          <br />
          <select name="gender" onChange={this.handleOnchange}>
            <option value="male">Male</option>
            <option value="female">female</option>
          </select>
          <br />
          <label htmlFor="billingAddress">Billing/delivery Address</label>
          <br />
          <textarea
            value={billingAddress}
            name="billingAddress"
            onChange={this.handleOnchange}
            rows="4"
            cols="50"
            required
          />
          <input className="registerButton" type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

Registration.propTypes = {};

export default Registration;
