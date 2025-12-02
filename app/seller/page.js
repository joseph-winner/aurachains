"use client";
import React, { useState } from "react";
import {
    FiBell,
    FiSearch,
    FiDownload,
    FiPlus,
    FiAlertTriangle,
    FiTruck,
    FiClock,
    FiCheckCircle,
    FiX,
    FiPackage,
    FiMapPin,
    FiUser,
    FiCalendar,
    FiDollarSign,
} from "react-icons/fi";

const stats = [
    {
        label: "In Transit",
        value: 12,
        icon: <FiTruck className="text-2xl" />,
        bg: "bg-blue-600/90",
    },
    {
        label: "Pending Approval",
        value: 4,
        icon: <FiClock className="text-2xl" />,
        bg: "bg-amber-500/90",
    },
    {
        label: "Delivered",
        value: 28,
        icon: <FiCheckCircle className="text-2xl" />,
        bg: "bg-emerald-500/90",
    },
];

const shipments = [
    {
        id: "SHP-2024-001",
        destination: "Port of Rotterdam, NL",
        buyer: "Global Imports Ltd.",
        status: "Pending Approval",
        statusColor: "bg-amber-500/10 text-amber-300 border-amber-500/60",
        progress: 30,
    },
    {
        id: "SHP-2024-002",
        destination: "Shanghai, CN",
        buyer: "Orient Trading Co.",
        status: "In Transit",
        statusColor: "bg-blue-500/10 text-blue-300 border-blue-500/60",
        progress: 65,
    },
    {
        id: "SHP-2024-003",
        destination: "New York, USA",
        buyer: "Americas Logistics Inc.",
        status: "Delivered",
        statusColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/60",
        progress: 100,
    },
];

const documents = [
    "Commercial Invoice - SHP-001",
    "Packing List - SHP-002",
    "Bill of Lading - SHP-003",
    "Certificate of Origin - SHP-001",
];

const alerts = [
    {
        title: "Tamper Alert: SHP-002",
        desc: "Container Seal Broken",
        time: "2 mins ago",
    },
    {
        title: "Delay Alert: SHP-001",
        desc: "Customs Clearance Issue",
        time: "1 hour ago",
    },
    {
        title: "Route Deviation: SHP-002",
        desc: "Detected",
        time: "3 hours ago",
    },
];

