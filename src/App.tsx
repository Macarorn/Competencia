import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import DashboardUser from "./pages/DashboardUser";
import LandingPageUser from "./pages/LandingPageUser";
import LoginUser from "./pages/LoginUser";
import RegisterUser from "./pages/RegisterUser";
import ChatIaUser from "./pages/ChatIaUser";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isAuthenticated", String(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageUser />} />
        <Route
          path="/login"
          element={<LoginUser setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/register" element={<RegisterUser />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <DashboardUser />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/chat"
          element={
            isAuthenticated ? (
              <ChatIaUser />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
