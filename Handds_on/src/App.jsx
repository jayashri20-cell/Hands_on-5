import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";

import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import ApplicationForm from "./pages/ApplicationForm";
import Applications from "./pages/Applications";
import Interviews from "./pages/Interviews";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* Default Page */}
          <Route
            path="/"
            element={<Navigate to="/login" />}
          />

          {/* Authentication Pages */}
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/registration"
            element={<Registration />}
          />

          {/* Main Application Layout */}
          <Route element={<Layout />}>

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

            {/* Job Pages */}
            <Route
              path="/jobs"
              element={<Jobs />}
            />

            <Route
              path="/jobs/:id"
              element={<JobDetails />}
            />

            {/* Application Form */}
            <Route
              path="/jobs/:id/apply"
              element={<ApplicationForm />}
            />

            {/* Application Tracking */}
            <Route
              path="/applications"
              element={<Applications />}
            />

            {/* Interview Schedule */}
            <Route
              path="/interviews"
              element={<Interviews />}
            />

            {/* Notifications */}
            <Route
              path="/notifications"
              element={<Notifications />}
            />

          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;