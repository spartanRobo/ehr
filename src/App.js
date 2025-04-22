import React, { useEffect, useState } from "react";
import PatientList from "./components/PatientList";
import PatientProfile from "./components/PatientProfile";
import "./styles.css";

export default function App() {
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectedPatientId = params.get("id");
    const patientList = JSON.parse(localStorage.getItem("patientList")) || [];
    setSelectedPatient(
      patientList.find((patient) => patient.id == selectedPatientId) || null
    );
  }, []);

  if (selectedPatient) {
    return <PatientProfile selectedPatient={selectedPatient} />;
  }

  return <PatientList />;
}
