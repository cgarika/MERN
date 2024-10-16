import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../PatientDetails.css";

const PatientDetails = ({ setHeaderTitle }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patient, setPatient] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/patients/${id}`)
      .then((res) => {
        setPatient(res.data);
        setHeaderTitle(`${res.data.name} Details`);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setHeaderTitle]);

  const dischargePatient = () => {
    axios
      .delete(`http://localhost:8000/api/patients/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/add-patient");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="patient-details-container">
      <div className="patient-details-card">
        <h2>{patient.age} years of age.</h2>
        <h3>Symptoms</h3>
        <p>{patient.symptoms}</p>
        <button className="submitButton" onClick={dischargePatient}>
          Discharge Patient
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
