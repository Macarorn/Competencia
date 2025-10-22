const imgProgress =
  "http://localhost:3845/assets/4019140acbe5f37941d7c822057c40cc54885772.svg";

type CourseProgress = {
  id: string;
  title: string;
  completed: number; // porcentaje
};

const progressData: CourseProgress[] = [
  { id: "p-1", title: "Fundamentos de IA Responsable", completed: 42 },
  { id: "p-2", title: "Técnicas de Prompt Engineering", completed: 0 },
  { id: "p-3", title: "Evaluación y Mitigación de Sesgos", completed: 76 },
];

export const progressPage = () => {
  const avg = Math.round(
    progressData.reduce((s, c) => s + c.completed, 0) / progressData.length
  );

  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-[1100px] mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">Progreso</h1>
          <p className="mt-2 text-sm text-slate-600">
            Resumen de tu avance en los cursos
          </p>
        </header>

        <section className="mb-8 flex items-center gap-6">
          <div className="w-[120px] h-[120px] rounded-full bg-amber-50 flex items-center justify-center">
            <div className="w-[92px] h-[92px] rounded-full bg-white flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-slate-900">{avg}%</p>
                <p className="text-xs text-slate-500">Progreso total</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <p className="text-sm text-slate-700">
              Has completado <span className="font-semibold">{avg}%</span> de
              los cursos registrados. Sigue avanzando para alcanzar tus
              objetivos.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {progressData.map((c) => (
            <div key={c.id} className="border rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <img src={imgProgress} alt="icon" className="w-8 h-8" />
                  <p className="font-medium text-slate-900">{c.title}</p>
                </div>
                <p className="text-sm text-slate-600">{c.completed}%</p>
              </div>

              <div className="w-full bg-amber-50 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-orange-600 h-3 rounded-full"
                  style={{ width: `${c.completed}%` }}
                />
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button className="bg-[#155dfc] text-white px-3 py-2 rounded-md text-sm">
                  Continuar
                </button>
                <button className="text-sm text-slate-600 underline">
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};
