import { Link } from "react-router";
import { useEffect } from "react";

export default function NotFound() {
  // Cambiar el título de la página
  useEffect(() => {
    document.title = "404 - Página no encontrada | Route Manager";
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden bg-white dark:bg-gray-900">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(156, 163, 175, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(156, 163, 175, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
        <h1 className="mb-8 font-bold text-gray-800 text-6xl dark:text-white/90 xl:text-8xl">
          ERROR
        </h1>

        <img src="/error/404-dark.svg" alt="404" className="dark:hidden" />
        <img
          src="/error/404-dark.svg"
          alt="404"
          className="hidden dark:block"
        />

        <p className="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg">
          ¡Parece que no podemos encontrar la página que estás buscando!
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 transition-colors"
        >
          Volver a la página de inicio
        </Link>
      </div>

      {/* Footer */}
      <p className="absolute text-sm text-center text-gray-500 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
        &copy; {new Date().getFullYear()} - Route Manager
      </p>
    </div>

  );
}