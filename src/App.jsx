import { Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route
          path="/:lang"
          element={
            <LanguageProvider>
              <Home />
            </LanguageProvider>
          }
        />
        <Route
          path="/:lang/projects"
          element={
            <LanguageProvider>
              <Projects />
            </LanguageProvider>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}
