import { createStore, combineReducers } from "redux";
import Flight from "./Flight/Flight";
import Routes from "./Routes/Routes";

const rootReducer = combineReducers({
  roots: Routes,
  flight: Flight,
});
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
