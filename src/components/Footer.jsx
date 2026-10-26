import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <h2>Let's talk security.</h2>
        <p>Open to junior cybersecurity, network security, and IT support roles. Reach out directly or check the code.</p>
        <div className="cta-row">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="btn ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
            View GitHub
          </a>
        </div>
        <div className="foot-note">© 2026 {profile.name} · {profile.location}</div>
      </div>
    </footer>
  );
}
