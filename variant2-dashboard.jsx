// Variant 2: Dashboard / Terminal — monospace, sidebar nav, KPI tiles, data-themed
function VariantDashboard({ accent = "#16a34a", bg = "#0d0f12", ink = "#e6e8ec", grid = "#1f2329" }) {
  const R = window.RESUME;
  const [openProject, setOpenProject] = React.useState(null);

  const mono = { fontFamily: "'JetBrains Mono', ui-monospace, 'SF Mono', monospace" };
  const sans = { fontFamily: "'Geist', 'Inter Tight', system-ui, sans-serif" };

  const wrap = {
    width: "100%",
    minHeight: "100%",
    background: bg,
    color: ink,
    ...mono,
    fontSize: 13,
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    backgroundImage: `radial-gradient(circle at 1px 1px, ${grid} 1px, transparent 0)`,
    backgroundSize: "24px 24px",
  };
  const dim = { opacity: 0.55 };

  // Top status bar
  const TopBar = () => (
    <div style={{
      borderBottom: `1px solid ${grid}`,
      padding: "10px 24px",
      display: "flex", justifyContent: "space-between",
      ...mono, fontSize: 11, background: bg,
      position: "sticky", top: 0, zIndex: 10,
    }}>
      <div style={{ display: "flex", gap: 18 }}>
        <span><span style={{ color: accent }}>●</span> portfolio.sushma_evs</span>
        <span style={dim}>main</span>
        <span style={dim}>last_deploy: 2026-05-20</span>
      </div>
      <div style={{ display: "flex", gap: 18 }}>
        <span style={dim}>↑ {R.email}</span>
        <span style={dim}>v2.6.0</span>
      </div>
    </div>
  );

  const Sidebar = () => (
    <div style={{
      width: 200, borderRight: `1px solid ${grid}`, padding: "32px 20px",
      ...mono, fontSize: 11, position: "sticky", top: 41, alignSelf: "flex-start",
    }}>
      <div style={{ ...sans, fontSize: 18, fontWeight: 600, marginBottom: 2, letterSpacing: "-0.01em" }}>{R.name}</div>
      <div style={{ ...dim, marginBottom: 28 }}>data analyst</div>
      <div style={{ ...dim, marginBottom: 8 }}>SECTIONS</div>
      {[
        ["00", "summary"],
        ["01", "skills"],
        ["02", "experience"],
        ["03", "projects"],
        ["04", "education"],
        ["05", "certs"],
        ["06", "contact"],
      ].map(([n, name]) => (
        <div key={n} style={{ padding: "5px 0", display: "flex", gap: 12 }}>
          <span style={dim}>{n}</span>
          <span>{name}</span>
        </div>
      ))}
      <div style={{ marginTop: 32, paddingTop: 16, borderTop: `1px solid ${grid}` }}>
        <div style={dim}>STATUS</div>
        <div style={{ marginTop: 4 }}><span style={{ color: accent }}>●</span> open_to_work</div>
        <div style={{ marginTop: 12, ...dim }}>BASED</div>
        <div>USA · remote</div>
      </div>
    </div>
  );

  // KPI tile
  const KPI = ({ label, value, trend, sparkline }) => (
    <div style={{ border: `1px solid ${grid}`, padding: 16, background: `${grid}55`, position: "relative" }}>
      <div style={{ ...dim, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
      <div style={{ ...sans, fontSize: 32, fontWeight: 500, marginTop: 6, letterSpacing: "-0.02em" }}>{value}</div>
      {trend && <div style={{ fontSize: 10, color: accent, marginTop: 4 }}>↑ {trend}</div>}
      {sparkline && <Spark points={sparkline} />}
    </div>
  );

  const Spark = ({ points, w = 100, h = 22 }) => {
    const max = Math.max(...points), min = Math.min(...points);
    const path = points.map((p, i) => {
      const x = (i / (points.length - 1)) * w;
      const y = h - ((p - min) / (max - min || 1)) * h;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(" ");
    return (
      <svg width={w} height={h} style={{ display: "block", marginTop: 8 }}>
        <path d={path} stroke={accent} strokeWidth="1.2" fill="none" />
        <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill={accent} opacity="0.12" />
      </svg>
    );
  };

  const SectionHead = ({ n, title, sub }) => (
    <div style={{ marginBottom: 24, paddingBottom: 12, borderBottom: `1px solid ${grid}`, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
      <div>
        <div style={{ ...dim, fontSize: 10, marginBottom: 4 }}>// {n}</div>
        <div style={{ ...sans, fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em" }}>{title}</div>
      </div>
      {sub && <div style={{ ...dim, fontSize: 11 }}>{sub}</div>}
    </div>
  );

  return (
    <div style={wrap}>
      <TopBar />
      <div style={{ display: "flex", padding: "0 24px" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "32px 36px 80px 36px", minWidth: 0 }}>
          {/* HERO / SUMMARY */}
          <div style={{ marginBottom: 56 }}>
            <div style={{ ...dim, fontSize: 11, marginBottom: 12 }}>$ cat about.md</div>
            <h1 style={{ ...sans, fontSize: 64, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.03em", margin: 0 }}>
              Data Analyst building <span style={{ color: accent }}>measurement systems</span> for product & ops teams.
            </h1>
            <p style={{ ...sans, fontSize: 18, lineHeight: 1.5, opacity: 0.75, marginTop: 24, maxWidth: 720 }}>
              {R.summary}
            </p>

            {/* KPI strip */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 32 }}>
              <KPI label="records modeled" value="1.2M+" sparkline={[2, 5, 4, 9, 8, 14, 22, 32]} />
              <KPI label="SQL perf gain" value="+40%" trend="vs baseline" />
              <KPI label="ad hoc time" value="−30%" trend="vs prior workflow" />
              <KPI label="KPIs scoped" value="20+" sparkline={[1, 3, 4, 7, 9, 12, 16, 20]} />
            </div>
          </div>

          {/* SKILLS */}
          <SectionHead n="01.skills" title="Toolkit" sub={`${R.skillsProficiency.length} primary tools`} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 56 }}>
            <div>
              {R.skillsProficiency.map((s) => (
                <div key={s.name} style={{ marginBottom: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12 }}>
                    <span>{s.name}</span>
                    <span style={dim}>{s.years}y</span>
                  </div>
                  <div style={{ height: 4, background: grid, position: "relative" }}>
                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${s.level}%`, background: accent }} />
                  </div>
                </div>
              ))}
            </div>
            <div>
              {Object.entries(R.skills).map(([cat, items]) => (
                <div key={cat} style={{ marginBottom: 16 }}>
                  <div style={{ ...dim, fontSize: 10, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em" }}>{cat}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {items.map((s) => (
                      <span key={s} style={{ fontSize: 11, padding: "3px 7px", border: `1px solid ${grid}`, background: `${grid}66` }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <SectionHead n="02.experience" title="Roles" sub="career timeline" />
          <div style={{ marginBottom: 56 }}>
            {R.experience.map((job, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 32, paddingBottom: 28, marginBottom: 28, borderBottom: i < R.experience.length - 1 ? `1px dashed ${grid}` : "none" }}>
                <div>
                  <div style={{ fontSize: 11, ...dim }}>{job.period}</div>
                  <div style={{ fontSize: 11, ...dim, marginTop: 4 }}>{job.location}</div>
                  {job.current && (
                    <div style={{ marginTop: 12, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, color: accent }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent, display: "inline-block", boxShadow: `0 0 8px ${accent}` }}/>
                      ACTIVE
                    </div>
                  )}
                </div>
                <div>
                  <div style={{ ...sans, fontSize: 22, fontWeight: 500 }}>{job.role}</div>
                  <div style={{ fontSize: 13, opacity: 0.75 }}>@ {job.company}</div>
                  <div style={{ display: "flex", gap: 6, marginTop: 12, flexWrap: "wrap" }}>
                    {job.tags.map(t => <span key={t} style={{ fontSize: 10, padding: "2px 8px", background: `${accent}1a`, color: accent }}>{t}</span>)}
                  </div>
                  <ul style={{ ...sans, fontSize: 14, lineHeight: 1.6, paddingLeft: 18, marginTop: 14, opacity: 0.85 }}>
                    {job.bullets.map((b, j) => <li key={j} style={{ marginBottom: 6 }}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* PROJECTS */}
          <SectionHead n="03.projects" title="Selected work" sub="click any to expand" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 56 }}>
            {R.projects.map((p, i) => (
              <button key={p.slug} onClick={() => setOpenProject(p)} style={{
                textAlign: "left", background: `${grid}55`, border: `1px solid ${grid}`,
                padding: 20, cursor: "pointer", color: ink, fontFamily: "inherit",
                display: "flex", flexDirection: "column", gap: 14,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.background = `${grid}99`; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = grid; e.currentTarget.style.background = `${grid}55`; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, ...dim }}>
                  <span>PROJECT_0{i+1}</span><span>{p.period}</span>
                </div>
                <div>
                  <div style={{ ...sans, fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em" }}>{p.title}</div>
                  <div style={{ fontSize: 12, opacity: 0.6, marginTop: 2 }}>{p.subtitle}</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                  {p.metrics.map(m => (
                    <div key={m.label} style={{ border: `1px solid ${grid}`, padding: "8px 10px" }}>
                      <div style={{ ...sans, fontSize: 16, color: accent, fontWeight: 500 }}>{m.value}</div>
                      <div style={{ fontSize: 9, ...dim, marginTop: 2, textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.label}</div>
                    </div>
                  ))}
                </div>
                <p style={{ ...sans, fontSize: 13, lineHeight: 1.5, margin: 0, opacity: 0.75 }}>{p.summary}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {p.stack.map(t => <span key={t} style={{ fontSize: 10, padding: "2px 6px", background: bg, border: `1px solid ${grid}` }}>{t}</span>)}
                </div>
                <div style={{ fontSize: 11, color: accent, marginTop: "auto" }}>→ view_case_study()</div>
              </button>
            ))}
          </div>

          {/* EDUCATION + CERTS */}
          <SectionHead n="04.education" title="Background" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }}>
            <div style={{ border: `1px solid ${grid}`, padding: 24, background: `${grid}55` }}>
              <div style={{ ...dim, fontSize: 11, marginBottom: 8 }}>{R.education.period}</div>
              <div style={{ ...sans, fontSize: 20, fontWeight: 500 }}>{R.education.degree}</div>
              <div style={{ fontSize: 13, opacity: 0.75, marginTop: 2 }}>{R.education.school}</div>
              <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
                <div>
                  <div style={{ ...sans, fontSize: 24, color: accent }}>3.8</div>
                  <div style={{ fontSize: 10, ...dim }}>GPA / 4.0</div>
                </div>
              </div>
              <div style={{ marginTop: 16, fontSize: 11, ...dim }}>COURSEWORK</div>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginTop: 6 }}>
                {R.education.coursework.map(c => <span key={c} style={{ fontSize: 10, padding: "2px 6px", border: `1px solid ${grid}` }}>{c}</span>)}
              </div>
            </div>
            <div style={{ border: `1px solid ${grid}`, padding: 24, background: `${grid}55` }}>
              <div style={{ ...dim, fontSize: 11, marginBottom: 8 }}>// 05.certs</div>
              {R.certifications.map(c => (
                <div key={c.name}>
                  <div style={{ ...sans, fontSize: 18, fontWeight: 500 }}>{c.name}</div>
                  <div style={{ fontSize: 12, opacity: 0.75 }}>{c.issuer} · {c.year}</div>
                </div>
              ))}
              <div style={{ marginTop: 16, height: 1, background: grid }}/>
              <div style={{ marginTop: 16, ...dim, fontSize: 11 }}>NEXT</div>
              <div style={{ fontSize: 12, marginTop: 4 }}>dbt Analytics Engineer · planned 2026</div>
              <div style={{ fontSize: 12, marginTop: 4 }}>Snowflake SnowPro Core · planned 2026</div>
            </div>
          </div>

          {/* CONTACT */}
          <SectionHead n="06.contact" title="$ open_to_work" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{ border: `1px solid ${grid}`, padding: 24 }}>
              <div style={{ fontSize: 11, ...dim, marginBottom: 12 }}>// channels</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
                <div><span style={dim}>email&nbsp;→</span> {R.email}</div>
                <div><span style={dim}>phone&nbsp;→</span> {R.phone}</div>
                <div><span style={dim}>linkdn →</span> {R.linkedin}</div>
                <div><span style={dim}>github →</span> {R.github}</div>
              </div>
            </div>
            <div style={{ border: `1px solid ${grid}`, padding: 24, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 11, ...dim, marginBottom: 8 }}>// resume</div>
                <div style={{ ...sans, fontSize: 16, lineHeight: 1.4 }}>Grab the full PDF — same content, paper-friendly.</div>
              </div>
              <button style={{
                marginTop: 16, background: accent, color: bg, border: "none", padding: "12px 18px",
                fontFamily: "inherit", fontSize: 12, cursor: "pointer", textAlign: "left",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                ↓ download_cv.pdf <span>→</span>
              </button>
            </div>
          </div>

          {/* footer */}
          <div style={{ marginTop: 56, paddingTop: 16, borderTop: `1px solid ${grid}`, display: "flex", justifyContent: "space-between", fontSize: 10, ...dim }}>
            <span>© 2026 sushma_evs · built with care</span>
            <span>system: stable · uptime: ∞</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {openProject && (
        <div onClick={() => setOpenProject(null)} style={{
          position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)",
          display: "flex", alignItems: "center", justifyContent: "center", padding: 60, zIndex: 100,
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: bg, border: `1px solid ${accent}55`, padding: 36,
            maxWidth: 760, width: "100%", maxHeight: "85%", overflow: "auto",
            ...mono, position: "relative",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ ...dim, fontSize: 11 }}>// case_study/{openProject.slug}</span>
              <button onClick={() => setOpenProject(null)} style={{ background: "transparent", border: `1px solid ${grid}`, color: ink, padding: "4px 10px", fontFamily: "inherit", fontSize: 11, cursor: "pointer" }}>esc ✕</button>
            </div>
            <div style={{ ...sans, fontSize: 36, fontWeight: 500, letterSpacing: "-0.02em" }}>{openProject.title}</div>
            <div style={{ fontSize: 14, opacity: 0.7, marginBottom: 20 }}>{openProject.subtitle} · {openProject.period}</div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${openProject.metrics.length}, 1fr)`, gap: 8, margin: "16px 0 24px" }}>
              {openProject.metrics.map(m => (
                <div key={m.label} style={{ border: `1px solid ${grid}`, padding: 12, background: `${grid}55` }}>
                  <div style={{ ...sans, fontSize: 22, color: accent, fontWeight: 500 }}>{m.value}</div>
                  <div style={{ fontSize: 10, ...dim, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.label}</div>
                </div>
              ))}
            </div>
            <ul style={{ ...sans, paddingLeft: 18, fontSize: 14, lineHeight: 1.6, opacity: 0.9 }}>
              {openProject.details.map((d, i) => <li key={i} style={{ marginBottom: 10 }}>{d}</li>)}
            </ul>
            <div style={{ marginTop: 16, ...dim, fontSize: 11 }}>STACK</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 6 }}>
              {openProject.stack.map(t => <span key={t} style={{ fontSize: 11, padding: "3px 8px", background: `${grid}`, border: `1px solid ${grid}` }}>{t}</span>)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

window.VariantDashboard = VariantDashboard;
