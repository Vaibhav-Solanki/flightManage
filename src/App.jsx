import "./App.css";
import Home from "./routes/home";
import Navbar from "./components/navbar";
import RoutPage from "./routes/Routes";
import Flight from "./routes/Flight";
import { Route, Routes } from "react-router-dom";
function App() {
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
