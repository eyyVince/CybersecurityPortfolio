import { useState } from "react";
import { certifications } from "../data.js";

export default function Certifications() {
  const [previewUrl, setPreviewUrl] = useState(null);

  return (
    <section id="certs">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">04</span>
          <span className="sec-title">Certifications &amp; Education</span>
        </div>

        {certifications.map((c) => (
          <div className="cert-row" key={c.name}>
            <div>
              {/* Certificate name — clickable if url exists */}
              {c.url ? (
                <a
                  className="cert-name cert-link"
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.name}
                  <span className="cert-arrow"> ↗</span>
                </a>
              ) : (
                <div className="cert-name">{c.name}</div>
              )}

              <div className="cert-org">{c.org}</div>

              {/* Verify and Preview buttons — only if verifyUrl exists */}
              {c.verifyUrl && (
                <div className="cert-actions">
                  <a
                    className="cert-btn"
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 Verify
                  </a>
                  <button
                    className="cert-btn"
                    onClick={() =>
                      setPreviewUrl(
                        previewUrl === c.verifyUrl ? null : c.verifyUrl
                      )
                    }
                  >
                    {previewUrl === c.verifyUrl ? "✕ Close" : "📄 Preview"}
                  </button>
                </div>
              )}

              {/* Inline PDF preview toggle */}
              {previewUrl === c.verifyUrl && (
                <div className="cert-preview">
                  <iframe
                    src={c.verifyUrl}
                    title={c.name}
                    width="100%"
                    height="480px"
                    style={{ border: "none", borderRadius: "8px" }}
                  />
                </div>
              )}
            </div>

            <div className="cert-date">{c.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}