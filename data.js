// Shared resume data for all variants
window.RESUME = {
  name: "Sushma EVS",
  fullName: "Venkata Sai Sushma Emmadi",
  role: "Analytics Engineer",
  email: "sushmaevs@gmail.com",
  phone: "+1 (667) 445-8558",
  linkedin: "linkedin.com/in/sushma-evs",
  github: "github.com/sushma62216",
  location: "United States",
  summary: "Analytics Engineer focused on the data layer underneath — clean schemas, well-tested dbt models, and pipelines that don't silently break. Strong in SQL, Python, Snowflake, and dbt, with experience partnering with product teams on KPI frameworks and early-stage measurement strategy.",
  longBio: "I'm an analytics engineer who works in the layer underneath the dashboards — clean schemas, well-tested dbt models, pipelines that don't silently break, and metrics that actually mean what they say. I've built end-to-end pipelines on Snowflake and Airflow, designed dbt mart layers on million-row datasets, and partnered with product teams to define KPIs before the dashboards get built. I'm comfortable in early-stage environments and used to figuring things out without a playbook.",
  skills: {
    "Analytics & Viz": ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Tableau", "Power BI"],
    "Data Analysis": ["Statistical Analysis", "KPI Reporting", "Ad Hoc Analysis", "Data Cleaning", "Data Wrangling"],
    "Data Engineering": ["Apache Airflow", "dbt", "Spark", "Docker", "ETL Pipelines"],
    "Databases & Cloud": ["Snowflake", "PostgreSQL", "MySQL", "Microsoft Azure", "AWS"],
    "Version Control": ["Git", "GitHub"]
  },
  skillsFlat: ["SQL", "Python", "Snowflake", "dbt", "Airflow", "Power BI", "Tableau", "AWS", "Azure", "Spark", "Docker", "PostgreSQL", "MySQL", "Git", "Pandas", "NumPy"],
  // proficiency for bar charts
  skillsProficiency: [
    { name: "SQL", level: 95, years: 4 },
    { name: "Python", level: 90, years: 4 },
    { name: "Snowflake", level: 85, years: 2 },
    { name: "dbt", level: 80, years: 2 },
    { name: "Apache Airflow", level: 75, years: 2 },
    { name: "Power BI", level: 80, years: 3 },
    { name: "Tableau", level: 75, years: 3 },
    { name: "AWS / Azure", level: 70, years: 2 },
  ],
  experience: [
    {
      role: "Analytics Engineer",
      company: "Kahana",
      location: "Chicago, IL (Remote)",
      period: "Apr 2026 – Present",
      current: true,
      tags: ["product analytics", "KPI design", "Supabase", "early-stage"],
      bullets: [
        "Architecting the product analytics framework for Oasis (AI-powered productivity tool), designing 20+ KPIs across activation, retention, monetization, and feedback quality ahead of the Product Hunt launch.",
        "Owning the Supabase data model to analytics mapping — identifying the events, tables, and user actions needed to power behavior analysis, conversion funnels, and product usage monitoring.",
        "Leading measurement strategy with the founding team, translating product goals into success criteria including feedback-quality monitoring and anomaly-detection logic for low-signal user submissions in training data."
      ]
    },
    {
      role: "Data Analyst",
      company: "Appleute",
      location: "Hammelburg, Germany",
      period: "May 2022 – May 2023",
      current: false,
      tags: ["ETL", "anomaly detection", "SQL tuning"],
      bullets: [
        "Built data pipelines to ingest and transform 100K+ records, implementing data validation and quality checks to ensure reliable, analytics-ready datasets.",
        "Developed an anomaly-detection system applying statistical methods to validate 50K+ data points, and built Python visualizations that reduced ad hoc analysis time by 30%.",
        "Collaborated with cross-functional teams to translate business questions into structured data preprocessing workflows, cleaning and transforming 10K+ records to meet quality standards.",
        "Optimized SQL queries powering analytics dashboards, improving data retrieval performance by 40%."
      ]
    }
  ],
  projects: [
    {
      slug: "skyra-atmos",
      title: "Skyra-Atmos",
      subtitle: "Climate Data Analytics Pipeline",
      period: "Feb 2026",
      kind: "Independent Project",
      github: "https://github.com/sushma62216/skyra-atmos",
      summary: "End-to-end pipeline ingesting 20+ years of climate data from 11K+ stations into a Snowflake warehouse, with Airflow orchestration and Power BI dashboards on top.",
      stack: ["AWS S3", "Snowflake", "Airflow", "Power BI", "Parquet"],
      metrics: [
        { label: "Stations", value: "11K+" },
        { label: "Years", value: "20+" },
        { label: "Schemas", value: "RAW · STG · ANALYTICS" }
      ],
      details: [
        "Designed an end-to-end data pipeline ingesting large-scale climate datasets from AWS S3 into Snowflake, applying dimensional modeling and ER diagrams to structure fact and dimension tables.",
        "Implemented RAW / STAGING / ANALYTICS schema layering, following best practices for warehouse architecture, data marts, and documentation.",
        "Orchestrated automated ETL with Apache Airflow DAGs and incremental Parquet load logic to keep the warehouse in sync with source systems and reduce full-refresh runtimes.",
        "Built Power BI dashboards on the analytics layer to surface station-level trends, patterns, and KPIs — translating warehouse data into decision-ready insights."
      ]
    },
    {
      slug: "medicare-part-d",
      title: "Medicare Part D 2023",
      subtitle: "Prescriber Spend Intelligence",
      period: "Apr 2026",
      kind: "Independent Project",
      github: "https://github.com/sushma62216/medicare-part-d",
      summary: "1.1M CMS Medicare prescriber records ingested into Snowflake, transformed through dbt into five marts, currently extending with a RAG layer for natural-language querying.",
      stack: ["Snowflake", "dbt", "Cortex", "FastAPI", "Next.js", "Mistral"],
      metrics: [
        { label: "Records", value: "1.1M" },
        { label: "Marts", value: "5" },
        { label: "Corpus reduction", value: "~95%" }
      ],
      details: [
        "Shipped Phase 1 pipeline ingesting 1.1M CMS Medicare prescriber records into Snowflake and transforming them through a dbt staging→marts layer, producing five aggregate marts (specialty, drug, state, top providers, specialty-drug).",
        "Designed a pre-aggregated embedding strategy that converts ~10K–50K dbt mart rows into natural-language summary strings — cutting the embedding corpus ~95% vs. row-level embedding while preserving accuracy for aggregate queries.",
        "Modeled raw→staging→marts lineage in dbt with schema tests on key columns (NPI, drug name) and idempotent transformations for safe reruns.",
        "Currently extending Phase 1 with a RAG layer: in-database vector embeddings + cosine similarity on Snowflake, FastAPI backend on Mistral via Snowflake Cortex, Next.js chat UI with cited sources and multi-turn memory."
      ]
    }
  ],
  education: {
    degree: "Master of Professional Studies — Data Science",
    school: "University of Maryland, Baltimore County (UMBC)",
    period: "Jan 2024 – Dec 2025",
    gpa: "3.8 / 4.0",
    coursework: ["Big Data Platforms", "Machine Learning", "Statistical Analysis", "Data Management"]
  },
  certifications: [
    { name: "Microsoft Certified: Azure Fundamentals", year: "2025", issuer: "Microsoft" }
  ]
};
