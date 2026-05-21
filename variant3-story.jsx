// Variant 3: Story / Personal — conversational tone, multi-section narrative, inline accordion case studies
function VariantStory({ accent = "#7c3aed", bg = "#fbf9f6", ink = "#1c1a26", soft = "#f0ece4" }) {
  const R = window.RESUME;
  const [openSlug, setOpenSlug] = React.useState(R.projects[0].slug);

  const sans = { fontFamily: "'Manrope', 'Geist', system-ui, sans-serif" };
  const serif = { fontFamily: "'Newsreader', Georgia, serif" };
  const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

  const wrap = {
    width: "100%", minHeight: "100%", background: bg, color: ink,
    ...sans, boxSizing: "border-box", position: "relative", overflow: "hidden",
  };

  // top nav
  const Nav = () => (
    <div style={{
      padding: "24px 64px", display: "flex", justifyContent: "space-between",
      alignItems: "center", borderBottom: `1px solid ${ink}10`,
    }}>
      <div style={{ ...sans, fontWeight: 700, fontSize: 16, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ display: "inline-block", width: 24, height: 24, borderRadius: "50%", background: accent }}/>
        sushma.evs
      </div>
      <div style={{ display: "flex", gap: 28, ...mono, fontSize: 12 }}>
        <span>about</span>
        <span>work</span>
        <span>projects</span>
        <span>writing</span>
        <span>contact</span>
      </div>
      <button style={{
        background: ink, color: bg, border: "none", padding: "10px 16px",
        borderRadius: 999, ...sans, fontSize: 12, fontWeight: 600, cursor: "pointer",
      }}>↓ Résumé</button>
    </div>
  );

  // hero
  const Hero = () => (
    <div style={{ padding: "80px 64px 56px", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "center" }}>
      <div>
        <div style={{ ...mono, fontSize: 12, color: accent, marginBottom: 20, letterSpacing: "0.06em" }}>
          ★ open to data analyst roles — summer 2026
        </div>
        <h1 style={{ ...sans, fontSize: 72, fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.035em", margin: 0 }}>
          Hi, I'm Sushma —<br/>
          I make sense of <span style={{ ...serif, fontStyle: "italic", fontWeight: 400, color: accent }}>messy data</span> so teams can move with confidence.
        </h1>
        <p style={{ fontSize: 20, lineHeight: 1.55, marginTop: 28, opacity: 0.78, maxWidth: 600 }}>
          I'm a data analyst who likes the unglamorous middle of the stack — defining KPIs before the dashboards, validating the data before the charts, and making sure the metric on the slide actually means what it says.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
          <button style={{ background: accent, color: "white", border: "none", padding: "14px 22px", borderRadius: 999, ...sans, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>See my projects →</button>
          <button style={{ background: "transparent", color: ink, border: `1px solid ${ink}25`, padding: "14px 22px", borderRadius: 999, ...sans, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Get in touch</button>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        {/* photo placeholder */}
        <div style={{
          aspectRatio: "4 / 5", background: soft, borderRadius: 16,
          backgroundImage: `repeating-linear-gradient(135deg, ${ink}06 0, ${ink}06 1px, transparent 1px, transparent 18px)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          ...mono, fontSize: 12, color: `${ink}66`, border: `1px solid ${ink}10`,
        }}>
          headshot placeholder · 4:5
        </div>
        {/* floating card */}
        <div style={{
          position: "absolute", bottom: -16, left: -16, background: ink, color: bg,
          padding: "16px 20px", borderRadius: 12, ...mono, fontSize: 11,
        }}>
          <div style={{ opacity: 0.6 }}>currently</div>
          <div style={{ fontSize: 13, marginTop: 2 }}>Data Analyst @ Kahana</div>
        </div>
        <div style={{
          position: "absolute", top: -12, right: -8, background: bg, padding: "12px 16px",
          borderRadius: 12, border: `1px solid ${ink}15`, boxShadow: `0 4px 16px ${ink}10`,
        }}>
          <div style={{ ...mono, fontSize: 10, opacity: 0.55 }}>GPA</div>
          <div style={{ ...sans, fontSize: 22, fontWeight: 700, color: accent }}>3.8/4.0</div>
        </div>
      </div>
    </div>
  );

  // numbers/highlights row
  const Highlights = () => (
    <div style={{ padding: "0 64px", marginBottom: 80 }}>
      <div style={{
        background: ink, color: bg, borderRadius: 24, padding: "40px 48px",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32,
      }}>
        {[
          { v: "1.2M+", l: "records modeled across projects" },
          { v: "20+", l: "KPIs scoped for early-stage product" },
          { v: "+40%", l: "SQL query performance gain" },
          { v: "−30%", l: "ad hoc analysis time cut" },
        ].map((m, i) => (
          <div key={i} style={{ borderLeft: i === 0 ? "none" : `1px solid ${bg}20`, paddingLeft: i === 0 ? 0 : 24 }}>
            <div style={{ ...sans, fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em" }}>{m.v}</div>
            <div style={{ ...sans, fontSize: 13, opacity: 0.7, marginTop: 4, lineHeight: 1.4 }}>{m.l}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const SectionLabel = ({ kicker, title, subtitle }) => (
    <div style={{ marginBottom: 32 }}>
      <div style={{ ...mono, fontSize: 12, color: accent, marginBottom: 8 }}>{kicker}</div>
      <h2 style={{ ...sans, fontSize: 44, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1, margin: 0 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 17, opacity: 0.7, marginTop: 12, maxWidth: 640, lineHeight: 1.5 }}>{subtitle}</p>}
    </div>
  );

  // About
  const About = () => (
    <div style={{ padding: "60px 64px", background: soft }}>
      <SectionLabel kicker="// about" title="What I actually like doing." />
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "start" }}>
        <div style={{ fontSize: 19, lineHeight: 1.65, opacity: 0.9 }}>
          <p style={{ marginTop: 0 }}>
            Most analytics problems aren't technical — they're definitional. <em>What counts as activation? Which event fires when a user "uses" the product? Is this metric measuring what we think it's measuring?</em> I like sitting in that ambiguity and pulling it apart with the team, then turning the answers into a measurement system that actually holds up.
          </p>
          <p>
            Right now I'm building the analytics framework from scratch for an early-stage AI product. Before that, I built ETL pipelines and anomaly-detection tooling in Germany. In between I picked up a Master's in Data Science from UMBC.
          </p>
          <p>
            I'm strongest when I'm partnering closely with PMs, founders, and engineers — and I genuinely enjoy the part where a stakeholder asks something fuzzy and we work it into a question SQL can answer.
          </p>
        </div>
        <div>
          <div style={{ ...mono, fontSize: 11, color: `${ink}88`, marginBottom: 16, letterSpacing: "0.08em" }}>WHAT I'M GOOD AT</div>
          {[
            ["Measurement strategy", "Translating fuzzy product goals into testable KPIs."],
            ["Warehouse modeling", "Dimensional models in dbt/Snowflake that survive contact with stakeholders."],
            ["Stakeholder partnership", "Comfortable in the room with non-technical folks."],
            ["Pipeline ownership", "Airflow DAGs, dbt tests, idempotent reruns."],
          ].map(([t, d]) => (
            <div key={t} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: `1px solid ${ink}12` }}>
              <div style={{ ...sans, fontSize: 16, fontWeight: 600 }}>{t}</div>
              <div style={{ fontSize: 14, opacity: 0.7, marginTop: 2, lineHeight: 1.45 }}>{d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Skills
  const Skills = () => (
    <div style={{ padding: "80px 64px" }}>
      <SectionLabel kicker="// toolkit" title="Tools I reach for." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {Object.entries(R.skills).map(([cat, items]) => (
          <div key={cat} style={{ background: soft, padding: 24, borderRadius: 16 }}>
            <div style={{ ...mono, fontSize: 11, color: accent, marginBottom: 12, letterSpacing: "0.08em" }}>{cat.toUpperCase()}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {items.map(s => (
                <span key={s} style={{
                  fontSize: 13, padding: "5px 11px", background: bg, borderRadius: 999,
                  border: `1px solid ${ink}10`, fontWeight: 500,
                }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Experience
  const Experience = () => (
    <div style={{ padding: "60px 64px", background: soft }}>
      <SectionLabel kicker="// experience" title="Where I've worked." />
      <div style={{ position: "relative", paddingLeft: 32 }}>
        <div style={{ position: "absolute", left: 8, top: 8, bottom: 8, width: 2, background: `${ink}15` }}/>
        {R.experience.map((job, i) => (
          <div key={i} style={{ position: "relative", marginBottom: 40, paddingBottom: 24 }}>
            <div style={{
              position: "absolute", left: -32, top: 8,
              width: 16, height: 16, borderRadius: "50%",
              background: job.current ? accent : ink, border: `4px solid ${soft}`,
            }}/>
            <div style={{ display: "flex", gap: 16, alignItems: "baseline", marginBottom: 8, flexWrap: "wrap" }}>
              <div style={{ ...sans, fontSize: 24, fontWeight: 700 }}>{job.role} · {job.company}</div>
              {job.current && <span style={{ ...mono, fontSize: 11, color: accent, padding: "2px 8px", background: `${accent}15`, borderRadius: 999 }}>currently here</span>}
            </div>
            <div style={{ ...mono, fontSize: 12, opacity: 0.6, marginBottom: 12 }}>{job.period} · {job.location}</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
              {job.tags.map(t => <span key={t} style={{ fontSize: 11, padding: "3px 9px", background: bg, borderRadius: 999, border: `1px solid ${ink}10` }}>{t}</span>)}
            </div>
            <ul style={{ fontSize: 15, lineHeight: 1.6, paddingLeft: 18, opacity: 0.85, marginTop: 0 }}>
              {job.bullets.map((b, j) => <li key={j} style={{ marginBottom: 8 }}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  // Projects (accordion)
  const Projects = () => (
    <div style={{ padding: "80px 64px" }}>
      <SectionLabel kicker="// projects" title="Things I built recently." subtitle="Two independent projects that put my warehouse modeling and pipeline work end-to-end. Click any to expand the full case study." />
      <div>
        {R.projects.map((p, i) => {
          const isOpen = openSlug === p.slug;
          return (
            <div key={p.slug} style={{ border: `1px solid ${ink}12`, borderRadius: 16, marginBottom: 16, background: isOpen ? soft : bg, overflow: "hidden" }}>
              <button onClick={() => setOpenSlug(isOpen ? null : p.slug)} style={{
                width: "100%", background: "transparent", border: "none", padding: 28,
                textAlign: "left", cursor: "pointer", fontFamily: "inherit", color: ink,
                display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32,
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ ...mono, fontSize: 11, opacity: 0.55, marginBottom: 6 }}>0{i+1} · {p.period}</div>
                  <div style={{ ...sans, fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>{p.title}</div>
                  <div style={{ fontSize: 16, opacity: 0.7, marginTop: 2 }}>{p.subtitle}</div>
                </div>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%", background: isOpen ? accent : `${ink}10`,
                  color: isOpen ? "white" : ink, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, fontWeight: 300, transition: "all 0.2s", flexShrink: 0,
                }}>{isOpen ? "−" : "+"}</div>
              </button>
              {isOpen && (
                <div style={{ padding: "0 28px 28px", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40 }}>
                  <div>
                    <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 0, opacity: 0.85 }}>{p.summary}</p>
                    <div style={{ ...mono, fontSize: 11, opacity: 0.55, marginTop: 20, marginBottom: 8, letterSpacing: "0.08em" }}>WHAT I BUILT</div>
                    <ul style={{ fontSize: 15, lineHeight: 1.6, paddingLeft: 18, opacity: 0.9 }}>
                      {p.details.map((d, j) => <li key={j} style={{ marginBottom: 10 }}>{d}</li>)}
                    </ul>
                  </div>
                  <div>
                    <div style={{ background: bg, padding: 20, borderRadius: 12, border: `1px solid ${ink}10` }}>
                      <div style={{ ...mono, fontSize: 11, opacity: 0.55, marginBottom: 12, letterSpacing: "0.08em" }}>KEY NUMBERS</div>
                      {p.metrics.map(m => (
                        <div key={m.label} style={{ marginBottom: 14 }}>
                          <div style={{ ...sans, fontSize: 28, fontWeight: 700, color: accent, letterSpacing: "-0.02em", lineHeight: 1 }}>{m.value}</div>
                          <div style={{ fontSize: 12, opacity: 0.65, marginTop: 2 }}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 16, ...mono, fontSize: 11, opacity: 0.55, letterSpacing: "0.08em" }}>STACK</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 8 }}>
                      {p.stack.map(t => <span key={t} style={{ fontSize: 12, padding: "4px 10px", background: bg, border: `1px solid ${ink}15`, borderRadius: 999 }}>{t}</span>)}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  // Education + Certs
  const EducationCerts = () => (
    <div style={{ padding: "60px 64px", background: soft, display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48 }}>
      <div>
        <SectionLabel kicker="// education" title="Schooling." />
        <div style={{ background: bg, padding: 28, borderRadius: 16, border: `1px solid ${ink}10` }}>
          <div style={{ ...sans, fontSize: 22, fontWeight: 700 }}>{R.education.degree}</div>
          <div style={{ fontSize: 16, opacity: 0.75, marginTop: 2 }}>{R.education.school}</div>
          <div style={{ display: "flex", gap: 24, marginTop: 16, alignItems: "baseline" }}>
            <div>
              <div style={{ ...sans, fontSize: 28, fontWeight: 700, color: accent }}>3.8</div>
              <div style={{ ...mono, fontSize: 11, opacity: 0.55 }}>GPA / 4.0</div>
            </div>
            <div style={{ ...mono, fontSize: 12, opacity: 0.65 }}>{R.education.period}</div>
          </div>
          <div style={{ ...mono, fontSize: 11, opacity: 0.55, marginTop: 20, marginBottom: 8 }}>COURSEWORK</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {R.education.coursework.map(c => <span key={c} style={{ fontSize: 12, padding: "4px 10px", background: soft, borderRadius: 999 }}>{c}</span>)}
          </div>
        </div>
      </div>
      <div>
        <SectionLabel kicker="// certs" title="Certifications." />
        {R.certifications.map(c => (
          <div key={c.name} style={{ background: bg, padding: 20, borderRadius: 16, border: `1px solid ${ink}10`, display: "flex", gap: 16, alignItems: "center" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${accent}15`, color: accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>✓</div>
            <div>
              <div style={{ ...sans, fontSize: 15, fontWeight: 600 }}>{c.name}</div>
              <div style={{ ...mono, fontSize: 11, opacity: 0.6 }}>{c.issuer} · {c.year}</div>
            </div>
          </div>
        ))}
        <div style={{ marginTop: 16, padding: 16, borderRadius: 16, border: `1px dashed ${ink}20` }}>
          <div style={{ ...mono, fontSize: 11, opacity: 0.55 }}>IN PROGRESS</div>
          <div style={{ fontSize: 14, marginTop: 4 }}>dbt Analytics Engineer · Snowflake SnowPro Core</div>
        </div>
      </div>
    </div>
  );

  // Contact
  const Contact = () => (
    <div style={{ padding: "100px 64px 80px" }}>
      <div style={{
        background: ink, color: bg, padding: 64, borderRadius: 32,
        display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center",
      }}>
        <div>
          <div style={{ ...mono, fontSize: 12, color: accent, marginBottom: 12, letterSpacing: "0.08em" }}>// let's chat</div>
          <h2 style={{ ...sans, fontSize: 64, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, margin: 0 }}>
            Working on something <span style={{ ...serif, fontStyle: "italic", fontWeight: 400, color: accent }}>data-shaped?</span>
          </h2>
          <p style={{ fontSize: 18, opacity: 0.7, marginTop: 24, maxWidth: 540, lineHeight: 1.55 }}>
            I'm actively looking for data analyst roles where I can partner closely with product and ops teams. Reach out — I reply fast.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            ["email", R.email],
            ["linkedin", R.linkedin],
            ["github", R.github],
            ["phone", R.phone],
          ].map(([l, v]) => (
            <a key={l} style={{
              padding: "14px 18px", background: `${bg}10`, borderRadius: 12,
              display: "flex", justifyContent: "space-between", alignItems: "center",
              color: bg, textDecoration: "none",
            }}>
              <span>
                <div style={{ ...mono, fontSize: 11, opacity: 0.55 }}>{l}</div>
                <div style={{ ...sans, fontSize: 14, fontWeight: 500, marginTop: 2 }}>{v}</div>
              </span>
              <span style={{ opacity: 0.5 }}>→</span>
            </a>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between", ...mono, fontSize: 11, opacity: 0.5 }}>
        <span>© 2026 Sushma EVS · made with curiosity</span>
        <span>last updated: may 2026</span>
      </div>
    </div>
  );

  return (
    <div style={wrap}>
      <Nav />
      <Hero />
      <Highlights />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <EducationCerts />
      <Contact />
    </div>
  );
}

window.VariantStory = VariantStory;
