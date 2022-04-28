const initialState = [];
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "loadFlight": {
      return payload;
    }
    default:
      return state;
  }
};
