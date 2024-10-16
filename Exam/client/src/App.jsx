import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddPatient from "./views/AddPatient";
import Home from "./views/Home";
import EditPatient from "./views/EditPatient";
import PatientDetails from "./views/PatientDetails";
import "./App.css";

const App = () => {
  const [headerTitle, setHeaderTitle] = useState("Hospital Manager");
  const [patientId, setPatientId] = useState(null); // New state for patient ID

  return (
    <BrowserRouter>
      <div className="header-wrapper">
        <div className="header-content">
          <Link to="/home">
            <button
              className="home-button"
              onClick={() => setHeaderTitle("Hospital Manager")}
            >
              Home
            </button>
          </Link>

          <h1 className="header">{headerTitle}</h1>

          {headerTitle === "Hospital Manager" && (
            <Link to="/add-patient">
              <button
                className="admit-button"
                onClick={() => setHeaderTitle("Add Patient")}
              >
                Admit
              </button>
            </Link>
          )}

          {headerTitle.startsWith("Update") && patientId && (
            <Link to={`/patients/details/${patientId}`}>
              <button
                className="details-button"
                onClick={() => setHeaderTitle(`${headerTitle} Details`)}
              >
                Details
              </button>
            </Link>
          )}

          {headerTitle.endsWith("Details") && patientId && (
            <Link to={`/patients/edit/${patientId}`}>
              <button
                className="details-button"
                onClick={() => setHeaderTitle(`Update Patient`)}
              >
                Update
              </button>
            </Link>
          )}
        </div>
      </div>

      <Routes>
        <Route
          path="/add-patient"
          element={<AddPatient setHeaderTitle={setHeaderTitle} />}
        />
        <Route
          path="/home"
          element={<Home setHeaderTitle={setHeaderTitle} />}
        />
        <Route
          path="/patients/edit/:id"
          element={
            <EditPatient
              setHeaderTitle={setHeaderTitle}
              setPatientId={setPatientId}
            />
          }
        />
        <Route
          path="/patients/details/:id"
          element={<PatientDetails setHeaderTitle={setHeaderTitle} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
