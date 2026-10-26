import { skillGroups } from "../data.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">02</span>
          <span className="sec-title">Skills</span>
        </div>
        <div className="skills-grid">
          {skillGroups.map((g) => (
            <div className={`skill-card${g.lab ? " lab" : ""}`} key={g.title}>
              <h3>{g.title}</h3>
              <div className="chip-row">
                {g.chips.map((c) => (
                  <span className="chip" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
