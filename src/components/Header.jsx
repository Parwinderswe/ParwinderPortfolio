import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

function Header() {
  const [theme, setTheme] = useState("auto");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // Auto theme based on system preference
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  return (
    <div className="fixed top-0 z-50 flex items-center justify-between w-full px-6 py-4 transition-colors duration-300 bg-white shadow-md dark:bg-black md:px-12">
      <h1 className="text-2xl font-bold text-purple-800 dark:text-purple-400 ">Parwinder Kaur</h1>

      <nav className="flex justify-between space-x-3 text-black dark:text-white ">
         <a href="#about" className="hover:text-purple-500">About</a>
        <a href="#skills" className="hover:text-purple-500">Skills</a>
        <a href="#portfolio" className="hover:text-purple-500">Portfolio</a>
        <a href="#contact" className="hover:text-purple-500">Contact</a>
      </nav>

      <div className="inline-flex items-center p-1 border rounded-md border-input">
        <button
          className={`px-2 py-1 rounded-sm ${
            theme === "light" ? "bg-purple-500 text-white" : "text-black dark:text-white"
          }`}
          onClick={() => setTheme("light")}
          title="Light mode"
        >
          <FiSun />
        </button>

        <button
          className={`px-2 py-1 rounded-sm ${
            theme === "dark" ? "bg-purple-500 text-white" : "text-black dark:text-white"
          }`}
          onClick={() => setTheme("dark")}
          title="Dark mode"
        >
          <FiMoon />
        </button>

        <button
          className={`px-2 py-1 text-xs rounded-sm ${
            theme === "auto" ? "bg-purple-500 text-white" : "text-black dark:text-white"
          }`}
          onClick={() => setTheme("auto")}
        >
          Auto
        </button>
      </div>
    </div>
  );
}

export default Header;
