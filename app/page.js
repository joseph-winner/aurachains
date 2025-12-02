"use client";

import React, { useState } from "react";
import {
  FiBox,
  FiUser,
  FiTruck,
  FiMapPin,
  FiCpu,
  FiBell,
  FiAlertTriangle,
  FiCheckCircle,
  FiShield,
  FiCompass,
  FiArrowRight,
  FiEye,
  FiLock,
  FiDatabase,
  FiFileText,
  FiGlobe,
  FiKey,
  FiActivity,
} from "react-icons/fi";

const ROLE_CONFIG = {
  exporter: {
    key: "exporter",
    label: "Exporter",
    short: "Exporter",
    accent: "from-cyan-400 to-sky-500",
    blurb:
      "Create blockchain-backed shipment contracts, hand off custody, and see every export in motion in one place.",
    stats: [
      { label: "Shipments in transit", value: "12", chip: "On schedule" },
      { label: "Pending contracts", value: "3", chip: "Waiting signatures" },
      { label: "Delivered this month", value: "48", chip: "98% on time" },
    ],
    shipments: [
      {
        id: "SHP-3421",
        route: "Mombasa → Hamburg",
        status: "In transit · On schedule",
        statusTone: "text-emerald-300",
        progress: "64%",
      },
      {
        id: "SHP-3387",
        route: "Mbarara → Dubai",
        status: "Pending buyer signature",
        statusTone: "text-amber-300",
        progress: "32%",
      },
      {
        id: "SHP-3290",
        route: "Kampala → Rotterdam",
        status: "Delayed at customs",
        statusTone: "text-red-300",
        progress: "48%",
      },
    ],
    alerts: [
      "Delay: SHP-3290 held at customs – documents requested.",
      "New smart contract awaiting buyer signature (SHP-3387).",
    ],
  },
  buyer: {
    key: "buyer",
    label: "Buyer",
    short: "Buyer",
    accent: "from-emerald-400 to-lime-400",
    blurb:
      "Track incoming shipments, verify authenticity at the door, and release payments only when everything checks out.",
    stats: [
      { label: "Arriving today", value: "4", chip: "ETA < 24h" },
      { label: "Pending approvals", value: "2", chip: "Action needed" },
      { label: "Open disputes", value: "1", chip: "Under review" },
    ],
    shipments: [
      {
        id: "SHP-4520",
        route: "Duran → Mbarara",
        status: "Awaiting NFC scan",
        statusTone: "text-amber-300",
        progress: "88%",
      },
      {
        id: "SHP-4499",
        route: "Nairobi → Kigali",
        status: "In transit · No issues",
        statusTone: "text-emerald-300",
        progress: "56%",
      },
      {
        id: "SHP-4412",
        route: "Mombasa → Kampala",
        status: "Tamper alert · Investigating",
        statusTone: "text-red-300",
        progress: "71%",
      },
    ],
    alerts: [
      "Tamper alert on SHP-4412 – seal event at Port Nairobi.",
      "2 deliveries waiting approval – release payments?",
    ],
  },
  logistics: {
    key: "logistics",
    label: "Logistics Provider",
    short: "Logistics",
    accent: "from-indigo-400 to-fuchsia-500",
    blurb:
      "Accept custody, monitor your fleet in real time, and respond quickly to route and sensor alerts.",
    stats: [
      { label: "Shipments in transit", value: "27", chip: "Across 6 routes" },
      { label: "On-time delivery rate", value: "96%", chip: "Last 30 days" },
      { label: "Active alerts", value: "3", chip: "High priority" },
    ],
    shipments: [
      {
        id: "SHP-5103",
        route: "Mbarara → Mombasa",
        status: "On route · Checkpoint 3",
        statusTone: "text-emerald-300",
        progress: "42%",
      },
      {
        id: "SHP-5033",
        route: "Kigali → Mombasa",
        status: "Route deviation · Off corridor",
        statusTone: "text-red-300",
        progress: "35%",
      },
      {
        id: "SHP-4987",
        route: "Kampala → Jinja",
        status: "Ready for pickup",
        statusTone: "text-cyan-300",
        progress: "0%",
      },
    ],
    alerts: [
      "Route deviation: SHP-5033 left safe corridor.",
      "New pickup window starting in 20 minutes (SHP-4987).",
      "IoT sensor threshold exceeded on refrigerated cargo.",
    ],
  },
};

