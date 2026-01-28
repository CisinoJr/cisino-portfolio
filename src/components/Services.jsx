import { useLang } from "../context/LanguageContext";

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services">
      <div className="container">
        <h3>{t.services.title}</h3>

        <div className="grid grid-2" style={{ marginTop: "2rem" }}>
          {t.services.items.map((service, i) => (
            <div key={i} className="card">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
