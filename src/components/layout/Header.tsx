// components/layout/Header.tsx
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import UserDropdown from "../header/UserDropdown";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-[#0F172B] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y Nombre - Lado Izquierdo */}
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-xl font-bold">E</span>
            </div>
            <Link to="/dashboard">
              <h1 className="text-2xl font-bold transition-all duration-300 hover:from-blue-300 hover:to-purple-400">
                EthicIA
              </h1>
            </Link>
          </div>

          {/* Enlaces de Navegación - Centro */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/dashboard"
              className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              <span>Dashboard</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/cursos"
              className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              <span>Cursos</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/progreso"
              className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              <span>Mi Progreso</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Dropdown del Usuario - Lado Derecho */}
          {user && <UserDropdown user={user} onLogout={logout} />}
        </div>
      </div>
    </header>
  );
}
