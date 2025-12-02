import React from "react";

const shipments = [
  {
    id: "AC-1045",
    type: "Pickup",
    route: "Entebbe, UG → Dubai, AE",
    status: "Pending",
    detail: "Pickup confirmed • 1h 15m remaining",
    accent: "bg-amber-400",
    statusBadge: "bg-amber-500/15 text-amber-300 ring-1 ring-amber-400/40",
    action: "Dispatch",
  },
  {
    id: "AC-1046",
    type: "Handoff",
    route: "Nairobi, KE → Mombasa Port, KE",
    status: "Ready",
    detail: "Vault loaded • 45m remaining",
    accent: "bg-emerald-400",
    statusBadge: "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/40",
    action: "Confirm",
  },
  {
    id: "AC-1047",
    type: "Pickup",
    route: "Kampala, UG → Johannesburg, ZA",
    status: "Scheduled",
    detail: "Customs cleared • 3h remaining",
    accent: "bg-sky-400",
    statusBadge: "bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/40",
    action: "View",
  },
];

const routeAlerts = [
  {
    id: "AC-2022",
    label: "Route Deviation",
    desc: "Outside geo-fence (+18km) near Nairobi bypass",
    time: "10:45 AM",
    level: "High",
    iconBg: "bg-red-500/15",
    iconDot: "bg-red-500",
  },
  {
    id: "AC-2033",
    label: "Temperature Anomaly",
    desc: "Exceeds 8°C threshold for sealed bullion crate",
    time: "11:15 AM",
    level: "Medium",
    iconBg: "bg-amber-500/15",
    iconDot: "bg-amber-400",
  },
  {
    id: "AC-2039",
    label: "Unexpected Delay",
    desc: "Traffic congestion near Mbarara–Masaka road",
    time: "11:50 AM",
    level: "Medium",
    iconBg: "bg-amber-500/15",
    iconDot: "bg-amber-400",
  },
];

