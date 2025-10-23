import { FiArrowRight, FiAlertCircle } from "react-icons/fi";
import { BiTrendingDown, BiBrain } from "react-icons/bi";

export default function LandingPage() {
  return (
    <div
      className="bg-white relative w-full h-full animate-fade-in"
      data-name="Landing Page / User"
      style={{
        animation: "fadeIn 0.8s ease-in"
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-in;
        }
        
        .btn-hover {
          transition: all 0.3s ease;
        }
        
        .btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
        
        .btn-hover:active {
          transform: translateY(0);
        }
        
        .card-fade {
          animation: fadeIn 0.8s ease-in;
          animation-fill-mode: both;
        }
        
        .card-fade:nth-child(1) {
          animation-delay: 0.2s;
        }
        
        .card-fade:nth-child(2) {
          animation-delay: 0.4s;
        }
        
        .card-fade:nth-child(3) {
          animation-delay: 0.6s;
        }
        
        .hero-title {
          animation: fadeIn 1s ease-in;
          animation-delay: 0.1s;
          animation-fill-mode: both;
        }
        
        .hero-subtitle {
          animation: fadeIn 1s ease-in;
          animation-delay: 0.3s;
          animation-fill-mode: both;
        }
        
        .hero-button {
          animation: fadeIn 1s ease-in;
          animation-delay: 0.5s;
          animation-fill-mode: both;
        }
      `}</style>
      
      <div className="w-full h-auto flex flex-col items-center">
        <div className="w-full px-4 md:px-16 lg:px-32 py-12 md:py-16 lg:py-20 bg-linear-to-r from-blue-100 to-purple-100">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500 hero-title">
            Ethic-IA
          </h1>
          <p className="text-center text-sm md:text-base lg:text-lg text-slate-600 mt-4 hero-subtitle">
            Transformando el uso de la inteligencia artificial en herramienta de
            aprendizaje autónomo para jóvenes rurales del Cauca
          </p>
          <div className="flex justify-center mt-6 hero-button">
            <a href="/login">
              <button className="bg-blue-500 text-white rounded-lg px-6 py-2 flex items-center btn-hover">
                Empecemos
                <FiArrowRight className="ml-2 w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
        
        <div className="w-full px-4 md:px-16 lg:px-32 py-8">
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">
            Una Realidad que Necesita Cambiar
          </h2>
          <p className="text-center text-sm md:text-base lg:text-lg text-slate-600 mt-4">
            Los jóvenes en zonas rurales enfrentan desafíos únicos en la era de
            la IA
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16 lg:px-32 pb-8">
          <div className="bg-white border border-red-300 rounded-lg p-4 card-fade">
            <div className="flex items-center justify-center bg-red-100 rounded-full w-12 h-12">
              <FiAlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-red-600 text-lg font-semibold mt-4">
              Dependencia Tecnológica
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Uso sin acompañamiento pedagógico genera dependencia en sin
              reflexión crítica.
            </p>
          </div>
          
          <div className="bg-white border border-orange-300 rounded-lg p-4 card-fade">
            <div className="flex items-center justify-center bg-orange-100 rounded-full w-12 h-12">
              <BiTrendingDown className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-orange-600 text-lg font-semibold mt-4">
              Bajo Rendimiento
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Los resultados académicos se ven afectados por la falta de
              análisis.
            </p>
          </div>
          
          <div className="bg-white border border-yellow-300 rounded-lg p-4 card-fade">
            <div className="flex items-center justify-center bg-yellow-100 rounded-full w-12 h-12">
              <BiBrain className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-yellow-600 text-lg font-semibold mt-4">
              Pensamiento Limitado
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Falta de desarrollo del pensamiento crítico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}