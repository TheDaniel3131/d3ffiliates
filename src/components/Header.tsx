"use client";

import React from "react";
import { useTheme } from "./ThemeProvider"; 
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className={`flex justify-between items-center p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <Link href="/" className="ml-4">
        <h1 className="text-2xl font-extrabold">D3FFILIATES</h1>
      </Link>
      <nav className="flex items-center space-x-4">
        <ul className="flex space-x-4">
          {/*  Future Development
          
          <li>
            <a href='/contact' className="font-semibold text-lg text-gray-800 dark:text-gray-100 hover:text-gray-600 dark:hover:text-white">
              Contact Us
            </a>
          </li> */}
        </ul>
        <Button onClick={toggleTheme} variant="ghost" size="icon" className="mr-4">
          {darkMode ? <Sun /> : <Moon />}
        </Button>
      </nav>
    </header>
  );
}
