"use client";

import React, { useState } from "react";

const ROLE_CONFIG = {
  exporter: {
    key: "exporter",
    label: "Exporter",
    short: "Exporter",
    accent: "from-cyan-400 to-sky-500",
    blurb:
      "Create blockchain-backed shipment contracts, hand off custody, and see every export in motion.",
    stats: [
      { label: "In transit", value: "12", chip: "On schedule" },
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
      "Track incoming shipments, scan NFC tags on arrival, and release payments only when everything checks out.",
    stats: [
      { label: "Arriving today", value: "4", chip: "ETA < 24h" },
      { label: "Pending approvals", value: "2", chip: "Action needed" },
      { label: "Open disputes", value: "1", chip: "Under review" },
    ],
    shipments: [
      {
        id: "SHP-4520",
        route: "Durban → Mbarara",
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
      "Accept custody, monitor your fleet in real-time, and respond fast to route or tamper alerts.",
    stats: [
      { label: "In transit", value: "27", chip: "Across 6 routes" },
      { label: "On-time rate", value: "96%", chip: "Last 30 days" },
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

      <div className="mx-auto flex max-w-7xl flex-col px-4 pb-20 pt-6 lg:px-8 lg:pt-10">
        <Header
          mobileNavOpen={mobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />

        <main className="mt-10 space-y-20 lg:mt-14 lg:space-y-24">
          <Hero
            activeRoleKey={activeRoleKey}
            setActiveRoleKey={setActiveRoleKey}
            activeRole={activeRole}
          />

          <RolePortals />

          <RealtimeSection />

          <BlockchainSection />

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
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-500 text-xs font-bold uppercase tracking-tight text-slate-950 shadow-lg shadow-cyan-500/40">
          AC
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-slate-100">
            Aura Chains
          </p>
          <p className="text-xs text-slate-400">
            Secure blockchain + IoT supply chains
          </p>
        </div>
      </div>

      <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
        <a href="#" className="hover:text-white">
          Product
        </a>
        <a href="#" className="hover:text-white">
          Dashboards
        </a>
        <a href="#" className="hover:text-white">
          Docs
        </a>
        <a href="#" className="hover:text-white">
          Pricing
        </a>
        <button className="rounded-full border border-cyan-400/60 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium text-cyan-200 shadow-sm shadow-cyan-500/30 hover:bg-cyan-400/20">
          Launch app
        </button>
      </nav>

      {/* simple mobile toggle (web-first, but still behaves nicely) */}
      <button
        type="button"
        className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-200 md:hidden"
        onClick={() => setMobileNavOpen((v) => !v)}
      >
        {mobileNavOpen ? "Close" : "Menu"}
      </button>

      {mobileNavOpen && (
        <div className="absolute inset-x-4 top-16 z-20 rounded-2xl border border-slate-800 bg-slate-950/95 p-4 text-sm text-slate-200 shadow-xl shadow-black/50 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:text-white">
              Product
            </a>
            <a href="#" className="hover:text-white">
              Dashboards
            </a>
            <a href="#" className="hover:text-white">
              Docs
            </a>
            <a href="#" className="hover:text-white">
              Pricing
            </a>
            <button className="mt-2 rounded-xl border border-cyan-400/60 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-200">
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
    <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] lg:items-center">
      {/* Left copy */}
      <div className="space-y-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-[11px] font-medium text-emerald-200">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400/90 ring-2 ring-emerald-400/40" />
          Live IoT + blockchain verification
        </div>

        <div className="space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            One dark-mode cockpit
            <br />
            for your entire{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-400 bg-clip-text text-transparent">
              supply chain.
            </span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Aura Chains is a secure supply chain tracking platform for{" "}
            <span className="font-semibold text-slate-100">
              Exporters, Buyers, and Logistics Providers
            </span>
            . Every shipment, custody hand-off, NFC scan, and payment is
            verified on-chain and monitored in real time.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-slate-950 shadow-lg shadow-cyan-500/40 hover:bg-cyan-300">
            🚀 Launch Aura Chains
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:border-slate-500">
            👁️ View role dashboards
          </button>
        </div>

        <div className="flex flex-wrap gap-4 text-[11px] text-slate-400">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1">
            <span className="text-xs">🧾</span> Smart contracts for every
            shipment
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1">
            <span className="text-xs">📍</span> GPS, tamper & temperature
            sensors
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1">
            <span className="text-xs">🛡️</span> Immutable audit trails
          </span>
        </div>
      </div>

      {/* Right dashboard preview */}
      <RoleDashboardPreview
        activeRoleKey={activeRoleKey}
        setActiveRoleKey={setActiveRoleKey}
        activeRole={activeRole}
      />
    </section>
  );
}

function RoleDashboardPreview({ activeRoleKey, setActiveRoleKey, activeRole }) {
  const roles = Object.values(ROLE_CONFIG);

  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-10 top-0 -z-10 h-40 bg-[radial-gradient(circle_at_top,_#22d3ee33,_transparent_55%)]" />
      <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4 shadow-2xl shadow-cyan-500/30 backdrop-blur-sm sm:p-5 lg:p-6">
        {/* Top row: role switch + status */}
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 p-1 text-[11px]">
              {roles.map((role) => {
                const isActive = role.key === activeRoleKey;
                return (
                  <button
                    key={role.key}
                    type="button"
                    onClick={() => setActiveRoleKey(role.key)}
                    className={[
                      "rounded-full px-3 py-1 transition",
                      isActive
                        ? "bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 text-[11px] font-semibold"
                        : "text-slate-400 hover:text-slate-100",
                    ].join(" ")}
                  >
                    {role.short}
                  </button>
                );
              })}
            </div>
            <p className="mt-3 max-w-xs text-[11px] leading-relaxed text-slate-400">
              {activeRole.blurb}
            </p>
          </div>

          <div className="flex flex-col items-end gap-2 text-[11px]">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-slate-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Live alerts
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-2 py-1 text-slate-400">
              <span className="text-xs">⛓️</span> On-chain verified
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          {activeRole.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-3 text-[11px]"
            >
              <p className="flex items-center justify-between text-slate-400">
                <span>{stat.label}</span>
                <span className="text-[10px] text-slate-500">{stat.chip}</span>
              </p>
              <p className="mt-1 text-xl font-semibold text-slate-50">
                {stat.value}
              </p>
              <div className="mt-2 h-1 rounded-full bg-slate-800">
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

        {/* Shipments & alerts / NFC */}
        <div className="grid gap-4 lg:grid-cols-5">
          {/* Shipments list */}
          <div className="lg:col-span-3">
            <div className="mb-2 flex items-center justify-between text-[11px] text-slate-300">
              <span className="inline-flex items-center gap-1">
                <span>📦</span> Active shipments
              </span>
              <button className="inline-flex items-center gap-1 text-[10px] text-cyan-300 hover:text-cyan-200">
                View all
                <span>›</span>
              </button>
            </div>

            <div className="space-y-2.5">
              {activeRole.shipments.map((shipment) => (
                <div
                  key={shipment.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2.5 text-[11px]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-100">
                        {shipment.id}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        {shipment.route}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/60 px-2 py-1 text-[10px]">
                      <span className={shipment.statusTone}>●</span>
                      <span className={shipment.statusTone}>
                        {shipment.status}
                      </span>
                    </span>
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                      style={{ width: shipment.progress }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alerts / NFC / Map */}
          <div className="space-y-3 lg:col-span-2">
            {/* NFC widget for buyer, alerts otherwise */}
            {activeRoleKey === "buyer" ? (
              <div className="rounded-2xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/10 via-slate-900/90 to-slate-950 px-3 py-3.5 text-[11px]">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 text-emerald-200">
                    <span>📲</span> NFC Tag Scan
                  </span>
                  <span className="rounded-full bg-slate-900/70 px-2 py-0.5 text-[10px] text-slate-300">
                    Blockchain verified
                  </span>
                </div>
                <p className="mb-3 text-[11px] text-emerald-50">
                  Tap the package NFC tag to verify authenticity and tamper
                  history.
                </p>
                <button className="mb-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-[11px] font-semibold text-slate-950 hover:bg-emerald-300">
                  Start NFC scan
                </button>
                <div className="rounded-xl border border-emerald-400/40 bg-slate-950/80 px-2.5 py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-emerald-200">
                      Last scan: SHP-4412
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-200">
                      ✅ Product authentic
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] text-slate-400">
                    Tamper seal:{" "}
                    <span className="text-emerald-300">Intact</span> · Batch
                    #AC-2045 · Block #74532
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-3.5 text-[11px]">
                <div className="mb-2 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-slate-200">
                    <span>⚠️</span> Live alerts
                  </span>
                  <span className="rounded-full bg-slate-950/70 px-2 py-0.5 text-[10px] text-slate-400">
                    {activeRole.alerts.length} active
                  </span>
                </div>
                <div className="space-y-1.5">
                  {activeRole.alerts.map((alert, i) => (
                    <div
                      key={alert}
                      className="flex gap-2 rounded-xl bg-slate-950/80 px-2.5 py-2"
                    >
                      <span className="mt-0.5 text-xs text-amber-300">●</span>
                      <div>
                        <p className="text-[10px] text-slate-200">{alert}</p>
                        <p className="mt-0.5 text-[9px] text-slate-500">
                          Just now · Tap to view shipment
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* tiny map preview / custody timeline */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-[11px]">
              <div className="mb-2 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-slate-200">
                  <span>🗺️</span> Route & custody
                </span>
                <span className="text-[9px] text-slate-500">
                  Exporter → Logistics → Buyer
                </span>
              </div>
              <div className="relative mb-2 h-20 overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-950">
                {/* faux route line */}
                <div className="absolute inset-0">
                  <div className="absolute left-4 top-10 h-[2px] w-[70%] bg-gradient-to-r from-cyan-400/40 via-emerald-400/60 to-indigo-500/60" />
                  <span className="absolute left-3 top-8 text-xs">📍</span>
                  <span className="absolute right-5 top-8 text-xs">🏁</span>
                  <div className="absolute left-1/2 top-8 h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-400 shadow shadow-emerald-400/70" />
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span>Last update: 32s ago</span>
                <span>Latency &lt; 2s · WebSocket</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RolePortals() {
  const roles = [
    {
      key: "exporter",
      title: "Exporter portal",
      emoji: "🚢",
      accent: "from-cyan-400 to-sky-500",
      points: [
        "Create & sign smart contracts for new shipments.",
        "See shipment status by lane, port, or buyer.",
        "Access digital documents & export certificates in one click.",
      ],
      cta: "Sign in as Exporter",
    },
    {
      key: "buyer",
      title: "Buyer portal",
      emoji: "🛒",
      accent: "from-emerald-400 to-lime-400",
      points: [
        "Track incoming shipments and ETAs at a glance.",
        "Scan NFC tags to verify authenticity and tamper history.",
        "Approve deliveries to trigger on-chain payments.",
      ],
      cta: "Sign in as Buyer",
    },
    {
      key: "logistics",
      title: "Logistics provider portal",
      emoji: "🚚",
      accent: "from-indigo-400 to-fuchsia-500",
      points: [
        "Accept custody and log hand-offs on-chain.",
        "Monitor all active routes on a live map.",
        "Respond quickly to route deviations and sensor alerts.",
      ],
      cta: "Sign in as Logistics",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Three roles. One shared source of truth.
          </h2>
          <p className="max-w-xl text-sm text-slate-400">
            Aura Chains gives each role a tailored dashboard, while keeping
            shipment, custody and payment data consistent and verifiable for
            everyone.
          </p>
        </div>
        <p className="text-xs text-slate-500">
          Role-based access control · SSO-ready · 2FA support
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {roles.map((role) => (
          <div
            key={role.key}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-sm shadow-lg shadow-black/40"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            <div className="absolute inset-x-[-40%] top-[-40%] h-40 bg-gradient-to-r from-transparent via-slate-700/15 to-transparent blur-3xl" />

            <div className="relative space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                <span>{role.emoji}</span>
                <span className="font-semibold">{role.title}</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-[2px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-slate-200 transition group-hover:border-cyan-400/60 group-hover:text-cyan-200">
                {role.cta}
                <span className="text-[10px]">›</span>
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

function RealtimeSection() {
  return (
    <section className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:items-start">
      {/* Copy & bullets */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
          Real-time IoT monitoring & alerting.
        </h2>
        <p className="text-sm text-slate-400">
          Every shipment carries IoT devices for{" "}
          <span className="font-semibold text-slate-100">
            GPS, tamper, temperature, and humidity
          </span>
          . Aura Chains streams this into a dark-mode dashboard so issues
          surface the second they happen.
        </p>
        <div className="space-y-3 text-sm text-slate-300">
          <Bullet
            emoji="📍"
            title="Live map for all active shipments"
            body="Clustered markers show where shipments are, what route they’re on, and whether they’re on time, delayed, or at risk."
          />
          <Bullet
            emoji="📡"
            title="Sensor feeds with thresholds"
            body="Define acceptable ranges for temperature, humidity, shock and more. When a reading crosses a threshold, everyone who needs to know is notified."
          />
          <Bullet
            emoji="🔔"
            title="Always-visible alerts widget"
            body="A global alert panel follows the user across dashboards, listing tamper events, delays, and custody changes with one-click access to the shipment detail."
          />
        </div>
      </div>

      {/* UI preview cards */}
      <div className="space-y-4">
        {/* Map card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-xl shadow-black/50">
          <div className="mb-3 flex items-center justify-between text-xs text-slate-300">
            <span className="inline-flex items-center gap-1">
              <span>🗺️</span> In-transit shipments
            </span>
            <span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-[10px] text-slate-400">
              27 active · 3 alerts
            </span>
          </div>
          <div className="relative h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950">
            {/* pseudo map grid */}
            <div className="absolute inset-0 opacity-40">
              {Array.from({ length: 8 }).map((_, row) => (
                <div
                  key={row}
                  className="flex h-1/8 w-full flex-1 border-t border-slate-800/60"
                >
                  {Array.from({ length: 10 }).map((__, col) => (
                    <div
                      key={col}
                      className="h-full flex-1 border-l border-slate-900/60"
                    />
                  ))}
                </div>
              ))}
            </div>
            {/* route lines & markers */}
            <div className="absolute inset-0">
              <RouteDot left="12%" top="70%" tone="bg-cyan-400" />
              <RouteDot left="38%" top="52%" tone="bg-emerald-400" />
              <RouteDot left="62%" top="30%" tone="bg-emerald-400" />
              <RouteDot left="82%" top="22%" tone="bg-amber-400" />
              <RouteLine from="12% 70%" to="82% 22%" />
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
            <span>Last IoT update: 14s ago</span>
            <span>On-time deliveries (24h): 96%</span>
          </div>
        </div>

        {/* Alert & timeline card */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3 text-[11px]">
            <div className="mb-2 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-slate-200">
                <span>⚠️</span> Critical alerts
              </span>
              <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-400">
                Tamper · Delays
              </span>
            </div>
            <div className="space-y-1.5">
              <AlertLine
                tone="text-red-300"
                title="Tamper event – SHP-5033"
                meta="Port Mombasa · Door sensor triggered"
              />
              <AlertLine
                tone="text-amber-300"
                title="Temperature spike – reefer container"
                meta="Route: Durban → Mombasa · 9 minutes above 8°C"
              />
              <AlertLine
                tone="text-cyan-300"
                title="Pickup overdue – SHP-4987"
                meta="Ready for pickup · 25 minutes late"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3 text-[11px]">
            <div className="mb-2 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-slate-200">
                <span>⏱️</span> Status timeline
              </span>
              <span className="text-[10px] text-slate-400">
                Shipment #SHP-3421
              </span>
            </div>
            <div className="space-y-2">
              <TimelineStep
                emoji="✅"
                title="Smart contract signed"
                meta="Exporter & buyer · Block #74312"
              />
              <TimelineStep
                emoji="🚚"
                title="Custody transferred to Logistics"
                meta="Checkpoint 1 · GPS & tamper sensors armed"
              />
              <TimelineStep
                emoji="📍"
                title="Arrived at inland depot"
                meta="Checkpoint 3 · No anomalies detected"
              />
              <TimelineStep
                emoji="🧾"
                title="Pending buyer approval"
                meta="Payment release awaiting NFC verification"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlockchainSection() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
            Blockchain audit trails that humans can actually read.
          </h2>
          <p className="max-w-xl text-sm text-slate-400">
            Every contract, custody hand-off, NFC scan, dispute and payment is
            written to an immutable ledger – but presented in a clean, human
            timeline.
          </p>
        </div>
        <p className="text-xs text-slate-500">
          Export-ready receipts · CSV/PDF export · Explorer links
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        {/* Audit log preview */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-4 text-[11px] shadow-xl shadow-black/60">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-100">
                Shipment audit log – SHP-3421
              </p>
              <p className="text-[10px] text-slate-500">
                100% on-chain · 24 events · Filter: Major events
              </p>
            </div>
            <div className="flex gap-2 text-[10px]">
              <button className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-slate-200">
                Export PDF
              </button>
              <button className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-slate-200">
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
              title="Custody transferred to Logistics"
              body="TransLogix Ltd accepted pickup and activated IoT sensors."
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
          <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-4 text-[11px]">
            <p className="mb-2 text-xs font-semibold text-slate-100">
              Digital identities & permissions
            </p>
            <p className="mb-3 text-[11px] text-slate-400">
              Every exporter, buyer, logistics provider and IoT device has a
              verified identity. Actions in the UI map cleanly to blockchain
              addresses.
            </p>
            <div className="space-y-2">
              <IdentityLine
                name="ACME Export Ltd"
                role="Exporter"
                meta="0x98...3fa2 · Verified"
              />
              <IdentityLine
                name="Aurora Retail GmbH"
                role="Buyer"
                meta="0x4a...10b5 · Verified"
              />
              <IdentityLine
                name="TransLogix Ltd"
                role="Logistics Provider"
                meta="0xbb...c911 · Verified"
              />
              <IdentityLine
                name="Door sensor – Container #7"
                role="IoT device"
                meta="0x10...a32d · Read-only"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/85 p-4 text-[11px]">
            <p className="mb-2 text-xs font-semibold text-slate-100">
              Visual verification cues
            </p>
            <div className="space-y-2 text-[11px] text-slate-300">
              <p>
                ✅ <span className="font-semibold">Blockchain verified</span>{" "}
                appears next to data that has been confirmed on-chain
                (contracts, NFC scans, custody events).
              </p>
              <p>
                🛡️ <span className="font-semibold">Shield badges</span>{" "}
                highlight fully signed contracts and completed payments.
              </p>
              <p>
                🧾 <span className="font-semibold">Receipts & QR codes</span>{" "}
                allow offline verification in audits and compliance reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* small helper components */

function Bullet({ emoji, title, body }) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/80 text-base">
        {emoji}
      </div>
      <div>
        <p className="text-sm font-medium text-slate-100">{title}</p>
        <p className="text-xs text-slate-400">{body}</p>
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

function RouteLine({ from, to }) {
  const [fromX, fromY] = from.split(" ");
  const [toX, toY] = to.split(" ");
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
    <div className="rounded-xl bg-slate-950/80 px-2.5 py-2">
      <p className={["text-[11px] font-medium", tone].join(" ")}>{title}</p>
      <p className="text-[10px] text-slate-400">{meta}</p>
    </div>
  );
}

function TimelineStep({ emoji, title, meta }) {
  return (
    <div className="flex gap-2">
      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs">
        {emoji}
      </div>
      <div>
        <p className="text-[11px] text-slate-100">{title}</p>
        <p className="text-[10px] text-slate-400">{meta}</p>
      </div>
    </div>
  );
}

function AuditRow({ badge, tone, title, body, meta }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/90 px-3 py-2.5">
      <div
        className={[
          "mt-0.5 inline-flex h-fit items-center rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide",
          tone,
        ].join(" ")}
      >
        {badge}
      </div>
      <div className="space-y-0.5">
        <p className="text-[11px] font-medium text-slate-100">{title}</p>
        <p className="text-[10px] text-slate-300">{body}</p>
        <p className="text-[9px] text-slate-500">{meta}</p>
      </div>
    </div>
  );
}

function IdentityLine({ name, role, meta }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/90 px-3 py-2">
      <div>
        <p className="text-[11px] font-medium text-slate-100">
          {name}{" "}
          <span className="ml-1 rounded-full bg-slate-900/80 px-1.5 py-0.5 text-[9px] text-slate-300">
            {role}
          </span>
        </p>
        <p className="text-[10px] text-slate-500">{meta}</p>
      </div>
      <span className="text-xs">🛡️</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-900 pt-6 text-xs text-slate-500">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Aura Chains. All rights reserved.</p>
        <div className="flex flex-wrap gap-3">
          <a href="#" className="hover:text-slate-300">
            Status
          </a>
          <a href="#" className="hover:text-slate-300">
            Security
          </a>
          <a href="#" className="hover:text-slate-300">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-300">
            Docs
          </a>
        </div>
      </div>
    </footer>
  );
}

export default page;
