import { Link } from "react-router-dom";

const imgIcon =
  "http://localhost:3845/assets/288c2838187c7c0850a537cf42f73391a7ef5efd.svg";
const imgClock =
  "http://localhost:3845/assets/20716c2569599f94141adb6ccd6d8aa2fdc8877c.svg";
const imgVideo =
  "http://localhost:3845/assets/cbb2b913b86bf5e12695d15d96b5157a37407664.svg";
const imgPlay =
  "http://localhost:3845/assets/83f78e8c15455b7ac865da3243357d2abf0955c3.svg";

type Course = {
  id: string;
  level: string;
  title: string;
  description: string;
  lessons: string;
  duration: string;
  progress: number;
};

const courses: Course[] = [
  {
    id: "c-1",
    level: "Principiante",
    title: "Fundamentos de IA Responsable",
    description:
      "Aprende los principios básicos para usar IA de manera ética.",
    lessons: "8 lecciones",
    duration: "2 horas",
    progress: 42,
  },
  {
    id: "c-2",
    level: "Intermedio",
    title: "Técnicas de Prompt Engineering",
    description:
      "Diseña prompts efectivos y evalúa resultados de modelos de lenguaje",
    lessons: "10 lecciones",
    duration: "3 horas",
    progress: 0,
  },
  {
    id: "c-3",
    level: "Avanzado",
    title: "Evaluación y Mitigación de Sesgos",
    description: "Métodos para detectar y reducir sesgos en modelos de IA",
    lessons: "12 lecciones",
    duration: "4 horas",
    progress: 76,
  },
];

import ChatIaUser from "../ChatIaUser";

export const CoursesPage = () => {
  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-[1100px] mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">
            Cursos Disponibles
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Aprende paso a paso cómo usar la inteligencia artificial de manera
            responsable
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <article
              key={c.id}
              className="border border-[rgba(0,0,0,0.08)] rounded-xl bg-white shadow-sm overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-[rgba(43,127,255,0.08)] rounded-lg p-2 w-15 h-12 flex items-center justify-center">
                      <img src={imgIcon} alt="icon" className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-900 font-medium">
                        {c.title}
                      </p>
                      <p className="text-xs text-slate-500">{c.description}</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-block bg-green-100 text-[#00a63e] text-[11px] px-2 py-1 rounded">
                      {c.level}
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4">
                <div className="flex items-center justify-between text-xs text-slate-600 mb-3">
                  <div className="flex items-center gap-2">
                    <img src={imgClock} alt="lessons" className="w-4 h-4" />
                    <span>{c.lessons}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={imgVideo} alt="duration" className="w-4 h-4" />
                    <span>{c.duration}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="w-full bg-amber-50 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-orange-600 h-2.5 rounded-full"
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to="/curso"
                    className="flex items-center gap-2 bg-[#155dfc] text-white text-sm rounded-md px-3 py-2"
                  >
                    <img src={imgPlay} alt="play" className="w-4 h-4" />
                    <span>Continuar Curso</span>
                  </Link>
                 
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
      {/* Chat flotante en esquina inferior derecha */}

      <ChatIaUser />
    </div>
  );
};
