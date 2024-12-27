import React from "react";
import { getVillagesByDistrict } from "../core/helpers";

interface VillageDropdownProps {
  districtId: number;
  onChange: (villageId: number, villageName: string) => void;
}

const VillageDropdown: React.FC<VillageDropdownProps> = ({
  districtId,
  onChange,
}) => {
  const villages = getVillagesByDistrict(districtId);

  return (
    <select
      className="w-full p-2 border rounded"
      onChange={(e) => {
        const selectedOption = e.target.selectedOptions[0];
        onChange(
          Number(selectedOption.value), // Pass village ID
          selectedOption.textContent || "" // Pass village name
        );
      }}
      disabled={!districtId}
    >
      <option value="">Select Munci/Rular Munci</option>
      {villages.map((village) => (
        <option key={village.id} value={village.id}>
          {village.name}
        </option>
      ))}
    </select>
  );
};

export default VillageDropdown;
