import MotionSection from "./MotionSection";

export default function SocialProof() {
  return (
    <section>
      <MotionSection>
        <div className="container">
          <h3>Trusted by</h3>

          <div className="grid grid-3" style={{ marginTop: "2rem" }}>
            {["EY", "Stone", "Aditum", "SONDA", "Brasilcap"].map((c) => (
              <div key={c} className="card" style={{ textAlign: "center" }}>
                <strong>{c}</strong>
              </div>
            ))}
          </div>

          <div className="grid grid-3" style={{ marginTop: "3rem" }}>
            <div className="card">
              <h4>8+ Years</h4>
              <p>Professional experience</p>
            </div>
            <div className="card">
              <h4>Fintech & Enterprise</h4>
              <p>Mission-critical systems</p>
            </div>
            <div className="card">
              <h4>Backend & Architecture</h4>
              <p>Scalable systems</p>
            </div>
          </div>
        </div>
      </MotionSection>
    </section>
  );
}
