const initialState = [
  {
    Airline: "test",
    stRout: "test",
    enRout: "test",
    stTime: "9",
    enTime: "10",
    capacity: 100,
    cost: 1000,
  },
];
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "loadFlight": {
      return payload;
    }
    default:
      return state;
  }
};
