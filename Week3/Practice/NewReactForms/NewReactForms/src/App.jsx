import React, { useState } from "react";
import "./App.css";
import UserListDisplay from "./components/UserListDisplay";

const App = () => {
  const [userList, setUserList] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formValidations()) {
      return;
    }

    setUserList([...userList, `${name}, ${age}, ${country}`]);

    setName("");
    setAge("");
    setCountry("");
    setErrorMessage("");
  };

  const formValidations = () => {
    if (name.length < 5) {
      setErrorMessage("Please enter at least 5 characters for the name.");
      return false;
    }

    return true;
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <label htmlFor="Name" className="Labels">
          Name:
          <input
            type="text"
            className="inputboxes"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </label>
        <label htmlFor="age" className="Labels">
          Age:
          <input
            type="number"
            className="inputboxes"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label htmlFor="country" className="Labels">
          Country:
          <input
            type="text"
            className="inputboxes"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </div>
      <UserListDisplay list={userList} />
    </form>
  );
};

export default App;
