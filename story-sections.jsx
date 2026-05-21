// Story Portfolio — sections (About, Skills, Experience, Projects, etc.)
const { FadeIn, FlowDiagram, CASE_STUDIES, SectionHeader, MiniSparkline } = window;

function About({ theme, fontStack }) {
  const sans = { fontFamily: fontStack };
  const serif = { fontFamily: "'Newsreader', Georgia, serif" };
  const mono = { fontFamily: "'JetBrains Mono', monospace" };
  return (
    <section id="about" style={{ padding: "56px 0" }}>
      <SectionHeader
        title="How I got here..."
        theme={theme} fontStack={fontStack}
      />
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "start" }}>
        <FadeIn style={{ fontSize: 19, lineHeight: 1.65, color: theme.ink }}>
          <p style={{ marginTop: 0 }}>
            While working on ML, I kept running into the same wall — models are only as good as the data feeding them. Messy data doesn't just slow you down; the model learns the mess.
          </p>
          <p>
            That realization pulled me toward analytics engineering. The deeper I went, the more I saw that the real leverage isn't in the model — it's in the layer underneath: clean schemas, well-tested dbt models, pipelines that don't silently break, and <em style={{ ...serif }}>metrics that actually mean what they say</em>.
          </p>
          <p style={{ marginBottom: 0 }}>
            So that's where I work now. I've built end-to-end pipelines on Snowflake and Airflow, designed dbt mart layers on million-row datasets, and partnered with product teams to define KPIs before the dashboards get built. I'm also comfortable in early-stage environments — I've worked directly with founders and core teams, which means I'm used to figuring things out without a playbook and moving fast when the roadmap shifts.
          </p>
        </FadeIn>
        <FadeIn delay={120}>
          <div style={{ ...mono, fontSize: 11, color: theme.muted, marginBottom: 16, letterSpacing: "0.08em" }}>WHAT I'M GOOD AT</div>
          {[
            ["Measurement strategy", "Translating Business goals into testable KPIs that don't collapse under scrutiny."],
            ["Warehouse modeling", "Dimensional models in dbt and Snowflake."],
            ["Stakeholder partnership", "Comfortable in the room with non-technical folks."],
            ["Pipeline ownership", "Airflow DAGs, dbt tests, idempotent reruns — the reliability work."],
          ].map(([t, d], i) => (
            <div key={t} style={{ marginBottom: 18, paddingBottom: 18, borderBottom: i < 3 ? `1px solid ${theme.ink}12` : "none" }}>
              <div style={{ ...sans, fontSize: 16, fontWeight: 600 }}>{t}</div>
              <div style={{ fontSize: 14, color: theme.muted, marginTop: 4, lineHeight: 1.5 }}>{d}</div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

function Skills({ theme, fontStack }) {
  const R = window.RESUME;
  const sans = { fontFamily: fontStack };
  const mono = { fontFamily: "'JetBrains Mono', monospace" };

  return (
    <section id="skills" style={{ padding: "56px 0" }}>
      <SectionHeader
        title="Tools I reach for."
        subtitle="Strongest in the data warehouse layer — SQL, Python, Snowflake, dbt — with practical chops in BI tooling and cloud."
        theme={theme} fontStack={fontStack}
      />
      <FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {Object.entries(R.skills).map(([cat, items]) => (
            <div key={cat} style={{ background: theme.soft, padding: 22, borderRadius: 16, border: `1px solid ${theme.ink}08` }}>
              <div style={{ ...mono, fontSize: 11, color: theme.accent, marginBottom: 12, letterSpacing: "0.08em" }}>{cat.toUpperCase()}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {items.map(s => (
                  <span key={s} style={{
                    fontSize: 13, padding: "5px 11px", background: theme.bg, borderRadius: 999,
                    border: `1px solid ${theme.ink}10`, fontWeight: 500,
                  }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

function Experience({ theme, fontStack }) {
  const R = window.RESUME;
  const sans = { fontFamily: fontStack };
  const mono = { fontFamily: "'JetBrains Mono', monospace" };

  return (
    <section id="experience" style={{ padding: "56px 0" }}>
      <SectionHeader
        title="Where I've worked."
        subtitle="Two roles — different stages, different stacks, same instinct for the data-quality-and-definitions layer."
        theme={theme} fontStack={fontStack}
      />
      <div style={{ position: "relative", paddingLeft: 32 }}>
        <div style={{ position: "absolute", left: 8, top: 8, bottom: 8, width: 2, background: `${theme.ink}15` }}/>
        {R.experience.map((job, i) => (
          <FadeIn key={i} delay={i * 100} style={{ position: "relative", marginBottom: 44 }}>
            <div style={{
              position: "absolute", left: -32, top: 6,
              width: 18, height: 18, borderRadius: "50%",
              background: job.current ? theme.accent : theme.ink, border: `4px solid ${theme.bg}`,
              boxShadow: job.current ? `0 0 0 4px ${theme.accent}25` : "none",
            }}/>
            <div style={{ background: theme.soft, padding: 28, borderRadius: 16, border: `1px solid ${theme.ink}08` }}>
              <div style={{ display: "flex", gap: 14, alignItems: "baseline", flexWrap: "wrap", marginBottom: 6 }}>
                <div style={{ ...sans, fontSize: 24, fontWeight: 700 }}>{job.role}</div>
                <div style={{ fontSize: 16, color: theme.muted }}>· {job.company}</div>
                {job.current && (
                  <span style={{ ...mono, fontSize: 11, color: theme.accent, padding: "3px 10px", background: `${theme.accent}15`, borderRadius: 999, fontWeight: 500 }}>currently here</span>
                )}
              </div>
              <div style={{ ...mono, fontSize: 12, color: theme.muted, marginBottom: 14 }}>{job.period} · {job.location}</div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
                {job.tags.map(t => <span key={t} style={{ fontSize: 11, padding: "3px 10px", background: theme.bg, borderRadius: 999, border: `1px solid ${theme.ink}10`, color: theme.muted }}>{t}</span>)}
              </div>
              <ul style={{ fontSize: 15, lineHeight: 1.6, paddingLeft: 18, color: theme.ink, marginTop: 0, marginBottom: 0 }}>
                {job.bullets.map((b, j) => <li key={j} style={{ marginBottom: 8 }}>{b}</li>)}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ── Project case studies ────────────────────────────────────────────────
function Projects({ theme, fontStack }) {
  const R = window.RESUME;
  const sans = { fontFamily: fontStack };
  const mono = { fontFamily: "'JetBrains Mono', monospace" };
  const [openSlug, setOpenSlug] = React.useState(R.projects[0].slug);

  return (
    <section id="projects" style={{ padding: "56px 0" }}>
      <SectionHeader
        title="Things I built recently."
        subtitle="Two independent end-to-end projects — warehouse modeling, pipeline orchestration, and BI layered all the way through. Click any to expand the full case study."
        theme={theme} fontStack={fontStack}
      />
      <div>
        {R.projects.map((p, i) => {
          const isOpen = openSlug === p.slug;
          const cs = CASE_STUDIES[p.slug];
          return (
            <FadeIn key={p.slug} delay={i * 80} style={{ marginBottom: 16 }}>
              <div style={{
                border: `1px solid ${isOpen ? `${theme.accent}40` : `${theme.ink}12`}`,
                borderRadius: 20, background: isOpen ? theme.soft : theme.bg,
                overflow: "hidden", transition: "all 0.3s",
              }}>
                <button onClick={() => setOpenSlug(isOpen ? null : p.slug)} style={{
                  width: "100%", background: "transparent", border: "none", padding: "28px 32px",
                  textAlign: "left", cursor: "pointer", fontFamily: "inherit", color: theme.ink,
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32,
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ ...mono, fontSize: 11, color: theme.muted, marginBottom: 8 }}>0{i+1} · {p.period} · {p.kind}</div>
                    <div style={{ ...sans, fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em" }}>{p.title}</div>
                    <div style={{ fontSize: 17, color: theme.muted, marginTop: 4 }}>{p.subtitle}</div>
                    {!isOpen && (
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 14 }}>
                        {p.stack.slice(0, 5).map(t => <span key={t} style={{ fontSize: 11, padding: "3px 10px", background: theme.soft, borderRadius: 999, color: theme.muted, border: `1px solid ${theme.ink}10` }}>{t}</span>)}
                      </div>
                    )}
                  </div>
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: isOpen ? theme.accent : `${theme.ink}10`,
                    color: isOpen ? "#fff" : theme.ink,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 24, fontWeight: 300, transition: "all 0.2s", flexShrink: 0,
                  }}>{isOpen ? "−" : "+"}</div>
                </button>

                {isOpen && cs && (
                  <div style={{ padding: "0 32px 32px" }}>
                    {/* Meta row */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, padding: "20px 0", borderTop: `1px solid ${theme.ink}12` }}>
                      <Meta label="ROLE" value={cs.role} mono={mono} theme={theme}/>
                      <Meta label="DURATION" value={cs.duration} mono={mono} theme={theme}/>
                      <Meta label="STATUS" value={p.slug === "medicare-part-d" ? "Phase 2 in progress" : "Shipped"} mono={mono} theme={theme} accent={p.slug === "medicare-part-d"}/>
                    </div>

                    {/* Key numbers */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 28 }}>
                      {cs.metrics.map(m => (
                        <div key={m.label} style={{ background: theme.bg, padding: 20, borderRadius: 12, border: `1px solid ${theme.ink}10` }}>
                          <div style={{ ...sans, fontSize: 32, fontWeight: 700, color: theme.accent, letterSpacing: "-0.02em", lineHeight: 1 }}>{m.value}</div>
                          <div style={{ fontSize: 12, color: theme.muted, marginTop: 6 }}>{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Problem / Approach */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 28 }}>
                      <div>
                        <div style={{ ...mono, fontSize: 11, color: theme.accent, marginBottom: 8, letterSpacing: "0.08em" }}>THE PROBLEM</div>
                        <p style={{ fontSize: 15, lineHeight: 1.6, color: theme.ink, margin: 0 }}>{cs.problem}</p>
                      </div>
                      <div>
                        <div style={{ ...mono, fontSize: 11, color: theme.accent, marginBottom: 8, letterSpacing: "0.08em" }}>MY APPROACH</div>
                        <p style={{ fontSize: 15, lineHeight: 1.6, color: theme.ink, margin: 0 }}>{cs.approach}</p>
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div style={{ marginBottom: 28 }}>
                      <div style={{ ...mono, fontSize: 11, color: theme.accent, marginBottom: 10, letterSpacing: "0.08em" }}>OUTCOMES</div>
                      <ul style={{ fontSize: 15, lineHeight: 1.6, paddingLeft: 18, color: theme.ink, margin: 0 }}>
                        {cs.outcomes.map((o, j) => <li key={j} style={{ marginBottom: 8 }}>{o}</li>)}
                      </ul>
                    </div>

                    {/* Stack + GitHub link */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
                      <div style={{ flex: "1 1 auto", minWidth: 0 }}>
                        <div style={{ ...mono, fontSize: 11, color: theme.accent, marginBottom: 8, letterSpacing: "0.08em" }}>STACK</div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                          {cs.stack.map(t => <span key={t} style={{ fontSize: 12, padding: "5px 12px", background: theme.bg, border: `1px solid ${theme.ink}15`, borderRadius: 999, color: theme.ink, fontWeight: 500 }}>{t}</span>)}
                        </div>
                      </div>
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener" style={{
                          flex: "0 0 auto",
                          background: theme.ink, color: theme.bg, padding: "12px 18px",
                          borderRadius: 999, ...sans, fontSize: 13, fontWeight: 600,
                          textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                          whiteSpace: "nowrap",
                        }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.69-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.93 10.93 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .3.21.67.8.55C20.71 21.39 24 17.08 24 12 24 5.65 18.85.5 12 .5z"/>
                          </svg>
                          View on GitHub
                          <span style={{ opacity: 0.7 }}>↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}

function Meta({ label, value, mono, theme, accent }) {
  return (
    <div>
      <div style={{ ...mono, fontSize: 10, color: theme.muted, letterSpacing: "0.08em" }}>{label}</div>
      <div style={{ fontSize: 13, marginTop: 4, color: accent ? theme.accent : theme.ink, fontWeight: accent ? 600 : 400 }}>{value}</div>
    </div>
  );
}

// ── Currently building widget ───────────────────────────────────────────
function CurrentlyBuilding({ theme, fontStack }) {
  const sans = { fontFamily: fontStack };
  const mono = { fontFamily: "'JetBrains Mono', monospace" };
  const serif = { fontFamily: "'Newsreader', Georgia, serif" };

  return (
    <section id="now" style={{ padding: "56px 0" }}>
      <SectionHeader
        title={<span>What I'm <span style={{ ...serif, fontStyle: "italic", fontWeight: 400, color: theme.accent }}>building</span> right now.</span>}
        subtitle="A live look at the work in motion — updated as projects progress."
        theme={theme} fontStack={fontStack}
      />
      <FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <NowCard
            heading="Phase 2: RAG layer for Medicare prescriber data"
            body="In-database vector embeddings + cosine-similarity retrieval natively on Snowflake. FastAPI backend on Mistral via Cortex. Next.js chat UI returning answers with cited sources and multi-turn memory."
            badge="in progress"
            badgeColor={theme.accent}
            sub="Medicare Part D · Independent"
            theme={theme} sans={sans} mono={mono}
          />
          <NowCard
            heading="Product analytics framework for Oasis launch"
            body="Scoping 20+ KPIs across activation, retention, monetization, and feedback quality. Mapping Supabase events to the funnel. Building the measurement baseline before launch traffic hits."
            badge="active role"
            badgeColor={theme.accent}
            sub="Kahana · Chicago (Remote)"
            theme={theme} sans={sans} mono={mono}
          />
        </div>
      </FadeIn>
    </section>
  );
}

function NowCard({ heading, body, badge, badgeColor, sub, theme, sans, mono }) {
  return (
    <div style={{ background: theme.soft, padding: 28, borderRadius: 20, border: `1px solid ${theme.ink}08`, display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div style={{ ...mono, fontSize: 11, color: theme.muted }}>{sub}</div>
        <span style={{ ...mono, fontSize: 10, color: badgeColor, padding: "3px 10px", background: `${badgeColor}15`, borderRadius: 999, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: badgeColor, display: "inline-block" }}/>
          {badge}
        </span>
      </div>
      <div style={{ ...sans, fontSize: 20, fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.015em" }}>{heading}</div>
      <p style={{ fontSize: 14, lineHeight: 1.55, color: theme.muted, margin: 0 }}>{body}</p>
    </div>
  );
}

function Education({ theme, fontStack }) {
  const R = window.RESUME;
  const sans = { fontFamily: fontStack };
  const mono = { fontFamily: "'JetBrains Mono', monospace" };

  return (
    <section id="education" style={{ padding: "56px 0", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48 }}>
      <FadeIn>
        <h2 style={{ ...sans, fontSize: 40, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 28px" }}>Schooling.</h2>
        <div style={{ background: theme.soft, padding: 28, borderRadius: 20, border: `1px solid ${theme.ink}08` }}>
          <div style={{ ...sans, fontSize: 22, fontWeight: 700, lineHeight: 1.2 }}>{R.education.degree}</div>
          <div style={{ fontSize: 16, color: theme.muted, marginTop: 4 }}>{R.education.school}</div>
          <div style={{ display: "flex", gap: 28, marginTop: 20, alignItems: "baseline" }}>
            <div>
              <div style={{ ...sans, fontSize: 32, fontWeight: 700, color: theme.accent, lineHeight: 1 }}>3.8</div>
              <div style={{ ...mono, fontSize: 11, color: theme.muted, marginTop: 4 }}>GPA / 4.0</div>
            </div>
            <div style={{ ...mono, fontSize: 12, color: theme.muted }}>{R.education.period}</div>
          </div>
          <div style={{ ...mono, fontSize: 11, color: theme.muted, marginTop: 22, marginBottom: 8, letterSpacing: "0.08em" }}>RELEVANT COURSEWORK</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {R.education.coursework.map(c => <span key={c} style={{ fontSize: 12, padding: "4px 10px", background: theme.bg, borderRadius: 999, border: `1px solid ${theme.ink}10` }}>{c}</span>)}
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={100}>
        <h2 style={{ ...sans, fontSize: 40, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 28px" }}>Certifications.</h2>
        {R.certifications.map(c => (
          <div key={c.name} style={{ background: theme.soft, padding: 20, borderRadius: 16, border: `1px solid ${theme.ink}08`, display: "flex", gap: 16, alignItems: "center", marginBottom: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: `${theme.accent}15`, color: theme.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700 }}>✓</div>
            <div>
              <div style={{ ...sans, fontSize: 15, fontWeight: 600 }}>{c.name}</div>
              <div style={{ ...mono, fontSize: 11, color: theme.muted, marginTop: 2 }}>{c.issuer} · {c.year}</div>
            </div>
          </div>
        ))}
      </FadeIn>
    </section>
  );
}

function Contact({ theme, fontStack }) {
  const R = window.RESUME;
  const sans = { fontFamily: fontStack };
  const serif = { fontFamily: "'Newsreader', Georgia, serif" };
  const mono = { fontFamily: "'JetBrains Mono', monospace" };

  return (
    <section id="contact" style={{ padding: "56px 0 80px" }}>
      <FadeIn>
        <div style={{
          background: theme.ink, color: theme.bg, padding: 64, borderRadius: 32,
          display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "center",
        }}>
          <div>
            <h2 style={{ ...sans, fontSize: 64, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1, margin: 0 }}>
              Working on something <span style={{ ...serif, fontStyle: "italic", fontWeight: 400, color: theme.accent }}>data-shaped?</span>
            </h2>
            <p style={{ fontSize: 18, opacity: 0.65, marginTop: 24, maxWidth: 540, lineHeight: 1.55 }}>
              I'm actively looking for Analytics roles where I can partner closely with product and ops teams. Reach out — I reply fast, and I'm happy to talk through a problem before there's any commitment.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              ["email", R.email, "mailto:" + R.email],
              ["linkedin", R.linkedin, "https://" + R.linkedin],
              ["github", R.github, "https://" + R.github],
              ["phone", R.phone, "tel:" + R.phone.replace(/\s/g, "")],
            ].map(([l, v, href]) => (
              <a key={l} href={href} style={{
                padding: "16px 20px", background: `${theme.bg}10`, borderRadius: 12,
                display: "flex", justifyContent: "space-between", alignItems: "center",
                color: theme.bg, textDecoration: "none", transition: "background 0.2s",
              }}>
                <span>
                  <div style={{ ...mono, fontSize: 11, opacity: 0.55 }}>{l}</div>
                  <div style={{ ...sans, fontSize: 14, fontWeight: 500, marginTop: 4 }}>{v}</div>
                </span>
                <span style={{ opacity: 0.4 }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function Footer({ theme, fontStack }) {
  const mono = { fontFamily: "'JetBrains Mono', monospace" };
  return (
    <footer style={{ borderTop: `1px solid ${theme.ink}10`, padding: "28px 48px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", justifyContent: "space-between", ...mono, fontSize: 11, color: theme.muted }}>
        <span>© 2026 Sushma EVS · made with curiosity</span>
        <span>last updated · may 2026 · v3.0</span>
      </div>
    </footer>
  );
}

window.About = About;
window.Skills = Skills;
window.Experience = Experience;
window.Projects = Projects;
window.CurrentlyBuilding = CurrentlyBuilding;
window.Education = Education;
window.Contact = Contact;
window.Footer = Footer;
