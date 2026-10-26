import { experience } from "../data.js";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">01</span>
          <span className="sec-title">Experience</span>
        </div>

        {experience.map((job) => (
          <div className="job" key={job.title}>
            <div className="job-top">
              <span className="job-title">{job.title}</span>
              <span className="job-date">{job.date}</span>
            </div>
            <div className="job-co">{job.company}</div>
            <ul>
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
