import { useLang } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact">
      <div className="container">
        <h3>{t.contact.title}</h3>
        <p>{t.contact.text}</p>

        <div style={{ marginTop: "1.5rem" }}>
          <a className="btn" href="mailto:cisinojr@gmail.com">
            cisinojr@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
