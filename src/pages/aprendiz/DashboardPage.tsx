import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ChatIaUser from "../ChatIaUser";

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white relative min-h-screen">
      <main className="max-w-[1248px] mx-auto p-4">
        <section className="bg-linear-to-r from-[#eff6ff] to-[#faf5ff] border-2 border-[#bedbff] rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Buen día, {user?.email || "Usuario"}! 👋
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Análisis de tu equilibrio entre uso de IA y pensamiento
            independiente
          </p>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <p className="text-sm font-medium text-yellow-700 bg-yellow-50 border-2 border-yellow-300 rounded-lg px-2 py-1 inline-block">
                Dependencia Moderada
              </p>
              <p className="text-xl font-bold text-gray-900 mb-4 mt-2">65/100</p>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Balance saludable, pero hay espacio para mejora
              </p>
            </div>
          </div>
          <ul className="mt-4 text-sm text-gray-600 list-disc pl-5">
            <li>Alterna entre usar IA y métodos tradicionales</li>
            <li>Cuestiona las respuestas de IA regularmente</li>
            <li>Desarrolla tus propias estrategias de verificación</li>
          </ul>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Próximos Cursos</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Mejorar Prompts</p>
                  <p className="text-xs text-gray-500">
                    Practica crear prompts más específicos y efectivos
                  </p>
                </div>
                <Link to="/cursos">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                    Comenzar
                  </button>
                </Link>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Caso de Estudio: Sesgos</p>
                  <p className="text-xs text-gray-500">
                    Analiza un caso real de sesgo en IA
                  </p>
                </div>
                <Link to="/cursos">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                    Comenzar
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">
              Tu Perfil de Aprendizaje
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-green-600">
                <strong>Áreas Fuertes:</strong> Conceptos Básicos, Verificación
                de Información
              </p>
              <p className="text-sm text-orange-600">
                <strong>Oportunidades de Mejora:</strong> Prompts Efectivos,
                Análisis Crítico
              </p>
            </div>
          </div>
        </section>
      </main>

      <ChatIaUser />
    </div>
  );
};

export default DashboardPage;
