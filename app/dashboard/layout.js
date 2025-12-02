"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
    const pathname = usePathname();

    const isActive = (path) => {
        if (path === "/dashboard" && pathname === "/dashboard") return true;
        if (path !== "/dashboard" && pathname.startsWith(path)) return true;
        return false;
    };

    const navItems = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Shipments", path: "/dashboard/shipments" },
        { name: "Fleet", path: "/dashboard/fleet" },
        { name: "Analytics", path: "/dashboard/analytics" },
        { name: "Settings", path: "/dashboard/settings" },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-slate-100 selection:bg-emerald-500/30">
            <div className="mx-auto max-w-7xl px-4 py-6 lg:px-6 lg:py-10">
                {/* Top Bar */}
                <header className="mb-6 flex flex-wrap items-center gap-4 border-b border-slate-800/80 pb-4 lg:mb-8">
                    {/* Logo + Brand */}
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-400 to-amber-300 text-xl font-black text-slate-950 shadow-lg shadow-emerald-500/40">
                            AC
                        </div>
                        <div>
                            <p className="text-base font-bold tracking-wide text-slate-50">
                                Aura Chains
                            </p>
                            <p className="text-sm text-slate-400">
                                Secure gold logistics & live tracking
                            </p>
                        </div>
                    </div>

                    {/* Nav */}
                    <nav className="order-3 mt-2 flex w-full items-center gap-4 text-sm font-medium text-slate-400 md:order-none md:mt-0 md:w-auto md:justify-center lg:text-base">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`relative rounded-full px-4 py-2 transition ${isActive(item.path)
                                        ? "text-slate-100"
                                        : "hover:bg-slate-800 hover:text-slate-100"
                                    }`}
                            >
                                {item.name}
                                {isActive(item.path) && (
                                    <span className="absolute inset-x-3 -bottom-[6px] h-[3px] rounded-full bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Search + Icons */}
                    <div className="ml-auto flex items-center gap-3">
                        <div className="relative hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search shipments, routes..."
                                className="h-10 w-56 rounded-full border border-slate-800 bg-slate-900/50 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-500 backdrop-blur-sm focus:border-emerald-400/70 focus:outline-none focus:ring-1 focus:ring-emerald-400/70 lg:w-72 transition-all"
                            />
                            <svg
                                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                                />
                            </svg>
                        </div>

                        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-emerald-400/70 hover:text-emerald-300">
                            <span className="relative inline-block">
                                <svg
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 17h5l-1.4-1.4A2.1 2.1 0 0 1 18 14.1V11a6 6 0 1 0-12 0v3.1c0 .6-.2 1.1-.6 1.5L4 17h5m3 0v1a3 3 0 1 1-6 0v-1m9 0v1a3 3 0 1 0 6 0v-1"
                                    />
                                </svg>
                                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-slate-950" />
                            </span>
                        </button>

                        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900 text-xs font-semibold text-slate-200 ring-1 ring-slate-700/80">
                            JM
                        </button>
                    </div>
                </header>

                {children}
            </div>
        </div>
    );
}
