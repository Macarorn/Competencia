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
          {/* Card: Próximos Cursos */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-5">
              <h3 className="text-lg font-semibold">Próximos Cursos</h3>
            </div>
            
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors duration-300">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Mejorar Prompts</p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Practica crear prompts más específicos y efectivos
                      </p>
                    </div>
                    <Link to="/cursos">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap cursor-pointer">
                        Comenzar
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors duration-300">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900 mb-1">Caso de Estudio: Sesgos</p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Analiza un caso real de sesgo en IA
                      </p>
                    </div>
                    <Link to="/cursos">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap cursor-pointer">
                        Comenzar
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card: Tu Perfil de Aprendizaje */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-5">
              <h3 className="text-lg font-semibold">Tu Perfil de Aprendizaje</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-green-700 mb-1">Áreas Fuertes</p>
                    <p className="text-sm text-green-600">
                      Conceptos Básicos, Verificación de Información
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-orange-700 mb-1">Oportunidades de Mejora</p>
                    <p className="text-sm text-orange-600">
                      Prompts Efectivos, Análisis Crítico
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ChatIaUser />
    </div>
  );
};

export default DashboardPage;