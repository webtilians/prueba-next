"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700"
    >
      {theme === "light" ? "Modo Oscuro 🌙" : "Modo Claro ☀️"}
    </button>
  );
}
