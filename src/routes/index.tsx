import { Route, Routes, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { RegisterMain } from "../pages/RegisterMain";
import { RegisterPatient } from "../pages/RegisterPatient";
import { RegisterProfessional } from "../pages/RegisterProfessional";
import { RegisterSecretary } from "../pages/RegisterSecretary";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/registermain" element={<RegisterMain />} />
      <Route path="/registerpatient" element={<RegisterPatient />} />
      <Route path="/registerprofessional" element={<RegisterProfessional />} />
      <Route path="/registersecretary" element={<RegisterSecretary />} />

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
