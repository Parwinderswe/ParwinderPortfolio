import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [theme, setTheme] = useState("auto");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="fixed top-0 z-50 w-full transition-colors duration-300 bg-white shadow-md dark:bg-black">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto md:px-6">
      <div className="flex items-center gap-3">
        <img
          src="/parwinder-kaur.png"
          alt="Parwinder Kaur logo"
          className="h-10 w-10 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold text-brand-teal-dark dark:text-brand-gold">Parwinder Kaur</h1>
      </div>

      <nav className="hidden justify-between space-x-3 text-black dark:text-white md:flex">
         <a href="#about" className="hover:text-brand-gold">About</a>
        <a href="#skills" className="hover:text-brand-gold">Skills</a>
        <a href="#portfolio" className="hover:text-brand-gold">Portfolio</a>
        <a href="#contact" className="hover:text-brand-gold">Contact</a>
      </nav>

      <div className="flex items-center gap-2">
        <div className="inline-flex items-center p-1 border rounded-md border-input">
        <button
          className={`px-2 py-1 rounded-sm ${
            theme === "light" ? "bg-brand-teal text-white" : "text-black dark:text-white"
          }`}
          onClick={() => setTheme("light")}
          title="Light mode"
        >
          <FiSun />
        </button>

        <button
          className={`px-2 py-1 rounded-sm ${
            theme === "dark" ? "bg-brand-teal text-white" : "text-black dark:text-white"
          }`}
          onClick={() => setTheme("dark")}
          title="Dark mode"
        >
          <FiMoon />
        </button>

        <button
          className={`px-2 py-1 text-xs rounded-sm ${
            theme === "auto" ? "bg-brand-teal text-white" : "text-black dark:text-white"
          }`}
          onClick={() => setTheme("auto")}
        >
          Auto
        </button>
        </div>

        <button
          className="inline-flex items-center justify-center p-2 text-black border rounded-md border-input dark:text-white md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      </div>

      <nav
        className={`container mx-auto mt-4 flex flex-col gap-3 px-4 text-black dark:text-white md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <a href="#about" className="hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>
          About
        </a>
        <a href="#skills" className="hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>
          Skills
        </a>
        <a href="#portfolio" className="hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>
          Portfolio
        </a>
        <a href="#contact" className="hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Header;
