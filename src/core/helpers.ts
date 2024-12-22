import { nepalData } from "./data";
export const getDistrictsByState = (stateId: number) => {
  return nepalData.districts.filter((district) => district.stateId === stateId);
};
export const getVillagesByDistrict = (districtId: number) => {
  return nepalData.villages.filter((village) => village.districtId === districtId);
};
