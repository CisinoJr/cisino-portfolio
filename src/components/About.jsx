import { useLang } from "../context/LanguageContext";
import MotionSection from "./MotionSection";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about">
      <MotionSection>
        <div className="container">
          <h3>{t.about.title}</h3>

          <p style={{ marginTop: "1rem" }}>{t.about.p1}</p>

          <p style={{ marginTop: "1rem" }}>{t.about.p2}</p>
        </div>
      </MotionSection>
    </section>
  );
}
