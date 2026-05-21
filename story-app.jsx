// Story Portfolio — main app
const { useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle } = window;
const { PALETTES_V3, darken, FadeIn, useActiveSection, useScrollProgress, MiniSparkline, SectionHeader } = window;
const { About, Skills, Experience, Projects, CurrentlyBuilding, Education, Contact, Footer } = window;

const SECTIONS = ["top", "about", "skills", "experience", "projects", "now", "education", "contact"];

function StoryApp() {
  const [t, setTweak] = useTweaks(/*EDITMODE-BEGIN*/{
    "palette": "forest",
    "dark": false,
    "font": "manrope"
  }/*EDITMODE-END*/);

  const basePal = PALETTES_V3[t.palette] || PALETTES_V3.forest;
  const theme = t.dark ? darken(basePal) : basePal;
  const accent = theme.accent;

  const fontStack = t.font === "geist"
    ? "'Geist', system-ui, sans-serif"
    : "'Manrope', system-ui, sans-serif";

  const active = useActiveSection(SECTIONS);
  const progress = useScrollProgress();

  const R = window.RESUME;
  const sans = { fontFamily: fontStack };
  const serif = { fontFamily: "'Newsreader', Georgia, serif" };
  const mono = { fontFamily: "'JetBrains Mono', ui-monospace, monospace" };

  return (
    <div style={{ ...sans, background: theme.bg, color: theme.ink, minHeight: "100vh" }}>
      {/* Scroll progress */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, background: "transparent", zIndex: 50, pointerEvents: "none" }}>
        <div style={{ height: "100%", width: `${progress * 100}%`, background: accent, transition: "width 0.1s linear" }} />
      </div>

      <Nav active={active} theme={theme} fontStack={fontStack} />

      <main style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px" }}>
        <Hero theme={theme} fontStack={fontStack} />
        <Highlights theme={theme} fontStack={fontStack} />
        <About theme={theme} fontStack={fontStack} />
        <Skills theme={theme} fontStack={fontStack} />
        <Experience theme={theme} fontStack={fontStack} />
        <Projects theme={theme} fontStack={fontStack} />
        <CurrentlyBuilding theme={theme} fontStack={fontStack} />
        <Education theme={theme} fontStack={fontStack} />
        <Contact theme={theme} fontStack={fontStack} />
      </main>

      <Footer theme={theme} fontStack={fontStack} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme">
          <TweakRadio
            label="Palette"
            value={t.palette}
            options={[
              { value: "forest", label: "Forest" },
              { value: "warm", label: "Warm" },
              { value: "ocean", label: "Ocean" },
              { value: "rust", label: "Rust" },
              { value: "ink", label: "Ink" },
            ]}
            onChange={(v) => setTweak("palette", v)}
          />
          <TweakToggle label="Dark mode" value={t.dark} onChange={(v) => setTweak("dark", v)} />
          <TweakRadio
            label="Font"
            value={t.font}
            options={[
              { value: "manrope", label: "Manrope" },
              { value: "geist", label: "Geist" },
            ]}
            onChange={(v) => setTweak("font", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

// ── Navigation ──────────────────────────────────────────────────────────
function Nav({ active, theme, fontStack }) {
  const sans = { fontFamily: fontStack };
  const mono = { fontFamily: "'JetBrains Mono', monospace" };
  const items = [
    { id: "about", label: "about" },
    { id: "skills", label: "toolkit" },
    { id: "experience", label: "work" },
    { id: "projects", label: "projects" },
    { id: "now", label: "now" },
    { id: "contact", label: "contact" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 40,
      background: `${theme.bg}ee`, backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${theme.ink}10`,
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "16px 48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" style={{ ...sans, fontWeight: 700, fontSize: 16, color: theme.ink, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ display: "inline-block", width: 22, height: 22, borderRadius: "50%", background: theme.accent }}/>
          sushma.evs
        </a>
        <nav style={{ display: "flex", gap: 4, ...mono, fontSize: 12 }}>
          {items.map(it => (
            <a key={it.id} href={`#${it.id}`} style={{
              padding: "6px 12px", borderRadius: 999, textDecoration: "none",
              color: active === it.id ? theme.accent : theme.muted,
              background: active === it.id ? `${theme.accent}15` : "transparent",
              transition: "all 0.2s", fontWeight: active === it.id ? 600 : 400,
            }}>{it.label}</a>
          ))}
        </nav>
        <a href="#" style={{
          background: theme.ink, color: theme.bg, padding: "10px 16px",
          borderRadius: 999, ...sans, fontSize: 12, fontWeight: 600,
          textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6,
          whiteSpace: "nowrap",
        }}>↓ Résumé</a>
      </div>
    </header>
  );
}

