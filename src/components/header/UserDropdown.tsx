// components/dropdown/UserDropdown.tsx
import { useState, useRef, useEffect } from "react";

interface UserDropdownProps {
  user: {
    name: string;
    email: string;
    image?: string;
  };
  onLogout: () => void;
}

export default function UserDropdown({ user, onLogout }: UserDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const defaultImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=3B82F6&color=fff`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-3 hover:bg-[#1E293B] rounded-lg px-3 py-2 transition-all duration-300 transform hover:scale-105"
      >
        <img
          src={user.image || defaultImage}
          alt={user.name}
          className="w-10 h-10 rounded-lg border-2 white-500 transition-all duration-300"
        />
        <span className="hidden lg:block text-sm font-medium">{user.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#1E293B] rounded-lg shadow-xl border border-gray-700 overflow-hidden animate-fadeIn">
          <div className="px-4 py-3 border-b border-gray-700">
            <p className="text-sm font-medium text-white">{user.name}</p>
            <p className="text-xs text-gray-400 mt-1">{user.email}</p>
          </div>
          <button
            onClick={() => {
              setIsDropdownOpen(false);
              onLogout();
            }}
            className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-[#0F172B] hover:text-red-300 transition-colors duration-200 border-t border-gray-700"
          >
            Cerrar Sesión
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}