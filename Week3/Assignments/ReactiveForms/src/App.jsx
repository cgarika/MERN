import React, { useState } from "react";
import "./App.css";
import ListDisplay from "./components/ListDisplay";

const App = () => {
  // State variables to manage form inputs and errors
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // State variables to manage error messages
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmPasswordError] = useState("");

  // State variable to track form submission status
  const [submitted, setSubmitted] = useState(false);

  // State variable to store the list of submitted users
  const [userList, setUserList] = useState([]);

  // Function to validate the first name input
  const validateFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length <= 2) {
      setFirstNameError("First name needs to be more than 2 characters.");
    } else {
      setFirstNameError("");
    }
  };

  // Function to validate the last name input
  const validateLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length <= 2) {
      setLastNameError("Last name needs to be more than 2 characters.");
    } else {
      setLastNameError("");
    }
  };

  // Function to validate the email input
  const validateEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length <= 2) {
      setEmailError("Email name needs to be more than 8 characters.");
    } else {
      setEmailError("");
    }
  };

  // Function to validate the password input
  const validatePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password needs to be at least 8 characters long.");
    } else {
      setPasswordError("");
    }
  };

  // Function to validate the confirm password input
  const validateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Confirm Password does not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  // Function to reset all form fields and errors
  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };

  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    // Check if there are any validation errors
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      passwordError ||
      confirmError
    ) {
      return; // Do not submit if there are validation errors
    }

    // Add the user to the user list
    setUserList([...userList, `${firstName} ${lastName} (${email})`]);
    setSubmitted(true); // Mark the form as submitted
    handleReset(); // Reset the form fields
  };

  return (
    <form onSubmit={submitHandler}>
      {submitted ? (
        <h2>Thank you for submitting the form</h2> // Show this message if the form is submitted
      ) : (
        <h2>Welcome, please submit the form</h2> // Show this message if the form is not submitted
      )}
      <div className="container">
        {/* First Name input field */}
        <div className="fname">
          <label htmlFor="FirstName" className="labels">
            First Name
            <input
              type="text"
              value={firstName}
              className="textboxes"
              onChange={validateFirstName}
            />
            {firstNameError && <p className="error">{firstNameError}</p>}
          </label>
        </div>

        {/* Last Name input field */}
        <div className="lname">
          <label htmlFor="LastName" className="labels">
            Last Name
            <input
              type="text"
              value={lastName}
              className="textboxes"
              onChange={validateLastName}
            />
            {lastNameError && <p className="error">{lastNameError}</p>}
          </label>
        </div>

        {/* Email input field */}
        <div className="Email">
          <label htmlFor="Email" className="labels">
            Email
            <input
              type="email"
              value={email}
              className="textboxes"
              onChange={validateEmail}
            />
            {emailError && <p className="error">{emailError}</p>}
          </label>
        </div>

        {/* Password input field */}
        <div className="password">
          <label htmlFor="password" className="labels">
            Password
            <input
              type="password"
              value={password}
              className="textboxes"
              onChange={validatePassword}
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </label>
        </div>

        {/* Confirm Password input field */}
        <div className="confirmPassword">
          <label htmlFor="confirmPassword" className="labels">
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              className="textboxes"
              onChange={validateConfirmPassword}
            />
            {confirmError && <p className="error">{confirmError}</p>}
          </label>
        </div>

        {/* Buttons for form submission and reset */}
        <div className="buttons">
          <button type="submit" className="submit">
            SUBMIT
          </button>
          <button type="button" className="reset" onClick={handleReset}>
            RESET
          </button>
        </div>
      </div>

      {/* Component to display the list of submitted users */}
      <ListDisplay list={userList} />
    </form>
  );
};

export default App;
