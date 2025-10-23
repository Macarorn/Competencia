// App.tsx
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "./components/route/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import AppLayout from "./layout/AppLayout";

// Pages
import LandingPageUser from "./pages/LandingPageUser";
import NotFound from "./pages/NotFound";
import { ChatPage } from "./pages/aprendiz/ChatPage";
import { CoursesPage } from "./pages/aprendiz/CoursesPage";
import DashboardUser from "./pages/aprendiz/DashboardPage";
import LoginUser from "./pages/auth/LoginUser";
import RegisterUser from "./pages/auth/RegisterUser";
import LeccionVistaUser from "./pages/aprendiz/LeccionVistaUser";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Rutas Públicas */}
          <Route path="/" element={<LandingPageUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/register" element={<RegisterUser />} />

          {/* Rutas Protegidas con Layout */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <DashboardUser />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/cursos"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <CoursesPage />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/lecciones"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <LeccionVistaUser />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/progreso"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <ChatPage />
                </AppLayout>
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