// ── Hero ────────────────────────────────────────────────────────────────
function Hero({ theme, fontStack }) {
  const R = window.RESUME;
  const sans = { fontFamily: fontStack };
  const serif = { fontFamily: "'Newsreader', Georgia, serif" };
  const mono = { fontFamily: "'JetBrains Mono', monospace" };

  return (
    <section id="top" style={{ padding: "64px 0 32px", display: "grid", gridTemplateColumns: "minmax(0, 1.25fr) minmax(0, 1fr)", gap: 56, alignItems: "center" }}>
      <FadeIn>
        <div style={{ ...mono, fontSize: 12, color: theme.accent, marginBottom: 24, letterSpacing: "0.06em", display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: theme.accent, boxShadow: `0 0 12px ${theme.accent}` }}/>
          Open to BI Analyst · Data Analyst · Analytics Engineer Roles
        </div>
        <h1 style={{ ...sans, fontSize: "clamp(48px, 6.2vw, 76px)", fontWeight: 700, lineHeight: 1.02, letterSpacing: "-0.035em", margin: 0 }}>
          Hi, I'm Sushma —<br/>
          I turn <span style={{ ...serif, fontStyle: "italic", fontWeight: 400, color: theme.accent }}>raw data</span> into decisions teams can act on.
        </h1>
        <p style={{ fontSize: 20, lineHeight: 1.55, marginTop: 28, color: theme.muted, maxWidth: 620 }}>
          Data Analyst with <strong style={{ color: theme.ink, fontWeight: 600 }}>1+ year of experience</strong> across the analytics stack — modeling data in dbt and Snowflake, surfacing it in BI dashboards, and partnering with stakeholders on what the numbers actually mean.
        </p>
        <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
          <a href="#projects" style={{ background: theme.accent, color: "#fff", border: "none", padding: "14px 22px", borderRadius: 999, ...sans, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>See my projects →</a>
          <a href="#contact" style={{ background: "transparent", color: theme.ink, border: `1px solid ${theme.ink}25`, padding: "14px 22px", borderRadius: 999, ...sans, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Get in touch</a>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div style={{ position: "relative" }}>
          <div style={{
            width: "100%", aspectRatio: "4 / 5", borderRadius: 20,
            background: theme.soft,
            backgroundImage: `repeating-linear-gradient(135deg, ${theme.ink}06 0, ${theme.ink}06 1px, transparent 1px, transparent 18px)`,
            border: `1.5px dashed ${theme.ink}25`,
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10,
            color: theme.muted,
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" style={{ opacity: 0.45 }}>
              <circle cx="12" cy="9" r="3.5" />
              <path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" strokeLinecap="round" />
            </svg>
            <div style={{ ...mono, fontSize: 12, textAlign: "center" }}>headshot · 4:5</div>
            <div style={{ ...mono, fontSize: 10, opacity: 0.7 }}>drop your photo here</div>
          </div>
          <div style={{
            position: "absolute", bottom: -16, left: -16, background: theme.ink, color: theme.bg,
            padding: "14px 18px", borderRadius: 12, ...mono, fontSize: 11, boxShadow: `0 8px 24px ${theme.ink}25`,
          }}>
            <div style={{ opacity: 0.55 }}>currently</div>
            <div style={{ fontSize: 13, marginTop: 2 }}>Data Analyst @ Kahana</div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

// ── Highlights ──────────────────────────────────────────────────────────
function Highlights({ theme, fontStack }) {
  const sans = { fontFamily: fontStack };
  const items = [
    { v: "1.2M+", l: "records modeled across pipelines", spark: [2, 3, 5, 4, 8, 12, 18, 28] },
    { v: "20+", l: "KPIs scoped for product analytics", spark: [1, 2, 4, 6, 9, 13, 17, 20] },
    { v: "+40%", l: "SQL query performance gain", spark: [10, 11, 13, 15, 18, 22, 28, 40] },
    { v: "−30%", l: "ad hoc analysis time cut", spark: [30, 27, 24, 22, 18, 15, 12, 10] },
  ];
  return (
    <FadeIn as="section" style={{ margin: "0 0 56px" }}>
      <div style={{
        background: theme.ink, color: theme.bg, borderRadius: 24, padding: "44px 48px",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
      }}>
        {items.map((m, i) => (
          <div key={i} style={{ borderLeft: i === 0 ? "none" : `1px solid ${theme.bg}1a`, paddingLeft: i === 0 ? 0 : 24 }}>
            <div style={{ ...sans, fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>{m.v}</div>
            <MiniSparkline points={m.spark} color={theme.accent} />
            <div style={{ ...sans, fontSize: 13, opacity: 0.65, marginTop: 6, lineHeight: 1.4 }}>{m.l}</div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

function MiniSparkline_local_unused() { /* moved to story-helpers.jsx */ }

window.StoryApp = StoryApp;
