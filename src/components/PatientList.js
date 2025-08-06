import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Divider,
  Heading,
  Input,
  Pills,
  Text,
} from "@innovaccer/design-system";

import AddPatient from "./AddPatient";
import Menu from "./Menu";
import uuid from "../utils/uuid";

const PatientList = () => {
  const [patientList, setPatientList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setPatientList(JSON.parse(localStorage.getItem("patientList")) || []);
  }, []);

  const handleAddPatient = (patient) => {
    const updatedPatientList = JSON.parse(localStorage.getItem("patientList"));
    updatedPatientList.push({ ...patient, id: uuid() });
    localStorage.setItem("patientList", JSON.stringify(updatedPatientList));
  };

  const handleRemovePatient = (id) => {
    setPatientList((prevPatientList) => {
      const updatedPatientList = prevPatientList.filter(
        (patient) => patient.id !== id
      );
      localStorage.setItem("patientList", JSON.stringify(updatedPatientList));
      return updatedPatientList;
    });
  };

  const handleSearchPatient = ({ target: { value } }) => {
    setSearchValue(value);
    const listToSearch = JSON.parse(localStorage.getItem("patientList")) || [];
    setPatientList(
      listToSearch.filter((patient) =>
        patient.name.toLowerCase().includes(value.trim().toLowerCase())
      )
    );
  };

  const handleSelectPatient = (id) => {
    const childWindow = window.open(
      `${window.location.href}?id=${id}`,
      "_blank"
    );
    childWindow.document.title = "Practice Fusion";
  };

  const handleImportPatients = (importedPatientList) => {
    setPatientList((prevPatientList) => {
      const existingPatientMap = prevPatientList.reduce(
        (res, patient) => ({
          ...res,
          [`${patient.name}_${patient.dob}`]: true,
        }),
        {}
      );

      const patientsToAdd = importedPatientList
        .filter((patient) => {
          return !existingPatientMap[`${patient.name}_${patient.dob}`];
        })
        .map((patient) => ({
          ...patient,
          id: uuid(),
        }));

      const updatedPatientList = [...prevPatientList, ...patientsToAdd];
      localStorage.setItem("patientList", JSON.stringify(updatedPatientList));
      return updatedPatientList;
    });
  };

  return (
    <div
      className="p-7 bg-secondary-lightest vh-100"
      style={{ overflow: "hidden" }}
    >
      <div className="d-flex align-items-center justify-content-between">
        <Input
          width={240}
          className="mr-4"
          placeholder="Search for a patient"
          value={searchValue}
          onChange={handleSearchPatient}
        />
        <AddPatient onAddPatient={handleAddPatient} />
        <Menu onImportPatients={handleImportPatients} />
      </div>
      <div className="mt-7 d-flex align-items-center">
        <Heading className="mr-4">Patient List</Heading>
        <Pills>{patientList.length}</Pills>
      </div>
      <Card
        className="mt-4 overflow-auto"
        style={{ maxHeight: "calc(100vh - 152px)" }}
      >
        {patientList.length ? (
          patientList.map((patient, index) => (
            <div key={patient.id}>
              <div
                className="d-flex px-6 py-5 transform-on-hover--trigger"
                onClick={() => handleSelectPatient(patient.id)}
              >
                <div className="flex-fill d-flex flex-column">
                  <Text
                    size="large"
                    weight="medium"
                    className="transform-on-hover--element text-transfrom-capitalize"
                  >
                    {patient.name}
                  </Text>
                  <Text
                    size="small"
                    weight="strong"
                    appearance="subtle"
                  >{`DOB: ${patient.dob}`}</Text>
                </div>
                <Button
                  appearance="transparent"
                  size="tiny"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleRemovePatient(patient.id);
                  }}
                >
                  Remove
                </Button>
              </div>
              {index !== patientList.length - 1 && <Divider />}
            </div>
          ))
        ) : (
          <div className="p-6 d-flex justify-content-center">
            <Heading size="s">No such patient exist!</Heading>
          </div>
        )}
      </Card>
    </div>
  );
};

export default PatientList;
