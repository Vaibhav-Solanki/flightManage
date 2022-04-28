import "./App.css";
import Home from "./routes/home";
import Navbar from "./components/navbar";
import RoutPage from "./routes/Routes";
import Flight from "./routes/Flight";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    FetchDta();
  }, []);
  const FetchDta = async () => {
    try {
      let resRout = await axios.get("https://jsmasai.herokuapp.com/routes");
      dispatch({ type: "loadRoutes", payload: resRout.data });
      let resFlight = await axios.get("https://jsmasai.herokuapp.com/flight");
      dispatch({ type: "loadFlight", payload: resFlight.data });
    } catch (error) {}
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routes" element={<RoutPage />} />
        <Route path="/flight" element={<Flight />} />
      </Routes>
    </>
  );
}
export default App;
