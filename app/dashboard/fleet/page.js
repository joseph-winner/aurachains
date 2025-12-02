import React from "react";

export default function FleetPage() {
    return (
        <main className="space-y-6 lg:space-y-8">
            <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-5 shadow-2xl backdrop-blur-md lg:p-8">
                <h2 className="text-lg font-bold tracking-wide text-slate-100 lg:text-xl">
                    Fleet Management
                </h2>
                <p className="mt-1.5 text-sm text-slate-400">
                    Monitor vehicle status, maintenance logs, and driver assignments.
                </p>
                <div className="mt-6 h-64 rounded-2xl border border-slate-800/50 bg-slate-950/40 p-4 flex items-center justify-center text-slate-500">
                    Fleet Map & Status Coming Soon
                </div>
            </div>
        </main>
    );
}
