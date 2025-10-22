// pages/auth/LoginUser.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../utils/supabase";
import { useAuth } from "../../context/AuthContext";

export default function LoginUser() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        setError(error.message);
      } else if (data.user) {
        setError("");
        
        // Actualizar el contexto con los datos del usuario
        const userData = {
          name: data.user.user_metadata?.name || data.user.email?.split('@')[0] || "Usuario",
          email: data.user.email || "",
          image: data.user.user_metadata?.avatar_url,
        };
        
        login(userData);
        navigate("/dashboard");
      }
    } catch {
      setError("Error inesperado");
    }
  };

  return (
    <div className="bg-white relative w-full h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="bg-white border border-gray-300 rounded-lg p-6 w-96"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-4">Inicia Sesión</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Correo Electrónico
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
}