// Footer.tsx
"use client";

import React from "react";
import { useTheme } from "./ThemeProvider"; // Adjust the path as necessary

export default function Footer() {
  const { darkMode } = useTheme(); // Get the current theme state

  return (
    <footer
      className={`flex justify-center items-center p-4 mb-10 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <p className="text-xl font-medium">&copy; {new Date().getFullYear()} D3FFILIATES. All Rights Reserved.</p>
    </footer>
  );
}
