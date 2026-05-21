// Variant 1: Editorial Minimal — serif-led one-pager, formal, project cards w/ modal
function VariantEditorial({ accent = "#b5563c", bg = "#f5f1ea", ink = "#1a1814" }) {
  const R = window.RESUME;
  const [openProject, setOpenProject] = React.useState(null);

  const wrap = {
    width: "100%",
    minHeight: "100%",
    background: bg,
    color: ink,
    fontFamily: "'Newsreader', 'Source Serif Pro', Georgia, serif",
    padding: "80px 120px 120px",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
  };
  const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };
  const eyebrow = {
    ...mono,
    fontSize: 11,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: ink,
    opacity: 0.55,
  };
  const rule = { height: 1, background: ink, opacity: 0.12, margin: "20px 0 56px" };
  const sectionTitle = {
    fontFamily: "'Newsreader', serif",
    fontSize: 14,
    ...mono,
    fontWeight: 500,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    opacity: 0.6,
    marginBottom: 16,
  };
  const accentDot = {
    display: "inline-block",
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: accent,
    verticalAlign: "middle",
    marginRight: 10,
  };

  // tiny sparkline for hero
  const Sparkline = ({ points, w = 80, h = 22, color }) => {
    const max = Math.max(...points), min = Math.min(...points);
    const path = points.map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min || 1)) * h;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(" ");
    return (
      <svg width={w} height={h} style={{ verticalAlign: "middle" }}>
        <path d={path} stroke={color || accent} strokeWidth="1.5" fill="none" />
      </svg>
    );
  };

  return (
    <div style={wrap}>
      {/* corner meta */}
      <div style={{ position: "absolute", top: 40, left: 120, right: 120, display: "flex", justifyContent: "space-between", ...mono, fontSize: 11, opacity: 0.55 }}>
        <span>{R.name.toUpperCase()} — PORTFOLIO 2026</span>
        <span>{R.location} · {R.email}</span>
      </div>

      {/* hero */}
      <div style={{ marginTop: 60, marginBottom: 80 }}>
        <div style={eyebrow}>Data Analyst · KPI Frameworks · SQL · Python</div>
        <h1 style={{
          fontFamily: "'Newsreader', serif",
          fontSize: 132,
          lineHeight: 0.92,
          fontWeight: 400,
          letterSpacing: "-0.03em",
          margin: "32px 0 28px",
          fontStyle: "normal",
        }}>
          Sushma<br/>
          <span style={{ fontStyle: "italic", color: accent }}>Emmadi</span><span style={{ color: accent }}>.</span>
        </h1>
        <div style={{ display: "flex", gap: 64, alignItems: "flex-start", marginTop: 40 }}>
          <p style={{ fontSize: 22, lineHeight: 1.5, maxWidth: 600, margin: 0, fontWeight: 400 }}>
            I translate product and operational data into <em>dashboards, KPI frameworks, and insights</em> for cross-functional teams — partnering with stakeholders to define measurement strategy, validate data quality, and communicate findings clearly.
          </p>
          <div style={{ ...mono, fontSize: 12, lineHeight: 1.9, opacity: 0.7, minWidth: 200 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>records modeled</span><span>1.2M+ <Sparkline points={[2, 4, 3, 8, 7, 12, 18, 24]} /></span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>SQL perf gain</span><span>+40%</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>ad hoc time</span><span>−30%</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>KPIs scoped</span><span>20+</span></div>
          </div>
        </div>
      </div>

      {/* About */}
      <div style={rule}/>
      <Section title="01 — About" eyebrow={eyebrow} sectionTitle={sectionTitle}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64 }}>
          <div style={{ ...mono, fontSize: 11, lineHeight: 1.9, opacity: 0.65 }}>
            <div>BASED IN</div>
            <div style={{ color: ink, opacity: 1 }}>United States</div>
            <div style={{ marginTop: 16 }}>FOCUS</div>
            <div style={{ color: ink, opacity: 1 }}>Product analytics ·<br/>Warehouse modeling ·<br/>KPI design</div>
            <div style={{ marginTop: 16 }}>OPEN TO</div>
            <div style={{ color: ink, opacity: 1 }}>Full-time roles, remote-friendly</div>
          </div>
          <p style={{ fontSize: 19, lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
            I like the unglamorous middle of the stack — defining the KPIs before the dashboards, validating the data before the charts, and making sure the metric on the slide actually means what it says. I work across SQL, Python, dbt, Airflow, and Snowflake, and I get the most out of partnering with founders and PMs on early-stage measurement strategy.
          </p>
        </div>
      </Section>

      {/* Skills */}
      <Section title="02 — Skills" eyebrow={eyebrow} sectionTitle={sectionTitle}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          {Object.entries(R.skills).map(([cat, items]) => (
            <div key={cat}>
              <div style={{ ...mono, fontSize: 11, opacity: 0.5, marginBottom: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>{cat}</div>
              <div style={{ fontSize: 18, lineHeight: 1.7 }}>
                {items.map((s, i) => (
                  <React.Fragment key={s}>
                    <span>{s}</span>
                    {i < items.length - 1 && <span style={{ color: accent, margin: "0 10px" }}>·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="03 — Experience" eyebrow={eyebrow} sectionTitle={sectionTitle}>
        {R.experience.map((job, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 48, marginBottom: 48, paddingBottom: 48, borderBottom: i < R.experience.length - 1 ? `1px dashed ${ink}22` : "none" }}>
            <div>
              <div style={{ ...mono, fontSize: 11, opacity: 0.55 }}>{job.period}</div>
              <div style={{ ...mono, fontSize: 11, opacity: 0.55, marginTop: 4 }}>{job.location}</div>
              {job.current && <div style={{ ...mono, fontSize: 10, marginTop: 12, color: accent, display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: accent, display: "inline-block" }}/>CURRENT</div>}
            </div>
            <div>
              <div style={{ fontSize: 28, fontFamily: "'Newsreader', serif", lineHeight: 1.1, marginBottom: 4 }}>
                {job.role} <span style={{ fontStyle: "italic", opacity: 0.5 }}>at</span> {job.company}
              </div>
              <ul style={{ fontSize: 16, lineHeight: 1.6, paddingLeft: 18, marginTop: 16 }}>
                {job.bullets.map((b, j) => <li key={j} style={{ marginBottom: 8 }}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </Section>

      {/* Projects */}
      <Section title="04 — Selected Projects" eyebrow={eyebrow} sectionTitle={sectionTitle}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          {R.projects.map((p, i) => (
            <button key={p.slug} onClick={() => setOpenProject(p)} style={{
              textAlign: "left",
              background: "transparent",
              border: `1px solid ${ink}22`,
              padding: 28,
              cursor: "pointer",
              fontFamily: "inherit",
              color: ink,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = accent}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = `${ink}22`}
            >
              <div style={{ display: "flex", justifyContent: "space-between", ...mono, fontSize: 11, opacity: 0.55 }}>
                <span>0{i+1}</span><span>{p.period}</span>
              </div>
              <div>
                <div style={{ fontSize: 32, fontFamily: "'Newsreader', serif", lineHeight: 1.1, marginBottom: 6 }}>{p.title}</div>
                <div style={{ fontStyle: "italic", fontSize: 18, opacity: 0.65 }}>{p.subtitle}</div>
              </div>
              <p style={{ fontSize: 15, lineHeight: 1.55, margin: 0, opacity: 0.85 }}>{p.summary}</p>
              <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
                {p.metrics.slice(0, 2).map(m => (
                  <div key={m.label}>
                    <div style={{ fontFamily: "'Newsreader', serif", fontSize: 28, color: accent, lineHeight: 1 }}>{m.value}</div>
                    <div style={{ ...mono, fontSize: 10, opacity: 0.55, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                {p.stack.map(t => (
                  <span key={t} style={{ ...mono, fontSize: 10, padding: "3px 8px", border: `1px solid ${ink}22`, borderRadius: 2, opacity: 0.7 }}>{t}</span>
                ))}
              </div>
              <div style={{ ...mono, fontSize: 11, color: accent, marginTop: 4, display: "flex", alignItems: "center", gap: 6 }}>
                Read case study <span>→</span>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* Education + Certifications */}
      <Section title="05 — Education & Certifications" eyebrow={eyebrow} sectionTitle={sectionTitle}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <div style={{ ...mono, fontSize: 11, opacity: 0.55, marginBottom: 8 }}>{R.education.period}</div>
            <div style={{ fontSize: 24, fontFamily: "'Newsreader', serif", lineHeight: 1.2 }}>{R.education.degree}</div>
            <div style={{ fontStyle: "italic", fontSize: 16, opacity: 0.7, marginTop: 4 }}>{R.education.school}</div>
            <div style={{ ...mono, fontSize: 12, marginTop: 12, opacity: 0.75 }}>GPA {R.education.gpa}</div>
            <div style={{ ...mono, fontSize: 11, opacity: 0.55, marginTop: 16 }}>RELEVANT COURSEWORK</div>
            <div style={{ fontSize: 15, marginTop: 4, lineHeight: 1.6 }}>{R.education.coursework.join(" · ")}</div>
          </div>
          <div>
            {R.certifications.map(c => (
              <div key={c.name} style={{ borderTop: `1px solid ${ink}22`, paddingTop: 16, marginBottom: 16 }}>
                <div style={{ ...mono, fontSize: 11, opacity: 0.55 }}>{c.year} · {c.issuer}</div>
                <div style={{ fontSize: 18, fontFamily: "'Newsreader', serif", marginTop: 4 }}>{c.name}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact / footer */}
      <div style={{ marginTop: 80, paddingTop: 32, borderTop: `1px solid ${ink}22`, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={eyebrow}>Get in touch</div>
          <div style={{ fontSize: 72, fontFamily: "'Newsreader', serif", lineHeight: 1, marginTop: 16, letterSpacing: "-0.02em" }}>
            Let's talk <span style={{ fontStyle: "italic", color: accent }}>data</span>.
          </div>
          <div style={{ ...mono, fontSize: 14, marginTop: 24, lineHeight: 1.8 }}>
            <div>{R.email}</div>
            <div>{R.linkedin}</div>
            <div>{R.github}</div>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <button style={{
            background: ink, color: bg, border: "none", padding: "16px 24px",
            ...mono, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase",
            cursor: "pointer", borderRadius: 0,
          }}>↓ Download CV (PDF)</button>
          <div style={{ ...mono, fontSize: 10, marginTop: 24, opacity: 0.4 }}>© 2026 Sushma Emmadi</div>
        </div>
      </div>

      {/* Modal */}
      {openProject && (
        <div onClick={() => setOpenProject(null)} style={{
          position: "absolute", inset: 0, background: `${ink}cc`,
          display: "flex", alignItems: "center", justifyContent: "center", padding: 80, zIndex: 100,
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: bg, padding: 56, maxWidth: 760, width: "100%", maxHeight: "85%", overflow: "auto",
            border: `1px solid ${ink}22`, position: "relative",
          }}>
            <button onClick={() => setOpenProject(null)} style={{
              position: "absolute", top: 20, right: 24, background: "transparent", border: "none", ...mono, fontSize: 14, cursor: "pointer", color: ink,
            }}>✕ close</button>
            <div style={{ ...mono, fontSize: 11, opacity: 0.55 }}>{openProject.kind} · {openProject.period}</div>
            <h2 style={{ fontFamily: "'Newsreader', serif", fontSize: 56, margin: "12px 0 4px", lineHeight: 1.05, fontWeight: 400 }}>{openProject.title}</h2>
            <div style={{ fontStyle: "italic", fontSize: 22, opacity: 0.65, marginBottom: 24 }}>{openProject.subtitle}</div>
            <div style={{ display: "flex", gap: 32, padding: "20px 0", borderTop: `1px solid ${ink}22`, borderBottom: `1px solid ${ink}22`, marginBottom: 24 }}>
              {openProject.metrics.map(m => (
                <div key={m.label}>
                  <div style={{ fontFamily: "'Newsreader', serif", fontSize: 30, color: accent, lineHeight: 1 }}>{m.value}</div>
                  <div style={{ ...mono, fontSize: 10, opacity: 0.55, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.label}</div>
                </div>
              ))}
            </div>
            <ul style={{ paddingLeft: 18, fontSize: 16, lineHeight: 1.65 }}>
              {openProject.details.map((d, i) => <li key={i} style={{ marginBottom: 12 }}>{d}</li>)}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 24 }}>
              {openProject.stack.map(t => (
                <span key={t} style={{ ...mono, fontSize: 11, padding: "4px 10px", background: `${ink}08`, borderRadius: 2 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Section({ title, children, eyebrow, sectionTitle }) {
  return (
    <div style={{ marginBottom: 96 }}>
      <div style={sectionTitle}>{title}</div>
      <div>{children}</div>
    </div>
  );
}

window.VariantEditorial = VariantEditorial;
