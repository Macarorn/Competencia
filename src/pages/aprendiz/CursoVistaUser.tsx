import { Link } from "react-router-dom";

const CursoVistaUser = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Encabezado */}
      <div className="bg-linear-to-r from-[#155dfc] to-[#193cb8] h-[245px] w-full flex flex-col md:flex-row items-start px-4 md:px-[80px]">
        <div className="h-[245px] w-full relative">
          <div className="absolute top-[28px] left-[14px] rounded-[6.75px] flex items-center gap-2">
            <img
              src="http://localhost:3845/assets/192723a39fe6d144208df8a2dcd8cc5ae59bc185.svg"
              alt="Volver"
              className="w-4 h-4"
            />
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
          <div className="absolute top-[73.5px] right-[14px] bg-[rgba(255,255,255,0.1)] rounded-lg p-4 hidden md:block">
            <h3 className="text-white text-lg">Progreso del Curso</h3>
            <p className="text-white text-sm">Lecciones completadas: 2/8</p>
            <p className="text-white text-sm">
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
            <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-slate-900 text-xs md:text-sm">
              Anterior Lección
            </button>
            <button className="bg-green-500 text-white rounded-lg px-4 py-2 text-xs md:text-sm">
              Marcar como Completada
            </button>
            <button className="bg-blue-500 text-white rounded-lg px-4 py-2 text-xs md:text-sm">
              Siguiente Lección
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursoVistaUser;
