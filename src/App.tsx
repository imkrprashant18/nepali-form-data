import { useState } from "react";
import { StateDropdown, DistrictDropdown, VillageDropdown } from "./index";

const App = () => {
  const [state, setState] = useState<{ id: number; name: string } | null>(null);
  const [district, setDistrict] = useState<{ id: number; name: string } | null>(
    null
  );
  const [village, setVillage] = useState<{ id: number; name: string } | null>(
    null
  );
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state) {
      setError("Please select a state.");
      return;
    }
    if (!district) {
      setError("Please select a district.");
      return;
    }
    if (!village) {
      setError("Please select a village.");
      return;
    }

    setError(""); // Clear error if all validations pass
    console.log("Selected Location:", {
      state: state.name,
      district: district.name,
      village: village.name,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <h2 className="text-lg font-semibold">Select Your Location</h2>
      {error && <p className="text-red-500">{error}</p>}

      <StateDropdown
        onChange={(id, name) => {
          setState({ id, name });
          setDistrict(null); // Reset district and village when state changes
          setVillage(null);
        }}
      />

      <DistrictDropdown
        stateId={state?.id ?? 0}
        onChange={(id, name) => {
          setDistrict({ id, name });
          setVillage(null); // Reset village when district changes
        }}
      />

      <VillageDropdown
        districtId={district?.id ?? 0}
        onChange={(id, name) => setVillage({ id, name })}
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-300"
        disabled={!state || !district || !village}
      >
        Submit
      </button>
    </form>
  );
};

export default App;
