import { Link } from "react-router-dom";

const imgIcon =
  "http://localhost:3845/assets/287c1555428a9edd7c883491bd29f21320414920.svg";
const imgIcon1 =
  "http://localhost:3845/assets/ec5bb1ab570338847b2f52a955f63370d1552292.svg";
const imgIcon2 =
  "http://localhost:3845/assets/8b998cb37c05e5eb766bd49751f6f45f99c4863a.svg";
const imgIcon3 =
  "http://localhost:3845/assets/9d7ec5c8cddb4335b1e699d43242d616b6660be1.svg";

export default function   () {
  return (
    <div
      className="bg-white relative w-full h-full"
      data-name="Landing Page / User"
    >
      <div className="w-full h-auto flex flex-col items-center">
        <div className="w-full px-4 md:px-16 lg:px-32 py-8 bg-linear-to-r from-blue-100 to-purple-100">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">
            Ethic-IA
          </h1>
          <p className="text-center text-sm md:text-base lg:text-lg text-slate-600 mt-4">
            Transformando el uso de la inteligencia artificial en herramienta de
            aprendizaje autónomo para jóvenes rurales del Cauca
          </p>
          <div className="flex justify-center mt-6">
            <Link to="/login">
              <button className="bg-blue-500 text-white rounded-lg px-6 py-2 flex items-center">
                Empecemos
                <img alt="" src={imgIcon3} className="ml-2 w-4 h-4" />
              </button>
            </Link>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16 lg:px-32">
          <div className="bg-white border border-red-300 rounded-lg p-4">
            <div className="flex items-center justify-center bg-red-100 rounded-full w-12 h-12">
              <img alt="" src={imgIcon} className="w-6 h-6" />
            </div>
            <h3 className="text-red-600 text-lg font-semibold mt-4">
              Dependencia Tecnológica
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Uso sin acompañamiento pedagógico genera dependencia en sin
              reflexión crítica.
            </p>
          </div>
          <div className="bg-white border border-orange-300 rounded-lg p-4">
            <div className="flex items-center justify-center bg-orange-100 rounded-full w-12 h-12">
              <img alt="" src={imgIcon1} className="w-6 h-6" />
            </div>
            <h3 className="text-orange-600 text-lg font-semibold mt-4">
              Bajo Rendimiento
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Los resultados académicos se ven afectados por la falta de
              análisis.
            </p>
          </div>
          <div className="bg-white border border-yellow-300 rounded-lg p-4">
            <div className="flex items-center justify-center bg-yellow-100 rounded-full w-12 h-12">
              <img alt="" src={imgIcon2} className="w-6 h-6" />
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
