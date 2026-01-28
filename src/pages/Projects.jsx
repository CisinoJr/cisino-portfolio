import { projects } from "../data/projects";
import MotionSection from "../components/MotionSection";

export default function Projects() {
  return (
    <section>
      <MotionSection>
        <div className="container">
          <h1>Projects & Case Studies</h1>
          <p>
            Selected projects highlighting my experience in backend systems, architecture
            and enterprise solutions.
          </p>

          <div className="grid grid-2" style={{ marginTop: "3rem" }}>
            {projects.map((p, i) => (
              <div key={i} className="card">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <p>
                  <strong>Stack:</strong> {p.stack}
                </p>
                <p>
                  <strong>Domain:</strong> {p.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
    </section>
  );
}
