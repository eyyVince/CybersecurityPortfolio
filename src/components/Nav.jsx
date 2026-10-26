const LINKS = [
  { href: "#experience", label: "experience" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#certs", label: "certifications" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <div className="brand">
          vincent<span className="accent-text">@</span>bernaldo
        </div>
        <div className="navlinks">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
