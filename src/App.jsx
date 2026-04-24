import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Login from "./pages/Login";
import JobDetails from "./pages/JobDetails";
import MyApplications from "./pages/MyApplications";


function App() {
  return (
    <Routes>

      {/* Main App Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/my-applications" element={<MyApplications />} />
      </Route>

      {/* Auth Layout (No Header/Footer) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

    </Routes>
  );
}

export default App;