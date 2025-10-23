import type { ReactNode } from "react";


interface MainContentProps {
  children: ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="bg-white min-h-[calc(100vh-72px)] transition-all duration-500">
      <div className="container mx-auto px-6 py-4 animate-fadeInUp">
        {children}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </main>
  );
}