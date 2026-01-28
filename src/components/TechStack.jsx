import MotionSection from "./MotionSection";

const stack = [
  "Java",
  "Spring Boot",
  "C# / .NET Core",
  "Node.js",
  "Microservices",
  "REST APIs",
  "Docker",
  "RabbitMQ",
  "MongoDB",
  "SQL Server",
  "Azure",
  "AWS",
  "CI/CD",
  "TDD / BDD",
  "Git"
];

export default function TechStack() {
  return (
    <section id="tech">
      <MotionSection>
        <div className="container">
          <h3>Tech Stack</h3>

          <div className="grid grid-3" style={{ marginTop: "2rem" }}>
            {stack.map((tech) => (
              <div key={tech} className="card">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </MotionSection>
    </section>
  );
}
