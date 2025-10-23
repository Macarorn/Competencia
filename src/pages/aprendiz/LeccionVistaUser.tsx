import { Link } from "react-router-dom";
import { FiArrowDownLeft } from "react-icons/fi";

const LeccionVistaUser = () => {
  const progressPercentage = (2 / 8) * 100; // 25%

  return (
    <div className="bg-white min-h-screen">
      {/* Encabezado */}
      <div className="bg-linear-to-r from-[#155dfc] to-[#193cb8] h-[245px] w-full flex flex-col md:flex-row items-start px-4 md:px-[80px]">
        <div className="h-[245px] w-full relative">
          <div className="absolute top-[28px] left-[14px] rounded-[6.75px] flex items-center gap-2">
            <FiArrowDownLeft className="ml-2 w-4 h-4 text-white" />
            <Link to="/cursos">
              <p className="text-white text-sm">Volver a Cursos</p>
            </Link>
          </div>
          <div className="absolute top-[73.5px] left-[14px]">
            <div className="flex items-center gap-2">
              <span className="bg-[rgba(255,255,255,0.2)] text-white text-xs px-2 py-1 rounded">
                Principiante
              </span>
              <span className="bg-[rgba(255,255,255,0.2)] text-white text-xs px-2 py-1 rounded">
                2 horas
              </span>
            </div>
            <h1 className="text-white text-xl md:text-2xl mt-2">
              Fundamentos de IA Responsable
            </h1>
            <p className="text-blue-100 text-xs md:text-sm mt-1">
              Aprende los principios básicos para usar IA de manera ética y
              responsable
            </p>
          </div>
          
          {/* Card de progreso mejorada */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 right-[14px] bg-[rgba(255,255,255,0.1)] rounded-xl p-5 hidden md:block border border-[rgba(255,255,255,0.2)] shadow-lg"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <h3 className="text-white text-lg font-semibold mb-3">Progreso del Curso</h3>
            
            {/* Barra de progreso */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-sm font-medium">Lecciones completadas</span>
                <span className="text-white text-sm font-bold">2/8</span>
              </div>
              <div className="w-full bg-[rgba(255,255,255,0.3)] rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-300 shadow-sm"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
            
            <p className="text-blue-100 text-sm mt-3">
              Tiempo estimado restante: 3 horas
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="mt-0 mx-auto max-w-[1092px] px-4 md:px-0">
       
        {/* Contenido del curso */}
        <div className="bg-slate-50 rounded-lg p-4 mt-4">
          <h2 className="text-lg font-semibold">Contenido del Curso</h2>
          <ul className="mt-4 space-y-4">
            <li className="bg-blue-50 border border-blue-500 rounded-lg p-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-slate-900 text-sm md:text-base">
                  1. ¿Qué es la Inteligencia Artificial?
                </p>
                <span className="text-slate-600 text-xs md:text-sm">
                  15 min
                </span>
              </div>
            </li>
            <li className="border border-gray-300 rounded-lg p-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-slate-900 text-sm md:text-base">
                  2. Tipos de IA y sus Aplicaciones
                </p>
                <span className="text-slate-600 text-xs md:text-sm">
                  20 min
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Actividad interactiva */}
        <div className="bg-blue-50 rounded-lg p-4 mt-4">
          <h3 className="text-slate-900 text-lg">Actividad Interactiva</h3>
          <p className="text-slate-600 text-xs md:text-sm mt-2">
            Esta sección contendría el contenido interactivo específico de la
            lección, como videos, ejercicios prácticos, o evaluaciones.
          </p>
          <div className="flex flex-col md:flex-row justify-between mt-4 gap-2 md:gap-0">
            <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-slate-900 text-xs md:text-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 cursor-pointer active:scale-95">
              Anterior Lección
            </button>
            <button className="bg-green-500 text-white rounded-lg px-4 py-2 text-xs md:text-sm hover:bg-green-600 transition-all duration-200 cursor-pointer active:scale-95 shadow-md hover:shadow-lg">
              Marcar como Completada
            </button>
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 text-xs md:text-sm hover:bg-blue-600 transition-all duration-200 cursor-pointer active:scale-95 shadow-md hover:shadow-lg">
              Siguiente Lección
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeccionVistaUser;