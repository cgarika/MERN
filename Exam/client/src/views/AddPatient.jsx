import { useEffect, useState } from "react";
import axios from "axios";
import "../AddPatient.css";

const AddPatient = ({ setHeaderTitle }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setHeaderTitle("Add Patient");
  }, [setHeaderTitle]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/patients", {
        name,
        age,
        symptoms,
      })
      .then((res) => {
        setName("");
        setAge("");
        setSymptoms("");
        setErrors({});
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const symptomsHandler = (e) => {
    setSymptoms(e.target.value);
  };

  return (
    <div className="add-patient-container">
      <form className="form" onSubmit={submitHandler}>
        <label htmlFor="age" className="label">
          Age
        </label>
        <input
          type="number"
          className="age-input"
          id="age"
          value={age}
          onChange={ageHandler}
        />
        {errors.age && <p className="errors">{errors.age.message}</p>}
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          type="text"
          className="name-input"
          id="name"
          value={name}
          onChange={nameHandler}
        />
        {errors.name && <p className="errors">{errors.name.message}</p>}
        <label htmlFor="symptoms" className="label">
          Symptoms
        </label>
        <input
          type="text"
          className="input"
          id="symptoms"
          value={symptoms}
          onChange={symptomsHandler}
        />
        {errors.symptoms && <p className="errors">{errors.symptoms.message}</p>}
        <button className="submitButton">Admit</button>
      </form>
    </div>
  );
};

export default AddPatient;
