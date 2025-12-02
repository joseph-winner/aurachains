"use client";

import React from "react";
import Link from "next/link";
import { FiPlus, FiBox, FiTruck, FiMapPin } from "react-icons/fi";

export default function ShipmentsPage() {
    return (
        <main className="space-y-6 lg:space-y-8">
            <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-5 shadow-2xl backdrop-blur-md lg:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-lg font-bold tracking-wide text-slate-100 lg:text-xl">
                            All Shipments
                        </h2>
                        <p className="mt-1.5 text-sm text-slate-400">
                            Manage and track all active and historical shipments.
                        </p>
                    </div>
                    <Link
                        href="/dashboard/shipments/new"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:from-cyan-300 hover:to-emerald-300"
                    >
                        <FiPlus className="h-4 w-4" />
                        Create New Shipment
                    </Link>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-slate-800/50 bg-slate-950/40 p-4">
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-cyan-400/10 p-3">
                                <FiBox className="h-5 w-5 text-cyan-400" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">Active Shipments</p>
                                <p className="text-2xl font-bold text-slate-100">12</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-slate-800/50 bg-slate-950/40 p-4">
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-emerald-400/10 p-3">
                                <FiTruck className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">In Transit</p>
                                <p className="text-2xl font-bold text-slate-100">8</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl border border-slate-800/50 bg-slate-950/40 p-4">
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-indigo-400/10 p-3">
                                <FiMapPin className="h-5 w-5 text-indigo-400" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">Delivered (30d)</p>
                                <p className="text-2xl font-bold text-slate-100">48</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 h-64 rounded-2xl border border-slate-800/50 bg-slate-950/40 p-4 flex items-center justify-center text-slate-500">
                    Shipments Table Coming Soon
                </div>
            </div>
        </main>
    );
}
