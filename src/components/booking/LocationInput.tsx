"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MapPin } from "@phosphor-icons/react/ssr";
import { KENYAN_LOCATIONS } from "@/data/locations";

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  iconVariant?: "green" | "dark";
}

export default function LocationInput({
  value,
  onChange,
  onKeyDown,
  placeholder,
  iconVariant = "green",
}: LocationInputProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getSuggestions = useCallback((text: string) => {
    if (text.trim().length < 2) return [];
    const lower = text.toLowerCase();
    return KENYAN_LOCATIONS.filter((loc) =>
      loc.toLowerCase().includes(lower)
    ).slice(0, 8);
  }, []);

  const handleChange = (text: string) => {
    onChange(text);
    setActiveIndex(-1);
    const next = getSuggestions(text);
    setSuggestions(next);
    setOpen(next.length > 0);
  };

  const handleSelect = (loc: string) => {
    onChange(loc);
    setSuggestions([]);
    setOpen(false);
    setActiveIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (open && suggestions.length > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, -1));
        return;
      }
      if (e.key === "Enter" && activeIndex >= 0) {
        e.preventDefault();
        handleSelect(suggestions[activeIndex]);
        return;
      }
      if (e.key === "Escape") {
        setOpen(false);
        setActiveIndex(-1);
        return;
      }
    }
    onKeyDown?.(e);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const listId = `location-suggestions-${placeholder.replace(/\s+/g, "-")}`;

  return (
    <div ref={containerRef} className="relative flex-1 min-w-0">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 focus-within:ring-2 focus-within:ring-green-500 transition-shadow">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
            iconVariant === "green" ? "bg-green-600" : "bg-slate-900"
          }`}
        >
          <MapPin
            size={12}
            className={iconVariant === "green" ? "text-white" : "text-green-400"}
          />
        </div>
        <input
          ref={inputRef}
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={listId}
          aria-activedescendant={
            activeIndex >= 0 ? `${listId}-option-${activeIndex}` : undefined
          }
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          autoComplete="off"
          className="flex-1 bg-transparent text-sm text-slate-900 placeholder-slate-400 outline-none font-medium min-w-0"
        />
      </div>

      {open && suggestions.length > 0 && (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-50 top-full mt-1 left-0 right-0 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden"
        >
          {suggestions.map((loc, i) => (
            <li
              key={loc}
              id={`${listId}-option-${i}`}
              role="option"
              aria-selected={i === activeIndex}
            >
              <button
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSelect(loc);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-2.5 transition-colors ${
                  i === activeIndex
                    ? "bg-green-50 text-green-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <MapPin
                  size={12}
                  className={
                    i === activeIndex ? "text-green-500" : "text-slate-400"
                  }
                />
                {loc}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