function page() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        goldType: "",
        weight: "",
        purity: "",
        destination: "",
        buyerName: "",
        buyerEmail: "",
        deliveryDate: "",
        contractValue: "",
        specialInstructions: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Gold Shipment Contract Created:", formData);
        // Here you would typically send the data to your backend
        setIsModalOpen(false);
        // Reset form
        setFormData({
            goldType: "",
            weight: "",
            purity: "",
            destination: "",
            buyerName: "",
            buyerEmail: "",
            deliveryDate: "",
            contractValue: "",
            specialInstructions: "",
        });
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            {/* Top Bar */}
            <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                            <span className="text-lg font-bold">AC</span>
                        </div>
                        <div>
                            <p className="text-xs font-semibold tracking-[0.25em] text-slate-400">
                                AURA CHAIN
                            </p>
                            <h1 className="text-xl font-semibold tracking-wide">
                                SELLER DASHBOARD
                            </h1>
                        </div>
                    </div>

                    {/* Search + Actions */}
                    <div className="flex items-center gap-4">
                        <div className="hidden items-center rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-300 md:flex">
                            <FiSearch className="mr-2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search shipments"
                                className="w-52 bg-transparent text-sm outline-none placeholder:text-slate-500"
                            />
                        </div>
                        <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80">
                            <FiBell className="text-lg" />
                            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
                        </button>
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <p className="text-xs font-semibold">John Smith</p>
                                <p className="text-[11px] text-slate-400">Seller</p>
                            </div>
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 text-sm font-semibold">
                                JS
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Layout */}
            <main className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 lg:flex-row">
                {/* Left column */}
                <div className="flex-1 space-y-6">
                    {/* Shipment overview */}
                    <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
                        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <h2 className="text-sm font-semibold tracking-wide text-slate-300">
                                SHIPMENT STATUS OVERVIEW
                            </h2>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-500"
                            >
                                <FiPlus />
                                Create New Shipment Contract
                            </button>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className={`${stat.bg} rounded-2xl px-5 py-4 shadow-inner`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold">{stat.value}</span>
                                        {stat.icon}
                                    </div>
                                    <p className="mt-3 text-sm font-medium text-slate-100/90">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Active shipments & documents */}
                    <section className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                        {/* Active Shipments */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
                            <h2 className="mb-4 text-sm font-semibold tracking-wide text-slate-300">
                                ACTIVE SHIPMENTS LIST
                            </h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-left text-xs text-slate-300">
                                    <thead className="border-b border-slate-800 text-[11px] uppercase tracking-wide text-slate-500">
                                        <tr>
                                            <th className="py-2 pr-4">Shipment ID</th>
                                            <th className="py-2 pr-4">Destination</th>
                                            <th className="py-2 pr-4">Buyer</th>
                                            <th className="py-2 pr-4">Status</th>
                                            <th className="py-2 pr-4">Progress</th>
                                            <th className="py-2 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-800 text-[13px]">
                                        {shipments.map((s) => (
                                            <tr key={s.id} className="hover:bg-slate-900/80">
                                                <td className="py-3 pr-4 font-medium text-slate-100">
                                                    {s.id}
                                                </td>
                                                <td className="py-3 pr-4">{s.destination}</td>
                                                <td className="py-3 pr-4">{s.buyer}</td>
                                                <td className="py-3 pr-4">
                                                    <span
                                                        className={`inline-flex rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${s.statusColor}`}
                                                    >
                                                        {s.status}
                                                    </span>
                                                </td>
                                                <td className="py-3 pr-4">
                                                    <div className="flex items-center gap-2">
                                                        <div className="h-1.5 flex-1 rounded-full bg-slate-800">
                                                            <div
                                                                className="h-1.5 rounded-full bg-sky-500"
                                                                style={{ width: `${s.progress}%` }}
                                                            />
                                                        </div>
                                                        <span className="text-[11px] text-slate-400">
                                                            {s.progress}%
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="py-3 text-right">
                                                    <button className="rounded-full border border-slate-700 px-3 py-1 text-[11px] font-semibold text-slate-100 hover:border-sky-500 hover:text-sky-300">
                                                        View Details
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Export logs */}
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
                            <h2 className="mb-4 text-sm font-semibold tracking-wide text-slate-300">
                                EXPORT LOGS &amp; DOCUMENTS
                            </h2>
                            <ul className="space-y-3 text-sm">
                                {documents.map((doc) => (
                                    <li
                                        key={doc}
                                        className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2 hover:border-sky-500/70 hover:bg-slate-900"
                                    >
                                        <span className="text-slate-200">{doc}</span>
                                        <button className="rounded-full border border-slate-700 p-1.5 hover:border-sky-500 hover:text-sky-400">
                                            <FiDownload className="text-sm" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Alerts panel */}
                <aside className="w-full max-w-sm rounded-2xl border border-red-700/60 bg-slate-900/80 shadow-xl lg:h-[calc(100vh-7.5rem)] lg:min-w-[320px]">
                    <div className="border-b border-red-700/60 bg-red-600 px-5 py-3 rounded-t-2xl">
                        <h2 className="text-sm font-semibold tracking-wide text-white">
                            ALERTS PANEL
                        </h2>
                    </div>
                    <div className="space-y-3 px-5 py-4">
                        {alerts.map((alert) => (
                            <div
                                key={alert.title}
                                className="rounded-xl border border-red-700/40 bg-red-950/40 px-3 py-3"
                            >
                                <div className="mb-1 flex items-start gap-2">
                                    <FiAlertTriangle className="mt-0.5 flex-shrink-0 text-red-400" />
                                    <div>
                                        <p className="text-xs font-semibold text-red-100">
                                            {alert.title}
                                        </p>
                                        <p className="text-xs text-slate-200">{alert.desc}</p>
                                    </div>
                                </div>
                                <p className="pl-6 text-[11px] text-slate-400">
                                    {alert.time}
                                </p>
                            </div>
                        ))}
                    </div>
                </aside>
            </main>

            {/* Modal for Create Shipment Contract */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
                    <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
                        {/* Modal Header */}
                        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-700 bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                                    <FiPackage className="text-xl text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">
                                        Create New Gold Shipment Contract
                                    </h3>
                                    <p className="text-xs text-sky-100">
                                        Fill in the details below to create a new gold shipment
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                            >
                                <FiX className="text-xl" />
                            </button>
                        </div>

                        {/* Modal Body - Form */}
                        <form onSubmit={handleSubmit} className="p-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                {/* Gold Type */}
                                <div className="md:col-span-2">
                                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                                        <FiPackage className="text-amber-400" />
                                        Gold Type
                                    </label>
                                    <select
                                        name="goldType"
                                        value={formData.goldType}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm text-slate-100 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                                    >
                                        <option value="">Select gold type...</option>
                                        <option value="bars">Gold Bars</option>
                                        <option value="coins">Gold Coins</option>
                                        <option value="bullion">Gold Bullion</option>
                                        <option value="jewelry">Gold Jewelry</option>
                                        <option value="nuggets">Gold Nuggets</option>
                                    </select>
                                </div>

                                {/* Weight */}
                                <div>
                                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                                        <FiPackage className="text-amber-400" />
                                        Weight (Troy Ounces)
                                    </label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        name="weight"
                                        value={formData.weight}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="e.g., 100.50"
                                        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                                    />
                                </div>

                                {/* Purity */}
                                <div>
                                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                                        <FiPackage className="text-amber-400" />
                                        Purity
                                    </label>
                                    <select
                                        name="purity"
                                        value={formData.purity}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm text-slate-100 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                                    >
                                        <option value="">Select purity...</option>
                                        <option value="24k">24 Karat (99.9% pure)</option>
                                        <option value="22k">22 Karat (91.6% pure)</option>
                                        <option value="18k">18 Karat (75% pure)</option>
                                        <option value="14k">14 Karat (58.3% pure)</option>
                                        <option value="999.9">999.9 Fine Gold</option>
                                        <option value="995">995 Fine Gold</option>
                                    </select>
                                </div>

                                {/* Destination */}
                                <div>
                                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                                        <FiMapPin className="text-amber-400" />
                                        Destination
                                    </label>
                                    <input
                                        type="text"
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="e.g., Port of Rotterdam, NL"
                                        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                                    />
                                </div>

                                {/* Buyer Name */}
                                <div>
                                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                                        <FiUser className="text-amber-400" />
                                        Buyer Name
                                    </label>
                                    <input
                                        type="text"
                                        name="buyerName"
                                        value={formData.buyerName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="e.g., Global Imports Ltd."
                                        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                                    />
                                </div>

                                {/* Buyer Email */}
                                <div>
                                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                                        <FiUser className="text-amber-400" />
                                        Buyer Email
                                    </label>
                                    <input
                                        type="email"
                                        name="buyerEmail"
                                        value={formData.buyerEmail}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="e.g., contact@globalimports.com"
                                        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                                    />
                                </div>

                                {/* Delivery Date */}
                                <div>
                                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                                        <FiCalendar className="text-amber-400" />
                                        Expected Delivery Date
                                    </label>
                                    <input
                                        type="date"
                                        name="deliveryDate"
                                        value={formData.deliveryDate}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm text-slate-100 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                                    />
                                </div>

                                {/* Contract Value */}
                                <div>
                                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                                        <FiDollarSign className="text-amber-400" />
                                        Contract Value (USD)
                                    </label>
                                    <input
                                        type="number"
                                        name="contractValue"
                                        value={formData.contractValue}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="e.g., 50000"
                                        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                                    />
                                </div>

                                {/* Special Instructions */}
                                <div className="md:col-span-2">
                                    <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-300">
                                        Special Instructions (Optional)
                                    </label>
                                    <textarea
                                        name="specialInstructions"
                                        value={formData.specialInstructions}
                                        onChange={handleInputChange}
                                        rows="4"
                                        placeholder="Add any special handling instructions, security requirements, or other notes..."
                                        className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none transition-all focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                                    />
                                </div>
                            </div>

                            {/* Form Actions */}
                            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-300 transition-colors hover:bg-slate-700"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:from-amber-500 hover:to-yellow-500 hover:shadow-xl"
                                >
                                    Create Gold Shipment Contract
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default page;
