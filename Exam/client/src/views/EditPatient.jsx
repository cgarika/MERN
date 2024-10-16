import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../AddPatient.css";

const EditPatient = ({ setHeaderTitle, setPatientId }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/patients/${id}`)
      .then((res) => {
        setName(res.data.name);
        setAge(res.data.age);
        setSymptoms(res.data.symptoms);
        setHeaderTitle(`Update ${res.data.name}`);
        setPatientId(res.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setPatientId]);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const symptomsHandler = (e) => {
    setSymptoms(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/patients/${id}`, {
        name,
        age,
        symptoms,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
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

        <button className="submitButton">Update Patient</button>
      </form>
    </div>
  );
};

export default EditPatient;
