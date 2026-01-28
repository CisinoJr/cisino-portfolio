import { experience } from "../data/experience";
import { useLang } from "../context/LanguageContext";

export default function ExperienceTree() {
  const { t } = useLang();

  return (
    <section id="experience">
      <div className="container">
        <h3>{t.experience.title}</h3>

        <ul className="timeline">
          {experience.map((e, i) => (
            <li key={i}>
              <span className="period">{e.period}</span>
              <h4>
                {e.role} · {e.company}
              </h4>
              <p>{e.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
