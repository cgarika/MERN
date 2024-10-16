import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Home.css";

const Home = ({ setHeaderTitle }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setHeaderTitle("Hospital Manager");

    axios
      .get("http://localhost:8000/api/patients")
      .then((res) => {
        setPatients(res.data);
      })
      .catch((err) => console.log(err));
  }, [setHeaderTitle]);

  return (
    <div className="patient-container">
      {patients.map((patient) => (
        <div key={patient.id} className="patient-card">
          <p className="patient-name">{patient.name}</p>
          <button className="edit-button">
            <Link to={`/patients/edit/${patient._id}`}>Edit</Link>
          </button>
          <p>Age: {patient.age}</p>
          <p>{patient.symptoms}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
