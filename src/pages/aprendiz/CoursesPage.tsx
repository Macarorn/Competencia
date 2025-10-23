import { Link } from "react-router-dom";
import { BookOpen, Clock, Video, Play, Lightbulb, Code2, Shield } from "lucide-react";
import ChatIaUser from "../ChatIaUser";

type Course = {
  id: string;
  level: string;
  title: string;
  description: string;
  lessons: string;
  duration: string;
  progress: number;
  icon: string;
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
    icon: "lightbulb",
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
    icon: "code",
  },
  {
    id: "c-3",
    level: "Avanzado",
    title: "Evaluación y Mitigación de Sesgos",
    description: "Métodos para detectar y reducir sesgos en modelos de IA",
    lessons: "12 lecciones",
    duration: "4 horas",
    progress: 76,
    icon: "shield",
  },
];

export const CoursesPage = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "lightbulb":
        return <Lightbulb className="w-5 h-5 text-blue-600" />;
      case "code":
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case "shield":
        return <Shield className="w-5 h-5 text-blue-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-blue-600" />;
    }
  };

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
              className="border border-gray-200 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Header del curso */}
              <div className="p-5 pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="bg-blue-50 rounded-xl p-2.5 flex items-center justify-center flex-shrink-0">
                      {getIcon(c.icon)}
                    </div>
                    <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-lg">
                      {c.level}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-slate-900 leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>

              {/* Info y progreso */}
              <div className="px-5 pb-5">
                {/* Metadata del curso */}
                <div className="flex items-center justify-between text-xs text-slate-600 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center">
                      <Video className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="font-medium">{c.lessons}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="font-medium">{c.duration}</span>
                  </div>
                </div>

                {/* Barra de progreso */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-700">Progreso</span>
                    <span className="text-xs font-semibold text-orange-600">{c.progress}%</span>
                  </div>
                  <div className="w-full bg-orange-50 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${c.progress}%` }}
                    />
                  </div>
                </div>

                {/* Botón de acción */}
                <Link
                  to="/lecciones"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-medium rounded-xl px-4 py-2.5 w-full hover:bg-blue-700 transition-colors duration-200 group-hover:shadow-lg group-hover:shadow-blue-600/30"
                >
                  <Play className="w-4 h-4" />
                  <span>Continuar Curso</span>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
      
      <ChatIaUser />
    </div>
  );
};