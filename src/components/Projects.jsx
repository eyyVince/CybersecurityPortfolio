import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">03</span>
          <span className="sec-title">Projects</span>
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="proj-card" key={p.title}>
              <div className="proj-head">
                <span className="proj-title">{p.title}</span>
                <span className="proj-year">{p.year}</span>
              </div>
              <div className="proj-stack">{p.stack}</div>
              <div className="proj-desc">{p.desc}</div>
              <a className="proj-link" href={p.url} target="_blank" rel="noopener noreferrer">
                ↗ source code
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
