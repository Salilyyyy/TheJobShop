import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Machines from "./Machines/Machines";
import Jobs from "./Job/Jobs";
import Solve from "./Solve/Solve";

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

  if (!localStorage.machines) {
    const initialMachineArr = [
      {
        id: 1,
        name: "Bottle Expansion Mold Machine",
      },
      {
        id: 2,
        name: "Water Cleaning Machine",
      },
      {
        id: 3,
        name: "Water Filling Machine",
      },
      {
        id: 4,
        name: "Bottle Capping Machine",
      },
      {
        id: 5,
        name: "Bottle Labeling Machine",
      },
      {
        id: 6,
        name: "Bottle Expansion Mold Machine 2",
      },
    ];
    localStorage.machines = JSON.stringify(initialMachineArr);
    console.log("Đã tạo mảng chứa các machine!");
  } else {
    console.log("Mảng chứa các machine đã có sẵn!!");
  }
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/machines" element={<Machines />} />
      <Route path="/job" element={<Jobs />} />
      <Route path="/solve" element={<Solve />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
