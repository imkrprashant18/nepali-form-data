import React from "react";
import { nepalData } from "../core/data";

interface StateDropdownProps {
  onChange: (stateId: number, stateName: string) => void;
}

const StateDropdown: React.FC<StateDropdownProps> = ({ onChange }) => {
  return (
    <select
      className="w-full p-2 border rounded"
      onChange={(e) => {
        const selectedOption = e.target.selectedOptions[0];
        onChange(
          Number(selectedOption.value), // Pass state ID
          selectedOption.textContent || "" // Pass state name
        );
      }}
    >
      <option value="">Select State</option>
      {nepalData.states.map((state) => (
        <option key={state.id} value={state.id}>
          {state.name}
        </option>
      ))}
    </select>
  );
};

export default StateDropdown;
