// Story Portfolio — deep version of V3
// Conversational, narrative-driven, with rich project case studies

const PALETTES_V3 = {
  forest: { accent: "#16a34a", bg: "#f8faf6", ink: "#0f1b14", soft: "#e8efe2", muted: "#5a6b5f" },
  warm:   { accent: "#7c3aed", bg: "#fbf9f6", ink: "#1c1a26", soft: "#f0ece4", muted: "#6a6577" },
  ocean:  { accent: "#2563eb", bg: "#f7f9fc", ink: "#0e1626", soft: "#e3eaf2", muted: "#5a6678" },
  ink:    { accent: "#1f1f1f", bg: "#fdfcf9", ink: "#0a0a0a", soft: "#ecebe5", muted: "#5a5a5a" },
  rust:   { accent: "#c0532f", bg: "#fbf6f0", ink: "#1c1410", soft: "#f0e6db", muted: "#7a6557" },
};

function darken(p) {
  return { accent: p.accent, bg: "#0d100f", ink: "#e8ece8", soft: "#171a18", muted: "#8a958d" };
}

// ── Hooks ───────────────────────────────────────────────────────────────
function useFadeIn(threshold = 0.15) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { setShown(true); obs.disconnect(); } });
    }, { threshold });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, shown];
}

function FadeIn({ children, delay = 0, as: As = "div", style = {}, ...rest }) {
  const [ref, shown] = useFadeIn();
  return (
    <As ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.7s cubic-bezier(.2,.7,.3,1) ${delay}ms, transform 0.7s cubic-bezier(.2,.7,.3,1) ${delay}ms`,
      ...style,
    }} {...rest}>{children}</As>
  );
}

function useActiveSection(ids) {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 120;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollY) { setActive(ids[i]); return; }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [ids.join(",")]);
  return active;
}

function useScrollProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const handler = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return p;
}

// ── Architecture diagram ────────────────────────────────────────────────
function FlowDiagram({ nodes, theme }) {
  return (
    <div style={{ marginTop: 16, padding: 20, background: theme.bg, border: `1px solid ${theme.ink}10`, borderRadius: 12, overflowX: "auto" }}>
      <div style={{ display: "flex", alignItems: "stretch", gap: 6, minWidth: "fit-content" }}>
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            {Array.isArray(node) ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {node.map((n, j) => (
                  <FlowNode key={j} node={n} theme={theme} />
                ))}
              </div>
            ) : (
              <FlowNode node={node} theme={theme} />
            )}
            {i < nodes.length - 1 && (
              <div style={{ display: "flex", alignItems: "center", color: `${theme.ink}40`, fontSize: 18, fontFamily: "'JetBrains Mono', monospace" }}>→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function FlowNode({ node, theme }) {
  const { label, sub, accent: nodeAccent } = node;
  return (
    <div style={{
      padding: "10px 14px",
      borderRadius: 8,
      border: `1px solid ${nodeAccent ? `${theme.accent}40` : `${theme.ink}15`}`,
      background: nodeAccent ? `${theme.accent}10` : theme.soft,
      minWidth: 100, flex: 1,
      display: "flex", flexDirection: "column", justifyContent: "center",
    }}>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 500, color: nodeAccent ? theme.accent : theme.ink, letterSpacing: "-0.01em" }}>{label}</div>
      {sub && <div style={{ fontSize: 10, color: theme.muted, marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

// ── Case study data ─────────────────────────────────────────────────────
const CASE_STUDIES = {
  "skyra-atmos": {
    role: "Sole engineer & analyst — independent project",
    duration: "Feb 2026 · ~4 weeks",
    stack: ["AWS S3", "Snowflake", "Airflow", "Power BI", "Python", "Parquet"],
    problem: "20+ years of NOAA station-level climate data sat in raw Parquet on S3 — useful but unusable. No model, no incremental loads, no way to ask 'which stations trended fastest over 5 years' without a full table scan.",
    approach: "Built a warehouse from the ground up: RAW → STAGING → ANALYTICS layering in Snowflake, dimensional model with fact and dimension tables, Airflow DAGs orchestrating incremental Parquet loads instead of full refreshes, Power BI on top of the analytics layer.",
    outcomes: [
      "Ingested 20+ years across 11K+ stations into a clean fact/dim model",
      "Incremental load logic cut warehouse sync time substantially vs full-refresh",
      "Power BI dashboards surface station-level trends and KPIs that were previously buried"
    ],
    architecture: [
      { label: "AWS S3", sub: "Parquet, NOAA dump" },
      { label: "Airflow DAGs", sub: "incremental load" },
      [
        { label: "RAW", sub: "Snowflake" },
        { label: "STAGING", sub: "Snowflake" },
        { label: "ANALYTICS", sub: "Snowflake", accent: true },
      ],
      { label: "Power BI", sub: "dashboards", accent: true },
    ],
    metrics: [
      { value: "11K+", label: "weather stations" },
      { value: "20+ yrs", label: "of historical data" },
      { value: "3", label: "layered schemas" },
    ],
  },
  "medicare-part-d": {
    role: "Sole engineer & analyst — independent project (in progress)",
    duration: "Apr 2026 · phase 2 in progress",
    stack: ["Snowflake", "dbt", "Snowflake Cortex", "Mistral", "FastAPI", "Next.js", "Python"],
    problem: "CMS publishes 1.1M Medicare Part D prescriber records every year. The data is rich (specialty, drug, state, NPI, spend) but answering 'which specialties prescribe the most expensive drugs by state?' takes 100+ lines of SQL nobody wants to write.",
    approach: "Phase 1: dbt staging→marts pipeline producing five aggregate marts. Phase 2 (current): pre-aggregated embeddings stored natively in Snowflake, cosine-similarity retrieval via Cortex, FastAPI backend on Mistral, Next.js chat UI that returns answers with cited sources.",
    outcomes: [
      "Shipped Phase 1: five aggregate marts (specialty, drug, state, top providers, specialty-drug)",
      "Cut embedding corpus ~95% by embedding aggregate summary rows instead of every row",
      "Schema tests on NPI + drug-name columns; idempotent transformations for safe reruns",
      "Phase 2 RAG layer in active development with multi-turn memory + cited sources"
    ],
    architecture: [
      { label: "CMS", sub: "1.1M records" },
      { label: "Snowflake", sub: "raw" },
      [
        { label: "dbt staging", sub: "cleaned" },
        { label: "5 marts", sub: "aggregated", accent: true },
      ],
      { label: "Embeddings", sub: "Cortex" },
      [
        { label: "FastAPI", sub: "Mistral" },
        { label: "Next.js", sub: "chat UI", accent: true },
      ],
    ],
    metrics: [
      { value: "1.1M", label: "CMS records ingested" },
      { value: "5", label: "aggregate marts" },
      { value: "~95%", label: "embedding corpus reduction" },
    ],
  },
};

window.PALETTES_V3 = PALETTES_V3;
window.darken = darken;
window.FadeIn = FadeIn;
window.useFadeIn = useFadeIn;
window.useActiveSection = useActiveSection;
window.useScrollProgress = useScrollProgress;
window.FlowDiagram = FlowDiagram;
window.CASE_STUDIES = CASE_STUDIES;

// ── Shared UI helpers ───────────────────────────────────────────────────
function MiniSparkline({ points, color, w = 96, h = 18 }) {
  const max = Math.max(...points), min = Math.min(...points);
  const path = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((p - min) / (max - min || 1)) * h;
    return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
  return (
    <svg width={w} height={h} style={{ display: "block", marginTop: 10 }}>
      <path d={path} stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function SectionHeader({ kicker, title, subtitle, theme, fontStack }) {
  const sans = { fontFamily: fontStack };
  const mono = { fontFamily: "'JetBrains Mono', monospace" };
  return (
    <FadeIn style={{ marginBottom: 28 }}>
      {kicker && <div style={{ ...mono, fontSize: 12, color: theme.accent, marginBottom: 10, letterSpacing: "0.04em" }}>{kicker}</div>}
      <h2 style={{ ...sans, fontSize: 48, fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 18, color: theme.muted, marginTop: 14, maxWidth: 640, lineHeight: 1.55 }}>{subtitle}</p>}
    </FadeIn>
  );
}

window.MiniSparkline = MiniSparkline;
window.SectionHeader = SectionHeader;
