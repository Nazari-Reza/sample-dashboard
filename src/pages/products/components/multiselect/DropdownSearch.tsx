import { useRef, useEffect } from "react";

interface DropdownSearchProps {
  label: string;
  query: string;
  onChange: (query: string) => void;
}

export function DropdownSearch({
  label,
  query,
  onChange,
}: DropdownSearchProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => searchRef.current?.focus(), 50);
  }, []);

  return (
    <div className="p-2 border-b border-slate-700">
      <div className="relative">
        <svg
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
        <input
          ref={searchRef}
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Search ${label.toLowerCase()}…`}
          className="
            w-full pl-7 pr-7 py-1.5 text-xs rounded-lg
            bg-slate-700/70 border border-slate-600
            text-white placeholder-slate-500
            focus:outline-none focus:ring-1 focus:ring-indigo-500
          "
        />
        {query && (
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              onChange("");
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
