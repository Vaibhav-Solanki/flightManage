const initialState = [
  { place: "Indore", _id: "fghkjkgi" },
  { place: "Indore", _id: "fghkjkgi" },
  { place: "Indore", _id: "fghkjkgi" },
  { place: "Indore", _id: "fghkjkgi" },
];
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "loadRoutes": {
      return payload;
    }
    default:
      return state;
  }
};
