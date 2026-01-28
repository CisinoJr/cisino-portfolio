import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "../context/ThemeContext";

export default function HeaderTools() {
  const { theme, toggle } = useTheme();

  return (
    <div className="header-tools">
      <LanguageSwitcher />

      <button
        className="theme-toggle"
        onClick={toggle}
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
