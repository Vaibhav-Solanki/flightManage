const initialState = [];
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "loadRoutes": {
      return payload;
    }
    default:
      return state;
  }
};
