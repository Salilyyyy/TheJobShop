import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Machines from "./Machines/Machines";

function App() {
  if (!localStorage.userArr) {
    console.log("Khong co userArr");
    const userArr = [
      { id: "001", pass: "1234", isAdmin: false },
      { id: "002", pass: "1234", isAdmin: false },
      { id: "admin1", pass: "1234", isAdmin: true },
    ];
    localStorage.userArr = JSON.stringify(userArr);
  } else {
    console.log("Da co userArr");
  }
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/machines" element={<Machines />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
