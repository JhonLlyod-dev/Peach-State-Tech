"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";

const options = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Laptop },
] as const;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const current = options.find((o) => o.value === theme) ?? options[2];
  const CurrentIcon = current.icon;

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div
      className="fixed right-5 bottom-5 z-50"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocus={openMenu}
      onBlur={scheduleClose}
    >
      {/* Popup menu */}
      <div
        className={`absolute bottom-full right-0 mb-2 w-36 rounded-xl bg-white dark:bg-zinc-800 shadow-lg border border-zinc-200 dark:border-zinc-700 origin-bottom-right transition-all duration-150 ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {options.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            onClick={() => {
              setTheme(value);
              setOpen(false);
            }}
            className={`flex w-full items-center gap-2 px-3 py-2 text-sm rounded-xl transition-colors ${
              theme === value
                ? "bg-peach-light dark:bg-zinc-700 font-semibold text-zinc-100 dark:text-white"
                : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700"
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      {/* Trigger button */}
      <button
        aria-label="Toggle theme"
        className="flex items-center justify-center rounded-full p-4 bg-peach dark:bg-zinc-800 shadow-sm hover:shadow-md transition-shadow"
      >
        <CurrentIcon className="text-zinc-100 dark:text-zinc-100" />
      </button>
    </div>
  );
}