function page() {
  const [activeRoleKey, setActiveRoleKey] = useState("exporter");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const activeRole = ROLE_CONFIG[activeRoleKey];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* subtle glow background */}
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,_#22d3ee22,_transparent_60%),radial-gradient(circle_at_bottom,_#6366f122,_transparent_60%)]" />

      <div className="mx-auto flex max-w-7xl flex-col px-4 pb-24 pt-6 lg:px-8 lg:pt-10">
        <Header
          mobileNavOpen={mobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />

        <main className="mt-12 space-y-20 lg:mt-16 lg:space-y-24">
          <Hero
            activeRoleKey={activeRoleKey}
            setActiveRoleKey={setActiveRoleKey}
            activeRole={activeRole}
          />

          <HowItWorks />

          <RolePortals />

          <RealtimeSection />

          <BlockchainSection />

          <AboutSection />

          <Footer />
        </main>
      </div>
    </div>
  );
}

function Header({ mobileNavOpen, setMobileNavOpen }) {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-500 text-sm font-bold uppercase tracking-tight text-slate-950 shadow-lg shadow-cyan-500/40">
          <FiGlobe className="h-5 w-5" />
        </div>
        <div>
          <p className="text-base font-semibold tracking-wide text-slate-100">
            Aura Chains
          </p>
          <p className="text-xs text-slate-400">
            Blockchain + IoT supply chain visibility
          </p>
        </div>
      </div>

      <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
        <a href="#" className="inline-flex items-center gap-1 hover:text-white">
          <FiBox className="h-4 w-4" />
          Product
        </a>
        <a href="#" className="inline-flex items-center gap-1 hover:text-white">
          <FiEye className="h-4 w-4" />
          Dashboards
        </a>
        <a href="#" className="inline-flex items-center gap-1 hover:text-white">
          <FiFileText className="h-4 w-4" />
          Docs
        </a>
        <a href="#" className="inline-flex items-center gap-1 hover:text-white">
          <FiTag className="h-4 w-4" />
          Pricing
        </a>
        <button className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-200 shadow-sm shadow-cyan-500/30 hover:bg-cyan-400/20">
          <FiArrowRight className="h-4 w-4" />
          Launch app
        </button>
      </nav>

      {/* mobile */}
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-200 md:hidden"
        onClick={() => setMobileNavOpen((v) => !v)}
      >
        <FiMenu className="h-4 w-4" />
        {mobileNavOpen ? "Close" : "Menu"}
      </button>

      {mobileNavOpen && (
        <div className="absolute inset-x-4 top-16 z-20 rounded-2xl border border-slate-800 bg-slate-950/95 p-4 text-sm text-slate-200 shadow-xl shadow-black/50 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#" className="inline-flex items-center gap-2 hover:text-white">
              <FiBox className="h-4 w-4" />
              Product
            </a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-white">
              <FiEye className="h-4 w-4" />
              Dashboards
            </a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-white">
              <FiFileText className="h-4 w-4" />
              Docs
            </a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-white">
              <FiTag className="h-4 w-4" />
              Pricing
            </a>
            <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/60 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-200">
              <FiArrowRight className="h-4 w-4" />
              Launch app
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ activeRoleKey, setActiveRoleKey, activeRole }) {
  return (
    <section className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] lg:items-center">
      {/* Left: landing copy */}
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium text-emerald-200">
          <FiActivity className="h-3.5 w-3.5" />
          Live telemetry, tamper alerts & on-chain contracts in one view
        </div>

        <div className="space-y-4">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Dark-mode control tower
            <br />
            for your{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              critical shipments.
            </span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Aura Chains is a secure supply chain tracking platform for{" "}
            <span className="font-semibold text-slate-100">
              exporters, buyers and logistics providers
            </span>
            . See where every container is, who has custody, and what the sensors
            are saying — backed by a tamper-proof blockchain audit trail.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-950 shadow-lg shadow-cyan-500/40 hover:bg-cyan-300">
            <FiArrowRight className="h-4 w-4" />
            Get a demo
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-5 py-3 text-xs font-semibold text-slate-200 hover:border-slate-500">
            <FiEye className="h-4 w-4" />
            Explore dashboards
          </button>
        </div>

        <div className="flex flex-wrap gap-3 text-xs text-slate-400">
          <BadgeItem
            icon={<FiShield className="h-3.5 w-3.5" />}
            label="End-to-end audit trail"
          />
          <BadgeItem
            icon={<FiCpu className="h-3.5 w-3.5" />}
            label="IoT-ready from day one"
          />
          <BadgeItem
            icon={<FiLock className="h-3.5 w-3.5" />}
            label="Role-based access control"
          />
        </div>
      </div>

      {/* Right: interactive dashboard preview */}
      <RoleDashboardPreview
        activeRoleKey={activeRoleKey}
        setActiveRoleKey={setActiveRoleKey}
        activeRole={activeRole}
      />
    </section>
  );
}

function BadgeItem({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1.5">
      {icon}
      <span>{label}</span>
    </span>
  );
}

function RoleDashboardPreview({
  activeRoleKey,
  setActiveRoleKey,
  activeRole,
}) {
  const roles = Object.values(ROLE_CONFIG);

  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-10 top-0 -z-10 h-40 bg-[radial-gradient(circle_at_top,_#22d3ee33,_transparent_55%)]" />
      <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 shadow-2xl shadow-cyan-500/30 backdrop-blur-sm lg:p-6">
        {/* Top row: role switch + info */}
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="w-full sm:w-auto">
            <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-slate-900/90 p-1 text-xs sm:inline-flex sm:rounded-full">
              {roles.map((role) => {
                const isActive = role.key === activeRoleKey;
                return (
                  <button
                    key={role.key}
                    type="button"
                    onClick={() => setActiveRoleKey(role.key)}
                    className={[
                      "flex items-center gap-1 rounded-full px-3 py-1 transition",
                      isActive
                        ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 text-xs font-semibold"
                        : "text-slate-400 hover:text-slate-100",
                    ].join(" ")}
                  >
                    {role.key === "exporter" && (
                      <FiBox className="h-3.5 w-3.5" />
                    )}
                    {role.key === "buyer" && (
                      <FiUser className="h-3.5 w-3.5" />
                    )}
                    {role.key === "logistics" && (
                      <FiTruck className="h-3.5 w-3.5" />
                    )}
                    <span>{role.short}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-slate-300">
              {activeRole.blurb}
            </p>
          </div>

          <div className="flex flex-row flex-wrap items-center gap-3 text-xs sm:flex-col sm:items-end sm:gap-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-slate-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Telemetry live
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-2.5 py-1 text-slate-400">
              <FiShield className="h-3.5 w-3.5" />
              On-chain verified
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          {activeRole.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 px-3.5 py-3 text-xs"
            >
              <p className="flex items-center justify-between text-slate-400">
                <span>{stat.label}</span>
                <span className="text-[11px] text-slate-500">
                  {stat.chip}
                </span>
              </p>
              <p className="mt-1.5 text-2xl font-semibold text-slate-50">
                {stat.value}
              </p>
              <div className="mt-3 h-1 rounded-full bg-slate-800">
                <div
                  className={[
                    "h-full rounded-full bg-gradient-to-r",
                    activeRole.accent,
                  ].join(" ")}
                  style={{ width: "70%" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Shipments & side panel */}
        <div className="grid gap-4 lg:grid-cols-5">
          {/* Shipments list */}
          <div className="lg:col-span-3">
            <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
              <span className="inline-flex items-center gap-2">
                <FiBox className="h-4 w-4" />
                Active shipments
              </span>
              <button className="inline-flex items-center gap-1 text-[11px] text-cyan-300 hover:text-cyan-200">
                View all
                <FiArrowRight className="h-3 w-3" />
              </button>
            </div>

            <div className="space-y-2.5">
              {activeRole.shipments.map((shipment) => (
                <div
                  key={shipment.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 px-3.5 py-3 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-100">
                        {shipment.id}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {shipment.route}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-950/60 px-3 py-1 text-[11px]">
                      <span className={shipment.statusTone}>
                        <FiTruck className="h-3.5 w-3.5" />
                      </span>
                      <span className={shipment.statusTone}>
                        {shipment.status}
                      </span>
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                      style={{ width: shipment.progress }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: NFC / alerts / mini-route */}
          <div className="space-y-3 lg:col-span-2">
            {activeRoleKey === "buyer" ? (
              <NfcWidget />
            ) : (
              <AlertWidget alerts={activeRole.alerts} />
            )}

            <RouteWidget />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Landing content section: How it works --- */

function HowItWorks() {
  const steps = [
    {
      icon: <FiKey className="h-5 w-5" />,
      title: "1. Create a digital shipment contract",
      body: "The exporter sets up the shipment, terms, parties and IoT requirements. Aura Chains deploys a smart contract and assigns a unique shipment ID.",
    },
    {
      icon: <FiTruck className="h-5 w-5" />,
      title: "2. Attach IoT & hand off custody",
      body: "Logistics providers accept custody, attach sensors, and scan the shipment ID. Every hand-off and route update is written to the ledger automatically.",
    },
    {
      icon: <FiCheckCircle className="h-5 w-5" />,
      title: "3. Verify, approve & release payment",
      body: "Buyers track ETAs, scan NFC at arrival, review tamper history and then approve delivery. Payment is released based on the smart contract conditions.",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
            How Aura Chains fits into your existing operations.
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            The platform plugs into the way you already ship — it simply gives
            all parties the same, trusted view of what is happening from
            departure to delivery.
          </p>
        </div>
        <p className="text-xs text-slate-500">
          Works with NFC tags, GPS devices and existing TMS tools.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.title}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-5 text-sm shadow-lg shadow-black/40"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-200">
              <span className="rounded-full bg-slate-950/80 p-1.5 text-cyan-300">
                {step.icon}
              </span>
              <span className="font-semibold">{step.title}</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {step.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --- Role portals --- */

function RolePortals() {
  const roles = [
    {
      key: "exporter",
      title: "Exporter portal",
      icon: <FiBox className="h-4 w-4" />,
      accent: "from-cyan-400 to-sky-500",
      points: [
        "Create and sign smart contracts for new export lanes.",
        "See shipment status by lane, port, customer or Incoterms.",
        "Access digital documents & compliance records instantly.",
      ],
      cta: "Sign in as exporter",
    },
    {
      key: "buyer",
      title: "Buyer portal",
      icon: <FiUser className="h-4 w-4" />,
      accent: "from-emerald-400 to-lime-400",
      points: [
        "Track incoming shipments, ETAs and past delivery performance.",
        "Scan NFC at the door to verify products and seals.",
        "Approve deliveries and trigger payment securely.",
      ],
      cta: "Sign in as buyer",
    },
    {
      key: "logistics",
      title: "Logistics provider portal",
      icon: <FiTruck className="h-4 w-4" />,
      accent: "from-indigo-400 to-fuchsia-500",
      points: [
        "Accept custody and see every assigned pickup and drop.",
        "Monitor active routes on a live map with sensor overlays.",
        "Respond quickly to route deviations and tamper events.",
      ],
      cta: "Sign in as logistics",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
            Three role-specific dashboards. One trusted data layer.
          </h2>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            Aura Chains shows each participant only what they need, while
            keeping the underlying shipment record shared, verifiable and
            consistent.
          </p>
        </div>
        <p className="text-xs text-slate-500">
          SSO · 2FA · granular permissions per role.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {roles.map((role) => (
          <div
            key={role.key}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-5 text-sm shadow-lg shadow-black/40"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-x-[-40%] top-[-40%] h-40 bg-gradient-to-r from-transparent via-slate-700/15 to-transparent blur-3xl" />

            <div className="relative space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200">
                {role.icon}
                <span className="font-semibold">{role.title}</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-300">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-slate-200 transition group-hover:border-cyan-400/60 group-hover:text-cyan-200">
                {role.cta}
                <FiArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div
              className={[
                "pointer-events-none absolute inset-x-0 bottom-[-40px] h-24 bg-gradient-to-r opacity-70",
                role.accent,
              ].join(" ")}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* --- Realtime section --- */

function RealtimeSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:items-start">
      {/* Copy & bullets */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
          Real-time IoT monitoring for every lane.
        </h2>
        <p className="text-sm text-slate-300 sm:text-base">
          Attach GPS trackers, temperature probes, door sensors or NFC tags —
          Aura Chains reads them all and surfaces issues in a simple, dark-mode
          dashboard your team can actually use.
        </p>
        <div className="space-y-3 text-sm text-slate-300">
          <Bullet
            icon={<FiMapPin className="h-4 w-4" />}
            title="Fleet-wide live map"
            body="See all in-transit shipments with color-coded status markers: on-time, delayed or at risk, and filter down by corridor or customer."
          />
          <Bullet
            icon={<FiCpu className="h-4 w-4" />}
            title="Sensor feeds with guardrails"
            body="Define threshold rules for temperature, humidity or vibration. When something crosses the line, the right teams are notified immediately."
          />
          <Bullet
            icon={<FiBell className="h-4 w-4" />}
            title="Always-visible alert panel"
            body="A global alert widget follows users across dashboards, so no tamper event or delay sits unnoticed in a hidden report."
          />
        </div>
      </div>

      {/* UI preview cards */}
      <div className="space-y-4">
        {/* Map card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-xl shadow-black/50">
          <div className="mb-3 flex items-center justify-between text-xs text-slate-300">
            <span className="inline-flex items-center gap-2">
              <FiMapPin className="h-4 w-4" />
              In-transit shipments
            </span>
            <span className="rounded-full bg-slate-900/90 px-3 py-1 text-[11px] text-slate-400">
              27 active · 3 with alerts
            </span>
          </div>
          <div className="relative h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950">
            {/* simple faux grid */}
            <div className="absolute inset-0 opacity-30">
              <div className="h-full w-full bg-[radial-gradient(circle_at_center,_#020617,_#020617_40%,_#0b1120_75%)]" />
            </div>
            {/* route dots */}
            <RouteDot left="15%" top="72%" tone="bg-cyan-400" />
            <RouteDot left="38%" top="55%" tone="bg-emerald-400" />
            <RouteDot left="64%" top="34%" tone="bg-emerald-400" />
            <RouteDot left="84%" top="24%" tone="bg-amber-400" />
            <RouteLine />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
            <span>Last IoT update: 14 seconds ago</span>
            <span>On-time deliveries (24h): 96%</span>
          </div>
        </div>

        {/* Alert & timeline card */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3 text-xs">
            <div className="mb-2 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-slate-200">
                <FiAlertTriangle className="h-4 w-4" />
                Critical alerts
              </span>
              <span className="rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-400">
                Tamper · temperature · route
              </span>
            </div>
            <div className="space-y-1.5">
              <AlertLine
                tone="text-red-300"
                title="Tamper event – SHP-5033"
                meta="Port Mombasa · door sensor triggered"
              />
              <AlertLine
                tone="text-amber-300"
                title="Temperature spike – reefer container"
                meta="Durban → Mombasa · 9 minutes above 8°C"
              />
              <AlertLine
                tone="text-cyan-300"
                title="Pickup overdue – SHP-4987"
                meta="Ready for pickup · 25 minutes late"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3 text-xs">
            <div className="mb-2 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-slate-200">
                <FiCompass className="h-4 w-4" />
                Status timeline
              </span>
              <span className="text-[11px] text-slate-400">
                Shipment: SHP-3421
              </span>
            </div>
            <div className="space-y-2">
              <TimelineStep
                icon={<FiFileText className="h-3.5 w-3.5" />}
                title="Smart contract created"
                meta="Exporter & buyer signed base terms"
              />
              <TimelineStep
                icon={<FiTruck className="h-3.5 w-3.5" />}
                title="Custody transferred to logistics"
                meta="Checkpoint 1 · sensors armed"
              />
              <TimelineStep
                icon={<FiMapPin className="h-3.5 w-3.5" />}
                title="Arrived at inland depot"
                meta="Checkpoint 3 · no anomalies detected"
              />
              <TimelineStep
                icon={<FiCheckCircle className="h-3.5 w-3.5" />}
                title="Awaiting buyer approval"
                meta="NFC scan required before payment"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Blockchain / audit section --- */

function BlockchainSection() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
            Clear blockchain audit trails for compliance and trust.
          </h2>
          <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
            You don’t have to be a blockchain engineer to understand what
            happened. Aura Chains turns transactions into a readable history of
            events that stands up in audits and investigations.
          </p>
        </div>
        <p className="text-xs text-slate-500">
          Digital receipts · CSV/PDF export · Explorer links.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        {/* Audit log preview */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-4 text-xs shadow-xl shadow-black/60">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-100">
                Shipment audit log · SHP-3421
              </p>
              <p className="text-[11px] text-slate-500">
                100% on-chain · 24 events · Filter: Major events
              </p>
            </div>
            <div className="flex gap-2 text-[11px]">
              <button className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-200">
                <FiFileText className="h-3.5 w-3.5" />
                Export PDF
              </button>
              <button className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-200">
                <FiDatabase className="h-3.5 w-3.5" />
                Export CSV
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <AuditRow
              badge="CONTRACT"
              tone="bg-cyan-400/10 text-cyan-300 border-cyan-400/40"
              title="Smart contract created"
              body="Exporter (ACME Export Ltd) deployed shipment contract."
              meta="Block #74312 · 2025-11-02 08:14 UTC · Tx 0x9f...21ac"
            />
            <AuditRow
              badge="SIGNATURE"
              tone="bg-emerald-400/10 text-emerald-300 border-emerald-400/40"
              title="Buyer signature recorded"
              body="Buyer (Aurora Retail GmbH) signed contract terms."
              meta="Block #74318 · 2025-11-02 08:18 UTC · Tx 0xa2...d0c9"
            />
            <AuditRow
              badge="CUSTODY"
              tone="bg-indigo-400/10 text-indigo-300 border-indigo-400/40"
              title="Custody transferred to logistics"
              body="TransLogix Ltd accepted pickup and activated sensors."
              meta="Block #74341 · 2025-11-02 09:02 UTC · Tx 0xef...7742"
            />
            <AuditRow
              badge="IOT"
              tone="bg-amber-400/10 text-amber-300 border-amber-400/40"
              title="Tamper sensor event"
              body="Door opened at Port Nairobi; seal inspected and re-locked."
              meta="Block #74402 · 2025-11-02 12:44 UTC · Tx 0xcd...f831"
            />
            <AuditRow
              badge="PAYMENT"
              tone="bg-emerald-400/10 text-emerald-300 border-emerald-400/40"
              title="Payment released to exporter"
              body="Buyer approved delivery after NFC verification."
              meta="Block #74420 · 2025-11-02 13:10 UTC · Tx 0xb4...91dd"
            />
          </div>
        </div>

        {/* Identity & verification */}
        <div className="space-y-4 text-sm">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-4 text-xs">
            <p className="mb-2 text-sm font-semibold text-slate-100">
              Digital identities & permissions
            </p>
            <p className="mb-3 text-sm text-slate-300">
              Every exporter, buyer, logistics provider and IoT device has a
              verified identity. Actions in the UI map cleanly to blockchain
              addresses and signatures.
            </p>
            <div className="space-y-2">
              <IdentityLine
                name="ACME Export Ltd"
                role="Exporter"
                meta="0x98...3fa2 · verified"
              />
              <IdentityLine
                name="Aurora Retail GmbH"
                role="Buyer"
                meta="0x4a...10b5 · verified"
              />
              <IdentityLine
                name="TransLogix Ltd"
                role="Logistics provider"
                meta="0xbb...c911 · verified"
              />
              <IdentityLine
                name="Door sensor · Container #7"
                role="IoT device"
                meta="0x10...a32d · read-only"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-4 text-xs">
            <p className="mb-2 text-sm font-semibold text-slate-100">
              Visual verification cues
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="inline-flex items-center gap-2">
                <FiCheckCircle className="h-4 w-4 text-emerald-300" />
                <span>
                  <span className="font-semibold">“Blockchain verified”</span>{" "}
                  labels appear next to on-chain confirmed data like contracts
                  and NFC scans.
                </span>
              </p>
              <p className="inline-flex items-center gap-2">
                <FiShield className="h-4 w-4 text-cyan-300" />
                <span>
                  <span className="font-semibold">Shield badges</span> highlight
                  fully signed contracts and completed payments.
                </span>
              </p>
              <p className="inline-flex items-center gap-2">
                <FiFileText className="h-4 w-4 text-slate-300" />
                <span>
                  <span className="font-semibold">Receipts & QR codes</span> let
                  you prove shipment history to partners and regulators without
                  sharing internal systems.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- smaller widgets --- */

function NfcWidget() {
  return (
    <div className="rounded-2xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/10 via-slate-900/90 to-slate-950 px-3.5 py-3.5 text-xs">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-2 text-emerald-200">
          <FiCpu className="h-4 w-4" />
          NFC tag scan
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-2.5 py-1 text-[11px] text-slate-300">
          <FiShield className="h-3.5 w-3.5" />
          Blockchain verified
        </span>
      </div>
      <p className="mb-3 text-xs text-emerald-50">
        Ask your team to tap the package tag on arrival to confirm product and
        seal status before signing off.
      </p>
      <button className="mb-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-300">
        <FiCheckCircle className="h-4 w-4" />
        Start NFC scan
      </button>
      <div className="rounded-xl border border-emerald-400/40 bg-slate-950/80 px-3 py-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-emerald-200">
            Last scan: SHP-4412
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-200">
            <FiCheckCircle className="h-3.5 w-3.5" />
            Product authentic
          </span>
        </div>
        <p className="mt-1 text-[11px] text-slate-400">
          Tamper seal:{" "}
          <span className="text-emerald-300">intact</span> · Batch #AC-2045 ·
          Block #74532
        </p>
      </div>
    </div>
  );
}

function AlertWidget({ alerts }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-3.5 py-3.5 text-xs">
      <div className="mb-2 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-slate-200">
          <FiBell className="h-4 w-4" />
          Live alerts
        </span>
        <span className="rounded-full bg-slate-950/70 px-2.5 py-1 text-[11px] text-slate-400">
          {alerts.length} active
        </span>
      </div>
      <div className="space-y-1.5">
        {alerts.map((alert) => (
          <div
            key={alert}
            className="flex gap-2 rounded-xl bg-slate-950/80 px-3 py-2"
          >
            <FiAlertTriangle className="mt-0.5 h-3.5 w-3.5 text-amber-300" />
            <div>
              <p className="text-[11px] text-slate-200">{alert}</p>
              <p className="mt-0.5 text-[11px] text-slate-500">
                Just now · click for shipment details
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RouteWidget() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-xs">
      <div className="mb-2 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 text-slate-200">
          <FiCompass className="h-4 w-4" />
          Route & custody
        </span>
        <span className="text-[11px] text-slate-500">
          Exporter → logistics → buyer
        </span>
      </div>
      <div className="relative mb-2 h-20 overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="absolute left-4 top-10 h-[2px] w-[70%] bg-gradient-to-r from-cyan-400/40 via-emerald-400/60 to-indigo-500/60" />
        <RouteDot left="14%" top="52%" tone="bg-cyan-400" />
        <RouteDot left="45%" top="50%" tone="bg-emerald-400" />
        <RouteDot left="74%" top="46%" tone="bg-slate-300" />
      </div>
      <div className="flex items-center justify-between text-[11px] text-slate-400">
        <span>Last custody change: 32 seconds ago</span>
        <span>Latency under 2 seconds</span>
      </div>
    </div>
  );
}

/* helpers */

function Bullet({ icon, title, body }) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-slate-900/80 text-base text-cyan-300">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-100">{title}</p>
        <p className="text-sm text-slate-400">{body}</p>
      </div>
    </div>
  );
}

function RouteDot({ left, top, tone }) {
  return (
    <div
      className={[
        "absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg",
        tone,
      ].join(" ")}
      style={{ left, top }}
    />
  );
}

function RouteLine() {
  return (
    <svg
      className="absolute inset-0"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="routeGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#34d399" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path
        d="M 10 75 Q 40 45 85 20"
        fill="none"
        stroke="url(#routeGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

function AlertLine({ tone, title, meta }) {
  return (
    <div className="rounded-xl bg-slate-950/80 px-3 py-2">
      <p className={["text-xs font-medium", tone].join(" ")}>{title}</p>
      <p className="text-[11px] text-slate-400">{meta}</p>
    </div>
  );
}

function TimelineStep({ icon, title, meta }) {
  return (
    <div className="flex gap-2">
      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs text-cyan-300">
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-100">{title}</p>
        <p className="text-[11px] text-slate-400">{meta}</p>
      </div>
    </div>
  );
}

function AuditRow({ badge, tone, title, body, meta }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/90 px-3.5 py-3">
      <div
        className={[
          "mt-0.5 inline-flex h-fit items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide",
          tone,
        ].join(" ")}
      >
        {badge}
      </div>
      <div className="space-y-0.5">
        <p className="text-xs font-medium text-slate-100">{title}</p>
        <p className="text-[11px] text-slate-300">{body}</p>
        <p className="text-[11px] text-slate-500">{meta}</p>
      </div>
    </div>
  );
}

function IdentityLine({ name, role, meta }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/90 px-3.5 py-2.5">
      <div>
        <p className="text-xs font-medium text-slate-100">
          {name}{" "}
          <span className="ml-1 rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300">
            {role}
          </span>
        </p>
        <p className="text-[11px] text-slate-500">{meta}</p>
      </div>
      <FiShield className="h-4 w-4 text-cyan-300" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-900 pt-6 text-xs text-slate-500">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Aura Chains. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="inline-flex items-center gap-1 hover:text-slate-300">
            <FiActivity className="h-3.5 w-3.5" />
            Status
          </a>
          <a href="#" className="inline-flex items-center gap-1 hover:text-slate-300">
            <FiShield className="h-3.5 w-3.5" />
            Security
          </a>
          <a href="#" className="inline-flex items-center gap-1 hover:text-slate-300">
            <FiLock className="h-3.5 w-3.5" />
            Privacy
          </a>
          <a href="#" className="inline-flex items-center gap-1 hover:text-slate-300">
            <FiFileText className="h-3.5 w-3.5" />
            Docs
          </a>
        </div>
      </div>
    </footer>
  );
}

/* --- About / Mission section --- */

function AboutSection() {
  return (
    <section className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Built for trust in a trustless world.
        </h2>
        <div className="space-y-4 text-lg text-slate-300">
          <p>
            Aura Chains was founded to solve the &quot;black box&quot; problem of global
            logistics. Too often, shipments go dark, sensors fail, and disputes
            arise from a lack of shared truth.
          </p>
          <p>
            We combine <strong className="text-slate-100">IoT telemetry</strong>{" "}
            with <strong className="text-slate-100">blockchain immutability</strong>{" "}
            to create a single source of truth that no one can tamper with.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 border-t border-slate-800 pt-8">
          <div>
            <p className="text-3xl font-bold text-slate-50">200+</p>
            <p className="text-sm text-slate-400">Enterprise Partners</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-50">$4B+</p>
            <p className="text-sm text-slate-400">Cargo Secured</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-50">100%</p>
            <p className="text-sm text-slate-400">Uptime</p>
          </div>
        </div>
      </div>
      <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/50 shadow-2xl shadow-black/50">
        {/* Abstract visual */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#22d3ee11,_transparent_70%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-64 w-64">
            <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border border-dashed border-slate-700/50" />
            <div className="absolute inset-8 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-dashed border-slate-700/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/20">
                <FiGlobe className="h-10 w-10 text-slate-950" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* missing icons from react-icons */
import { FiTag, FiMenu } from "react-icons/fi";

export default page;
