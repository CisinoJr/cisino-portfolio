import { createContext, useContext, useEffect, useState } from "react";
import translations from "../i18n";
import { useLocation, useNavigate } from "react-router-dom";

const LanguageContext = createContext();

const SUPPORTED = ["en", "pt", "es"];
const DEFAULT_LANG = "en";

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const urlLang = location.pathname.split("/")[1];
  const storedLang = localStorage.getItem("lang");

  const initialLang = SUPPORTED.includes(urlLang) ? urlLang : storedLang || DEFAULT_LANG;

  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;

    if (!location.pathname.startsWith(`/${lang}`)) {
      navigate(`/${lang}`, { replace: true });
    }
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: translations[lang]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
