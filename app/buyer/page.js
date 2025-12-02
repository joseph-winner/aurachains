"use client";
import React from "react";
import {
    HiMagnifyingGlass,
    HiBell,
    HiChevronRight,
    HiExclamationTriangle,
} from "react-icons/hi2";
import { HiShieldCheck, HiOutlineLogout } from "react-icons/hi";

function page() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
            {/* Top Nav */}
            <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 gap-4">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg">
                            <HiShieldCheck className="text-xl" />
                        </div>
                        <div className="leading-tight">
                            <p className="font-semibold text-base">AuraChain Solutions</p>
                            <p className="text-xs text-slate-400">
                                Secure Gold Supply Tracking
                            </p>
                        </div>
                    </div>

                    {/* Search */}
                    <div className="flex-1 max-w-xl hidden md:flex">
                        <div className="relative w-full">
                            <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                            <input
                                type="text"
                                placeholder="Search shipments, IDs, alerts..."
                                className="w-full rounded-full bg-slate-900/80 border border-slate-700/70 px-10 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-400"
                            />
                        </div>
                    </div>

                    {/* Right section */}
                    <div className="flex items-center gap-4">
                        <button className="relative rounded-full p-2 bg-slate-900/70 border border-slate-700 hover:border-slate-500 transition">
                            <HiBell className="text-lg text-slate-300" />
                            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-rose-500 border border-slate-950" />
                        </button>

                        <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-700">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-400 flex items-center justify-center text-xs font-semibold">
                                B
                            </div>
                            <div className="text-xs">
                                <p className="font-medium">Welcome, Buyer</p>
                                <p className="text-slate-400">buyer@aurachain.io</p>
                            </div>
                            <span className="h-6 w-px bg-slate-700" />
                            <button className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200">
                                <HiOutlineLogout className="text-sm" />
                                Log out
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main */}
            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
                    {/* Title */}
                    <div>
                        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                            Buyer Dashboard
                        </h1>
                        <p className="text-sm md:text-base text-slate-400 mt-1">
                            Track incoming shipments, verify authenticity, and approve
                            payments in real time.
                        </p>
                    </div>

                    {/* Top Row */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Incoming Shipments */}
                        <section className="md:col-span-2 bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-lg shadow-blue-900/30">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold">
                                    Incoming Shipments at a Glance
                                </h2>
                                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                                    3 Active
                                </span>
                            </div>

                            {/* Map placeholder */}
                            <div className="relative rounded-xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 overflow-hidden mb-4">
                                <div className="aspect-[5/2]">
                                    {/* Grid / circuit lines */}
                                    <div className="absolute inset-6 border border-slate-800/60 rounded-3xl" />
                                    <div className="absolute inset-x-8 top-1/2 h-px bg-slate-800/60" />
                                    <div className="absolute inset-y-6 left-1/2 w-px bg-slate-800/60" />

                                    {/* Arc line */}
                                    <div className="absolute inset-x-10 bottom-10 h-20 rounded-full border-2 border-sky-500/50 blur-[1px]" />

                                    {/* Nodes */}
                                    <div className="absolute left-10 top-10">
                                        <span className="h-4 w-4 rounded-full bg-sky-500 shadow-lg shadow-sky-500/60 block" />
                                        <p className="mt-1 text-[10px] text-slate-300">Origin Hub</p>
                                    </div>
                                    <div className="absolute left-1/4 bottom-10">
                                        <span className="h-4 w-4 rounded-full bg-sky-400 shadow shadow-sky-500/40 block" />
                                    </div>
                                    <div className="absolute left-1/2 bottom-5">
                                        <span className="h-4 w-4 rounded-full bg-sky-300 shadow shadow-sky-400/40 block" />
                                    </div>
                                    <div className="absolute right-10 top-14">
                                        <span className="h-5 w-5 rounded-full bg-rose-500 shadow-lg shadow-rose-500/70 flex items-center justify-center">
                                            <HiExclamationTriangle className="text-xs text-white" />
                                        </span>
                                        <p className="mt-1 text-[10px] text-rose-200">
                                            Alert at Hub C
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Shipment list */}
                            <div className="space-y-3 text-sm">
                                {/* High priority */}
                                <div className="rounded-xl border border-rose-500/70 bg-gradient-to-r from-slate-900 to-slate-900/60 px-4 py-3 flex flex-col gap-1">
                                    <p className="font-medium flex items-center justify-between">
                                        Shipment #SC-8294 (High Priority) – En Route
                                        <span className="flex items-center gap-1 text-xs text-rose-300">
                                            Tamper Alert
                                            <HiExclamationTriangle className="text-sm" />
                                        </span>
                                    </p>
                                    <p className="text-slate-300">
                                        <span className="text-slate-400">Status:</span> In Transit
                                    </p>
                                    <p className="text-slate-300">
                                        <span className="text-slate-400">ETA:</span> Oct 28, 14:00
                                    </p>
                                    <p className="text-rose-300">
                                        <span className="text-slate-400">Issues:</span> Tamper
                                        alert – temperature excursion at Hub C
                                    </p>
                                </div>

                                {/* Normal shipments */}
                                <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 flex flex-col gap-1">
                                    <p className="font-medium">
                                        Shipment #SC-9012 – Arriving Soon
                                    </p>
                                    <p className="text-slate-300">
                                        <span className="text-slate-400">Status:</span> Out for
                                        Delivery
                                    </p>
                                    <p className="text-slate-300">
                                        <span className="text-slate-400">ETA:</span> Today, 16:30
                                    </p>
                                </div>

                                <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 flex flex-col gap-1">
                                    <p className="font-medium">
                                        Shipment #SC-8755 – Awaiting Customs Clearance
                                    </p>
                                    <p className="text-slate-300">
                                        <span className="text-slate-400">Status:</span> At Port
                                        (Verified)
                                    </p>
                                    <p className="text-slate-300">
                                        <span className="text-slate-400">ETA:</span> Oct 30, 10:00
                                    </p>
                                </div>
                            </div>

                            <button className="mt-4 w-full inline-flex items-center justify-center gap-2 text-sm font-medium rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700/90 py-2.5 transition">
                                View all incoming shipments
                                <HiChevronRight className="text-base" />
                            </button>
                        </section>

                        {/* Verify Authenticity */}
                        <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex flex-col items-center justify-between shadow-lg shadow-blue-900/30">
                            <div className="w-full">
                                <h2 className="text-lg font-semibold mb-2">
                                    Verify Authenticity
                                </h2>
                                <p className="text-xs text-slate-400">
                                    Scan NFC tags on arrival to confirm chain-of-custody and
                                    verify that gold bars are genuine and untampered.
                                </p>
                            </div>

                            <div className="flex-1 flex items-center justify-center py-4">
                                <div className="relative">
                                    <div className="h-44 w-44 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-sky-500/60">
                                        <div className="h-32 w-32 rounded-full bg-slate-950/40 border border-sky-100/30 flex flex-col items-center justify-center text-center px-4">
                                            <span className="text-3xl mb-1">📶</span>
                                            <p className="text-xs font-semibold leading-tight">
                                                Scan NFC to
                                                <br />
                                                Verify Package
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 rounded-full border border-sky-400/40 animate-ping" />
                                </div>
                            </div>

                            <p className="text-[11px] text-center text-slate-400 mt-2">
                                Place your NFC-enabled device near the package tag to initiate
                                instant verification.
                            </p>
                        </section>
                    </div>

                    {/* Bottom Row */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Tamper History */}
                        <section className="md:col-span-2 bg-slate-900/70 border border-slate-800 rounded-2xl p-5">
                            <h2 className="text-lg font-semibold mb-4">
                                Tamper History &amp; Quality Checks
                            </h2>
                            <div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)]">
                                {/* Chart placeholder */}
                                <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-4 flex items-end">
                                    <div className="w-full h-24 relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950 to-transparent opacity-80" />
                                        <svg
                                            viewBox="0 0 160 80"
                                            className="relative z-10 w-full h-full"
                                        >
                                            <polyline
                                                points="0,60 30,45 60,55 90,30 120,35 150,15"
                                                fill="none"
                                                stroke="currentColor"
                                                className="text-sky-400"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <p className="absolute bottom-1 left-2 text-[10px] text-slate-500">
                                            Last 7 days
                                        </p>
                                    </div>
                                </div>

                                {/* Events */}
                                <div className="space-y-3 text-sm">
                                    <div className="rounded-xl bg-slate-900 border border-slate-800 px-4 py-3">
                                        <p className="font-medium">Oct 25 – Tamper Alert</p>
                                        <p className="text-slate-300">
                                            Opening attempt detected at Hub C.
                                        </p>
                                        <p className="text-[11px] text-emerald-400 mt-1">
                                            Status: Resolved – buyer verification completed.
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-slate-900 border border-slate-800 px-4 py-3">
                                        <p className="font-medium">Oct 23 – Quality Check</p>
                                        <p className="text-slate-300">
                                            Temperature &amp; humidity sensors within optimal range.
                                        </p>
                                        <p className="text-[11px] text-emerald-400 mt-1">
                                            Status: Passed – no anomalies recorded.
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-slate-900 border border-slate-800 px-4 py-3">
                                        <p className="font-medium">Oct 20 – Chain-of-Custody</p>
                                        <p className="text-slate-300">
                                            Digital signatures verified for all handlers.
                                        </p>
                                        <p className="text-[11px] text-sky-400 mt-1">
                                            Status: Verified – blockchain record confirmed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Approval & Payment */}
                        <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
                            <div>
                                <h2 className="text-lg font-semibold mb-3">
                                    Approval &amp; Payment Triggers
                                </h2>
                                <div className="space-y-3 text-sm">
                                    <div className="rounded-xl bg-slate-900 border border-slate-800 px-4 py-3">
                                        <p className="text-slate-400 text-xs mb-1">
                                            Payment Trigger
                                        </p>
                                        <p className="font-medium">
                                            Shipment #SC-9012 – Pending Verification
                                        </p>
                                        <p className="text-[11px] text-slate-400 mt-1">
                                            Funds will be released once NFC scan and quality report
                                            are completed.
                                        </p>
                                    </div>
                                    <div className="rounded-xl bg-slate-900 border border-slate-800 px-4 py-3">
                                        <p className="text-slate-400 text-xs mb-1">
                                            Approval Required
                                        </p>
                                        <p className="font-medium">
                                            Quality Report #QR-451 – Waiting for Review
                                        </p>
                                        <p className="text-[11px] text-slate-400 mt-1">
                                            Confirm assay results and purity grade to finalize
                                            settlement.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-sm font-medium py-2.5 transition">
                                Open approval center
                                <HiChevronRight className="text-base" />
                            </button>
                        </section>
                    </div>

                    {/* Disputes CTA */}
                    <section className="mt-2 bg-gradient-to-r from-rose-600 to-orange-500 rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white shadow-lg shadow-rose-700/40">
                        <div className="flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                                <HiExclamationTriangle className="text-xl" />
                            </span>
                            <div>
                                <p className="font-semibold">
                                    Issues? Open disputes for resolution
                                </p>
                                <p className="text-xs text-white/80">
                                    Log disputes, attach evidence, and collaborate with exporters
                                    and logistics providers in one secure workspace.
                                </p>
                            </div>
                        </div>
                        <button className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wide transition">
                            Learn more
                        </button>
                    </section>

                    {/* Footer */}
                    <footer className="pt-4 border-t border-slate-900 mt-4">
                        <p className="text-[11px] text-slate-500">
                            © {new Date().getFullYear()} AuraChain Solutions. All rights
                            reserved. Privacy Policy · Terms of Service.
                        </p>
                    </footer>
                </div>
            </main>
        </div>
    );
}

export default page;
