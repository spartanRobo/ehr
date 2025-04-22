import React, { useState, useRef } from "react";
import { Popover, Button } from "@innovaccer/design-system";
import fileUtils from "../utils/fileUtils";

const Menu = ({ onImportPatients }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOptions = useRef([
    {
      label: "Import Patients",
      onClick: () => {
        fileUtils.readJSONFile(onImportPatients);
      },
    },
    {
      label: "Export Patients",
      onClick: () =>
        fileUtils.downloadJSON(
          JSON.parse(localStorage.getItem("patientList")) || []
        ),
    },
  ]);

  return (
    <Popover
      open={isOpen}
      triggerClass="ml-3 flex-grow-0"
      position="bottom-end"
      trigger={<Button appearance="transparent" icon="more_vert" />}
      onToggle={setIsOpen}
    >
      <div className="py-2">
        {menuOptions.current.map((option) => (
          <div
            key={option.label}
            className="px-5 py-4 cursor-pointer transform-on-hover--trigger"
            onClick={() => {
              option.onClick();
              setIsOpen(false);
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
    </Popover>
  );
};

export default Menu;
