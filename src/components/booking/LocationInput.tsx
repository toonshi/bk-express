"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MapPin } from "@phosphor-icons/react/ssr";
import { KENYAN_LOCATIONS } from "@/data/locations";

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  iconVariant?: "green" | "yellow" | "dark";
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
      <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.07] focus-within:border-primary/40 focus-within:bg-white/[0.08] transition-all">
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
            iconVariant === "green"
              ? "bg-primary/20 border border-primary/30"
              : iconVariant === "yellow"
              ? "bg-accent/15 border border-accent/25"
              : "bg-white/[0.06]"
          }`}
        >
          <MapPin
            size={13}
            className={
              iconVariant === "green"
                ? "text-primary-light"
                : iconVariant === "yellow"
                ? "text-accent"
                : "text-white/40"
            }
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
          className="flex-1 bg-transparent text-sm text-white placeholder-white/30 outline-none font-medium min-w-0"
        />
      </div>

      {open && suggestions.length > 0 && (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-50 top-full mt-1.5 left-0 right-0 bg-[#0f0f1a] border border-white/[0.08] rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl"
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
                className={`w-full text-left px-4 py-3 text-sm font-medium flex items-center gap-3 transition-colors ${
                  i === activeIndex
                    ? "bg-primary/20 text-primary-light"
                    : "text-white/60 hover:bg-white/[0.05] hover:text-white/80"
                }`}
              >
                <MapPin
                  size={13}
                  className={i === activeIndex ? "text-primary-light" : "text-white/25"}
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
