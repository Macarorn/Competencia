// layout/AppLayout.tsx
import type { ReactNode } from "react";
import Header from "../components/layout/Header";
import MainContent from "../components/layout/MainContent";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MainContent>
        {children}
      </MainContent>
    </div>
  );
}