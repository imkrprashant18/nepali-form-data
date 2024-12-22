interface State {
  id: number;
  name: string;
}
interface District {
  id: number;
  name: string;
  stateId: number;
}

interface Village {
  id: number;
  name: string;
  districtId: number;
}


interface NepalData {
  states: State[];
  districts: District[];
  villages: Village[];
}


export const nepalData: NepalData = {
  states: [
    { id: 1, name: "Koshi" },
    { id: 2, name: "Madhesh" },
    { id: 3, name: "Bagmati" },
    { id: 4, name: "Gandaki" },
    { id: 5, name: "Lumbini" },
    { id: 6, name: "Karnali" },
    { id: 7, name: "Sudurpashchim" },
  ],
  districts: [
    { "id": 1, "name": "Bhojpur", "stateId": 1 },
    { "id": 2, "name": "Dhankuta", "stateId": 1 },
    { "id": 3, "name": "Ilam", "stateId": 1 },
    { "id": 4, "name": "Jhapa", "stateId": 1 },
    { "id": 5, "name": "Khotang", "stateId": 1 },
    { "id": 6, "name": "Morang", "stateId": 1 },
    { "id": 7, "name": "Okhaldhunga", "stateId": 1 },
    { "id": 8, "name": "Panchthar", "stateId": 1 },
    { "id": 9, "name": "Sankhuwasabha", "stateId": 1 },
    { "id": 10, "name": "Solukhumbu", "stateId": 1 },
    { "id": 11, "name": "Sunsari", "stateId": 1 },
    { "id": 12, "name": "Taplejung", "stateId": 1 },
    { "id": 13, "name": "Tehrathum", "stateId": 1 },
    { "id": 14, "name": "Udayapur", "stateId": 1 },
    { "id": 15, "name": "Bara", "stateId": 2 },
    { "id": 16, "name": "Dhanusha", "stateId": 2 },
    { "id": 17, "name": "Mahottari", "stateId": 2 },
    { "id": 18, "name": "Parsa", "stateId": 2 },
    { "id": 19, "name": "Rautahat", "stateId": 2 },
    { "id": 20, "name": "Saptari", "stateId": 2 },
    { "id": 21, "name": "Sarlahi", "stateId": 2 },
    { "id": 22, "name": "Siraha", "stateId": 2 },
    { "id": 23, "name": "Kathmandu", "stateId": 3 },
    { "id": 24, "name": "Lalitpur", "stateId": 3 },
    { "id": 25, "name": "Bhaktapur", "stateId": 3 },
    { "id": 26, "name": "Chitwan", "stateId": 3 },
    { "id": 27, "name": "Rasuwa", "stateId": 3 },
    { "id": 28, "name": "Ramechhap", "stateId": 3 },
    { "id": 29, "name": "Kavre", "stateId": 3 },
    { "id": 30, "name": "Makhwanpur", "stateId": 3 },
    { "id": 31, "name": "Dhading", "stateId": 3 },
    { "id": 32, "name": "Nuwakot", "stateId": 3 },
    { "id": 33, "name": "Sindhupalchoke", "stateId": 3 },
    { "id": 34, "name": "Dolakha", "stateId": 3 },
    { "id": 35, "name": "Sindhuli", "stateId": 3 },
    { "id": 36, "name": "Baglung", "stateId": 4 },
    { "id": 37, "name": "Gorkha", "stateId": 4 },
    { "id": 38, "name": "Kaski", "stateId": 4 },
    { "id": 39, "name": "Lamjung", "stateId": 4 },
    { "id": 40, "name": "Manang", "stateId": 4 },
    { "id": 41, "name": "Mustang", "stateId": 4 },
    { "id": 42, "name": "Myagdi", "stateId": 4 },
    { "id": 43, "name": "Nawalparasi East ", "stateId": 4 },
    { "id": 44, "name": "Parbat", "stateId": 4 },
    { "id": 45, "name": "Syangja", "stateId": 4 },
    { "id": 46, "name": "Tanahun", "stateId": 4 },
    { "id": 47, "name": "Arghakhanchi", "stateId": 5 },
    { "id": 48, "name": "Banke", "stateId": 5 },
    { "id": 49, "name": "Bardiya", "stateId": 5 },
    { "id": 50, "name": "Dang", "stateId": 5 },
    { "id": 51, "name": "Eastern Rukum", "stateId": 5 },
    { "id": 52, "name": "Gulmi", "stateId": 5 },
    { "id": 53, "name": "Kapilvastu", "stateId": 5 },
    { "id": 54, "name": "Parasi", "stateId": 5 },
    { "id": 55, "name": "Palpa", "stateId": 5 },
    { "id": 56, "name": "Pyuthan", "stateId": 5 },
    { "id": 57, "name": "Rolpa", "stateId": 5 },
    { "id": 58, "name": "Rupandehi", "stateId": 5 },
    { "id": 59, "name": "Western Rukum", "stateId": 6 },
    { "id": 60, "name": "Salyan", "stateId": 6 },
    { "id": 61, "name": "Dolpa", "stateId": 6 },
    { "id": 62, "name": "Humla", "stateId": 6 },
    { "id": 63, "name": "Jumla", "stateId": 6 },
    { "id": 64, "name": "Kalikot", "stateId": 6 },
    { "id": 65, "name": "Mugu", "stateId": 6 },
    { "id": 66, "name": "Surkhet", "stateId": 6 },
    { "id": 67, "name": "Dailekh", "stateId": 6 },
    { "id": 68, "name": "Jajarkot", "stateId": 6 },
    { "id": 69, "name": "Achham", "stateId": 7 },
    { "id": 70, "name": "Baitadi", "stateId": 7 },
    { "id": 71, "name": "Bajhang", "stateId": 7 },
    { "id": 72, "name": "Bajura", "stateId": 7 },
    { "id": 73, "name": "Dadeldhura", "stateId": 7 },
    { "id": 74, "name": "Darchula", "stateId": 7 },
    { "id": 75, "name": "Doti", "stateId": 7 },
    { "id": 76, "name": "Kailali", "stateId": 7 },
    {"id":77, "name":"Kanchanpur District", "stateId":7}
  ],

  villages: [
    { id: 1, name: "Taplejung Municipality", districtId: 1 },
    { id: 2, name: "Phungling Municipality", districtId: 1 },
    { id: 3, name: "Chainpur", districtId: 2 },
  ],
};
