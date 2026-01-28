import { useLang } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "pt", label: "Português", flag: "🇧🇷" },
    { code: "es", label: "Español", flag: "🇪🇸" }
  ];

  return (
    <nav className="language-switcher" aria-label="Language switcher">
      {languages.map(({ code, label, flag }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          disabled={lang === code}
          aria-label={`Change language to ${label}`}
          title={label}
        >
          <span className="flag">{flag}</span>
          <span className="label">{label}</span>
        </button>
      ))}
    </nav>
  );
}
