import React, { useEffect, useState } from "react";
import { Button, Popover, Input, Label } from "@innovaccer/design-system";

const AddPatient = ({ onAddPatient }) => {
  const [values, setValues] = useState({ name: "", dob: "" });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setValues({ name: "", dob: "" });
  }, [isOpen]);

  const handleInputChange = ({ target: { name, value } }) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const isFormEmpty = () => {
    return Object.values(values).some((value) => !value);
  };

  return (
    <Popover
      triggerClass="flex-grow-0"
      position="bottom-end"
      open={isOpen}
      onToggle={setIsOpen}
      trigger={<Button>Add Patient</Button>}
    >
      <div className="px-6 py-5">
        <div>
          <Label>Patient name</Label>
          <Input
            placeholder="Patient name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-5">
          <Label>Patient DOB</Label>
          <Input
            placeholder="Patient DOB"
            name="dob"
            value={values.dob}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-100 d-flex justify-content-end">
          <Button
            appearance="primary"
            className="mt-5"
            disabled={isFormEmpty()}
            onClick={() => {
              onAddPatient(values);
              setIsOpen(false);
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </Popover>
  );
};

export default AddPatient;
