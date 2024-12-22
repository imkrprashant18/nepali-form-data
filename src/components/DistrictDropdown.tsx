import React from "react";
import { getDistrictsByState } from "../core/helpers";

interface DistrictDropdownProps {
  stateId: number;
  onChange: (districtId: number, districtName: string) => void;
}

const DistrictDropdown: React.FC<DistrictDropdownProps> = ({
  stateId,
  onChange,
}) => {
  const districts = getDistrictsByState(stateId);

  return (
    <select
      className="w-full p-2 border rounded"
      onChange={(e) => {
        const selectedOption = e.target.selectedOptions[0];
        onChange(
          Number(selectedOption.value), // Pass district ID
          selectedOption.textContent || "" // Pass district Name
        );
      }}
      disabled={!stateId} // Disable dropdown if no state is selected
    >
      <option value="">Select District</option>
      {districts.map((district) => (
        <option key={district.id} value={district.id}>
          {district.name}
        </option>
      ))}
    </select>
  );
};

export default DistrictDropdown;
