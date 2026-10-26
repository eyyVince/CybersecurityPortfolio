import { profile, scanRows } from "../data.js";

export default function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="eyebrow">available for junior security / IT roles</div>
        <h1>
          {profile.name}
          <br />
          builds &amp; <span className="accent">hardens</span> systems.
        </h1>
        <div className="role">
          IT Support &amp; Network Security → Application Security → Offensive Security (self-study)
        </div>
        <p className="hero-lede">
          Three years keeping RealFlooring Corp.'s networks, endpoints, and internal web apps online and
          locked down — now building out hands-on penetration-testing fundamentals through a personal home lab.
        </p>

        <div className="contact-row">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            {profile.githubLabel}
          </a>
        </div>

        <div className="scan">
          <div className="scan-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <div className="label">zsh — nmap -sV vincent.bernaldo</div>
          </div>
          <div className="scan-body">
            <div className="scan-line">
              <span className="cmd">nmap -sV --top-ports 5 vincent.bernaldo</span>
            </div>
            <table className="portscan">
              <thead>
                <tr>
                  <th>Port</th>
                  <th>State</th>
                  <th>Service / Focus</th>
                </tr>
              </thead>
              <tbody>
                {scanRows.map((row) => (
                  <tr key={row.port}>
                    <td className="port-id">{row.port}</td>
                    <td className="state-open">open</td>
                    <td>
                      <div className="svc-name">{row.service}</div>
                      <div className="svc-detail">{row.detail}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </header>
  );
}