function page() {
  return (
    <main className="space-y-6 lg:space-y-8">
      {/* Top Row */}
      <section className="grid gap-6 lg:grid-cols-3">
        {/* Pending Pickups */}
        <div className="lg:col-span-2 rounded-3xl border border-slate-800/60 bg-slate-900/60 p-5 shadow-2xl backdrop-blur-md lg:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold tracking-wide text-slate-100 lg:text-xl">
                Pending Pickups &amp; Handoffs
              </h2>
              <p className="mt-1.5 text-sm text-slate-400">
                High-value routes currently awaiting dispatch or
                confirmation.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Live
              </span>
              <span className="hidden items-center gap-1 sm:flex">
                <span className="h-1 w-3 rounded-full bg-emerald-400/70" />
                Auto-sync 30s
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {shipments.map((s) => (
              <div
                key={s.id}
                className="group flex items-start gap-4 rounded-2xl border border-slate-800/50 bg-slate-950/40 px-4 py-4 shadow-sm transition-all hover:border-slate-700 hover:bg-slate-900/40 sm:px-5"
              >
                <div
                  className={`mt-1.5 h-10 w-1.5 rounded-full shadow-[0_0_10px_currentColor] ${s.accent}`}
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm font-bold text-slate-100 sm:text-base">
                      {s.id} • {s.type}
                    </p>
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${s.statusBadge}`}
                    >
                      {s.status}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-slate-300">
                    {s.route}
                  </p>
                  <p className="mt-1.5 text-xs text-slate-400">
                    Status:{" "}
                    <span className="text-slate-200">{s.detail}</span>
                  </p>
                </div>
                <button className="ml-3 hidden rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:scale-105 hover:bg-emerald-400 sm:inline-block">
                  {s.action}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                3 secure pickups today
              </span>
              <span className="hidden items-center gap-2 sm:flex">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                1 airport handoff in progress
              </span>
            </div>
            <button className="rounded-full border border-slate-700/80 px-4 py-1.5 text-xs font-bold text-slate-200 transition hover:border-emerald-400/80 hover:text-emerald-300">
              View full manifest
            </button>
          </div>
        </div>

        {/* Fleet Stats & KPIs */}
        <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-5 shadow-2xl backdrop-blur-md lg:p-6">
          <div className="mb-5 flex items-start justify-between">
            <div>
              <h2 className="text-lg font-bold tracking-wide text-slate-100">
                Fleet Status &amp; KPIs
              </h2>
              <p className="mt-1.5 text-sm text-slate-400">
                Aura Chains fleet health across all active corridors.
              </p>
            </div>
            <button className="rounded-full p-1 text-slate-500 hover:bg-slate-800 hover:text-slate-200">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                viewBox="0 0 24 24"
              >
                <circle cx="5" cy="12" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="19" cy="12" r="1.5" />
              </svg>
            </button>
          </div>

          <div className="space-y-6 text-sm">
            {/* Active Trucks */}
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-medium text-slate-400">Active Trucks</p>
                <p className="mt-1 text-2xl font-bold text-slate-50">
                  124 <span className="text-lg text-slate-600">/ 150</span>
                </p>
              </div>
              <div className="flex flex-1 justify-end">
                <div className="flex items-end gap-1.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-1.5 rounded-full bg-sky-400/80 ${[3, 4, 5, 6, 7].includes(i)
                        ? "h-7"
                        : [1, 2, 8].includes(i)
                          ? "h-5"
                          : "h-3"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* On-time delivery */}
            <div className="flex items-center justify-between gap-3 border-t border-slate-800/80 pt-3">
              <div>
                <p className="text-slate-400">On-Time Delivery Rate</p>
                <p className="mt-1 text-lg font-semibold text-slate-50">
                  98.2%
                </p>
              </div>
              <div className="flex items-center gap-1 text-emerald-400">
                <svg
                  className="h-9 w-11"
                  viewBox="0 0 40 24"
                  fill="none"
                >
                  <path
                    d="M2 18L10 10L16 14L24 6L31 9L38 3"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[11px] font-medium">+2.1%</span>
              </div>
            </div>

            {/* Fuel efficiency & security incidents */}
            <div className="grid grid-cols-2 gap-4 border-t border-slate-800/60 pt-4">
              <div>
                <p className="font-medium text-slate-400">Fuel Efficiency</p>
                <p className="mt-1 text-2xl font-bold text-slate-50">
                  6.8 MPG
                </p>
                <p className="mt-1 text-xs font-medium text-emerald-400">
                  +0.3 MPG vs last week
                </p>
              </div>
              <div>
                <p className="font-medium text-slate-400">
                  Security Incidents (24h)
                </p>
                <p className="mt-1 text-2xl font-bold text-slate-50">
                  1
                </p>
                <p className="mt-1 text-xs font-medium text-red-400">
                  3 resolved last 7 days
                </p>
              </div>
            </div>

            <button className="mt-2 w-full rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-300 px-4 py-3 text-center text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02] hover:from-emerald-400 hover:via-teal-300 hover:to-amber-200">
              Open detailed analytics
            </button>
          </div>
        </div>
      </section>

      {/* Map & Alerts */}
      <section className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-5 shadow-2xl backdrop-blur-md lg:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold tracking-wide text-slate-100 lg:text-xl">
              In-Transit Shipments Map (Live GPS)
            </h2>
            <p className="mt-1.5 text-sm text-slate-400">
              Active Aura Chains corridors with secure gold consignments.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              87 active routes
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              2 deviations
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              1 anomaly
            </span>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1.1fr)]">
          {/* Map panel */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-800/50 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-4 shadow-inner lg:p-6">
            {/* Filter card */}
            <div className="pointer-events-auto absolute left-5 top-5 w-64 rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4 text-xs backdrop-blur-md">
              <p className="mb-3 text-sm font-bold text-slate-100">
                Filter
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-300">Active routes</span>
                  <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-bold text-emerald-300">
                    87
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Deviations</span>
                  <span className="flex items-center gap-1">
                    <span className="h-4 w-7 rounded-full bg-slate-800">
                      <span className="ml-auto block h-4 w-4 rounded-full bg-amber-400" />
                    </span>
                    <span className="text-amber-300">2</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Anomalies</span>
                  <span className="flex items-center gap-1">
                    <span className="h-4 w-7 rounded-full bg-slate-800">
                      <span className="ml-auto block h-4 w-4 rounded-full bg-red-500" />
                    </span>
                    <span className="text-red-400">1</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Fake map routes */}
            <div className="mt-10 h-52 w-full md:h-64">
              <div className="relative h-full w-full">
                {/* Glow base */}
                <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.22),transparent_55%),radial-gradient(circle_at_80%_100%,rgba(52,211,153,0.19),transparent_40%)] opacity-70" />

                {/* Route paths */}
                <div className="absolute left-0 right-0 top-1/4">
                  <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 blur-[1px]" />
                </div>
                <div className="absolute left-0 right-0 top-1/2">
                  <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-300 blur-[1px]" />
                </div>
                <div className="absolute left-0 right-0 bottom-1/4">
                  <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-emerald-400 via-amber-300 to-red-500/80 blur-[1px]" />
                </div>

                {/* Vehicles / nodes */}
                <div className="absolute left-[12%] top-[26%] flex items-center gap-2 text-xs font-medium shadow-black/50 drop-shadow-md">
                  <div className="flex h-7 w-9 items-center justify-center rounded-lg bg-sky-500/90 text-slate-950 shadow-lg">
                    🚢
                  </div>
                  <span className="hidden text-slate-100 md:inline">
                    Indian Ocean hub
                  </span>
                </div>
                <div className="absolute left-[45%] top-[50%] flex items-center gap-2 text-xs font-medium shadow-black/50 drop-shadow-md">
                  <div className="flex h-7 w-9 items-center justify-center rounded-lg bg-emerald-400 text-slate-950 shadow-lg">
                    🚛
                  </div>
                  <span className="hidden text-slate-100 md:inline">
                    East Africa corridor
                  </span>
                </div>
                <div className="absolute left-[70%] bottom-[23%] flex items-center gap-2 text-xs font-medium shadow-black/50 drop-shadow-md">
                  <div className="flex h-7 w-9 items-center justify-center rounded-lg bg-amber-300 text-slate-950 shadow-lg">
                    ✈️
                  </div>
                  <span className="hidden text-slate-100 md:inline">
                    Airlock to Dubai
                  </span>
                </div>
                <div className="absolute left-[25%] bottom-[18%] flex items-center gap-2 text-xs font-medium shadow-black/50 drop-shadow-md">
                  <div className="flex h-7 w-9 items-center justify-center rounded-lg bg-red-500 text-slate-950 shadow-lg">
                    !
                  </div>
                  <span className="hidden text-red-200 md:inline">
                    Temp alert – Mbarara
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Alerts column */}
          <div className="space-y-6">
            {/* Route & Status Alerts */}
            <div className="rounded-2xl border border-slate-800/60 bg-slate-950/40 p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-300">
                Route &amp; Status Alerts
              </h3>
              <p className="mt-1.5 text-xs text-slate-400">
                Prioritized signals for security and operations.
              </p>
              <div className="mt-4 space-y-3">
                {routeAlerts.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-start gap-3 rounded-xl border border-slate-800/60 bg-slate-900/40 px-4 py-3 transition hover:bg-slate-800/40"
                  >
                    <div
                      className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-full ${a.iconBg}`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${a.iconDot}`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-100">
                        {a.id} • {a.label}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {a.desc}
                      </p>
                      <p className="mt-1.5 text-xs font-medium text-slate-500">
                        {a.time} •{" "}
                        <span className="text-amber-300">
                          {a.level} priority
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tamper Alert Actions */}
            <div className="rounded-2xl border border-red-500/40 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-5 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/20 ring-1 ring-red-500/40">
                  <span className="text-sm font-bold text-red-400">!</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-red-300">
                    Tamper Alert Actions
                  </h3>
                  <p className="text-xs text-slate-400">
                    S-3015: Potential seal breach on vault crate.
                  </p>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">
                Door sensor activated near{" "}
                <span className="font-medium text-slate-100">
                  Kampala–Entebbe Express
                </span>{" "}
                at <span className="font-medium text-slate-100">11:30 AM</span>.
                Escalate security protocol or review live feed.
              </p>
              <div className="flex flex-wrap gap-3 text-xs font-bold">
                <button className="flex-1 min-w-[120px] rounded-xl bg-red-500 px-4 py-3 text-center text-slate-950 shadow-lg shadow-red-500/40 transition hover:scale-105 hover:bg-red-400">
                  Initiate Protocol
                </button>
                <button className="flex-1 min-w-[120px] rounded-xl border border-amber-400/80 bg-amber-300/90 px-4 py-3 text-center text-slate-950 shadow-md shadow-amber-500/30 transition hover:scale-105 hover:bg-amber-200">
                  Review Footage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
