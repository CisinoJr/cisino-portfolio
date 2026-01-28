import { useLang } from "../context/LanguageContext";
import MotionSection from "./MotionSection";

export default function Hero() {
  const { t } = useLang();

  return (
    <section>
      <MotionSection>
        <div className="container">
          <h1>Cisino Gomes Jr</h1>
          <h2>{t.hero.title}</h2>
          <p style={{ marginTop: "1.5rem" }}>{t.hero.subtitle}</p>

          <div style={{ marginTop: "2rem" }}>
            <a href="#contact" className="btn">
              {t.hero.cta}
            </a>
          </div>
        </div>
      </MotionSection>
    </section>
  );
}
