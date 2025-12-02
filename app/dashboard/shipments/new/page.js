"use client";

import React, { useState } from "react";
import {
    FiBox,
    FiUser,
    FiTruck,
    FiMapPin,
    FiCalendar,
    FiDollarSign,
    FiFileText,
    FiPackage,
    FiThermometer,
    FiAlertCircle,
    FiCheckCircle,
    FiArrowRight,
    FiCpu,
    FiLock,
    FiGlobe,
} from "react-icons/fi";

export default function NewShipmentContractPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Basic Information
        shipmentTitle: "",
        contractType: "export",
        incoterms: "FOB",

        // Parties
        exporterName: "",
        exporterAddress: "",
        exporterContact: "",
        buyerName: "",
        buyerAddress: "",
        buyerContact: "",
        logisticsProvider: "",
        logisticsContact: "",

        // Shipment Details
        origin: "",
        destination: "",
        departureDate: "",
        estimatedArrival: "",
        cargoType: "",
        cargoDescription: "",
        quantity: "",
        weight: "",
        value: "",
        currency: "USD",

        // IoT & Monitoring
        gpsTracking: true,
        temperatureMonitoring: false,
        humidityMonitoring: false,
        doorSensor: true,
        nfcTags: true,
        tempMin: "",
        tempMax: "",
        humidityMax: "",

        // Payment Terms
        paymentMethod: "escrow",
        paymentPercentageUpfront: "30",
        paymentPercentageOnDelivery: "70",
        paymentDueDays: "30",

        // Additional Terms
        insuranceRequired: true,
        insuranceValue: "",
        specialInstructions: "",
        customsDocuments: [],
    });

    const totalSteps = 5;

    const updateFormData = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting contract:", formData);
        // Here you would typically send the data to your blockchain/backend
        alert("Smart contract created successfully! (Demo)");
    };

    return (
        <main className="space-y-6 lg:space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-wide text-slate-100 lg:text-3xl">
                        Create New Shipment Contract
                    </h1>
                    <p className="mt-1.5 text-sm text-slate-400">
                        Set up a blockchain-backed smart contract for your shipment
                    </p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-slate-900/60 px-4 py-2 text-xs text-slate-300">
                    <FiLock className="h-4 w-4 text-emerald-400" />
                    <span>Blockchain secured</span>
                </div>
            </div>

            {/* Progress Indicator */}
            <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-5 shadow-2xl backdrop-blur-md lg:p-6">
                <div className="mb-6 flex items-center justify-between">
                    {[1, 2, 3, 4, 5].map((step) => (
                        <React.Fragment key={step}>
                            <div className="flex flex-col items-center gap-2">
                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all ${step === currentStep
                                            ? "border-cyan-400 bg-cyan-400 text-slate-950"
                                            : step < currentStep
                                                ? "border-emerald-400 bg-emerald-400 text-slate-950"
                                                : "border-slate-700 bg-slate-800/50 text-slate-400"
                                        }`}
                                >
                                    {step < currentStep ? (
                                        <FiCheckCircle className="h-5 w-5" />
                                    ) : (
                                        step
                                    )}
                                </div>
                                <span className="hidden text-xs text-slate-400 sm:block">
                                    {step === 1 && "Basic Info"}
                                    {step === 2 && "Parties"}
                                    {step === 3 && "Shipment"}
                                    {step === 4 && "IoT & Monitoring"}
                                    {step === 5 && "Payment & Review"}
                                </span>
                            </div>
                            {step < totalSteps && (
                                <div
                                    className={`h-0.5 flex-1 transition-all ${step < currentStep
                                            ? "bg-emerald-400"
                                            : "bg-slate-700"
                                        }`}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Form Container */}
            <form onSubmit={handleSubmit}>
                <div className="rounded-3xl border border-slate-800/60 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-md lg:p-8">
                    {/* Step 1: Basic Information */}
                    {currentStep === 1 && (
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                                <div className="rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-500 p-3">
                                    <FiFileText className="h-6 w-6 text-slate-950" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-100">
                                        Basic Information
                                    </h2>
                                    <p className="text-sm text-slate-400">
                                        Start with the contract fundamentals
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <FormField
                                    label="Shipment Title"
                                    required
                                    icon={<FiBox className="h-4 w-4" />}
                                >
                                    <input
                                        type="text"
                                        value={formData.shipmentTitle}
                                        onChange={(e) =>
                                            updateFormData("shipmentTitle", e.target.value)
                                        }
                                        placeholder="e.g., Coffee Beans Export Q4 2025"
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                        required
                                    />
                                </FormField>

                                <FormField
                                    label="Contract Type"
                                    required
                                    icon={<FiGlobe className="h-4 w-4" />}
                                >
                                    <select
                                        value={formData.contractType}
                                        onChange={(e) =>
                                            updateFormData("contractType", e.target.value)
                                        }
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                    >
                                        <option value="export">Export</option>
                                        <option value="import">Import</option>
                                        <option value="domestic">Domestic</option>
                                        <option value="transit">Transit</option>
                                    </select>
                                </FormField>

                                <FormField
                                    label="Incoterms"
                                    required
                                    icon={<FiFileText className="h-4 w-4" />}
                                    tooltip="International Commercial Terms defining responsibilities"
                                >
                                    <select
                                        value={formData.incoterms}
                                        onChange={(e) =>
                                            updateFormData("incoterms", e.target.value)
                                        }
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                    >
                                        <option value="EXW">EXW - Ex Works</option>
                                        <option value="FOB">FOB - Free On Board</option>
                                        <option value="CIF">CIF - Cost, Insurance & Freight</option>
                                        <option value="DDP">DDP - Delivered Duty Paid</option>
                                        <option value="FCA">FCA - Free Carrier</option>
                                        <option value="CPT">CPT - Carriage Paid To</option>
                                        <option value="DAP">DAP - Delivered At Place</option>
                                    </select>
                                </FormField>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Parties */}
                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                                <div className="rounded-xl bg-gradient-to-tr from-emerald-400 to-lime-400 p-3">
                                    <FiUser className="h-6 w-6 text-slate-950" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-100">
                                        Contract Parties
                                    </h2>
                                    <p className="text-sm text-slate-400">
                                        Define all stakeholders in this shipment
                                    </p>
                                </div>
                            </div>

                            {/* Exporter */}
                            <div className="space-y-4 rounded-2xl border border-slate-800/50 bg-slate-950/40 p-5">
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-100">
                                    <FiBox className="h-5 w-5 text-cyan-400" />
                                    Exporter Information
                                </h3>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <FormField label="Company Name" required>
                                        <input
                                            type="text"
                                            value={formData.exporterName}
                                            onChange={(e) =>
                                                updateFormData("exporterName", e.target.value)
                                            }
                                            placeholder="Exporter company name"
                                            className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            required
                                        />
                                    </FormField>
                                    <FormField label="Contact Email" required>
                                        <input
                                            type="email"
                                            value={formData.exporterContact}
                                            onChange={(e) =>
                                                updateFormData("exporterContact", e.target.value)
                                            }
                                            placeholder="contact@exporter.com"
                                            className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            required
                                        />
                                    </FormField>
                                    <FormField label="Address" required className="md:col-span-2">
                                        <input
                                            type="text"
                                            value={formData.exporterAddress}
                                            onChange={(e) =>
                                                updateFormData("exporterAddress", e.target.value)
                                            }
                                            placeholder="Full business address"
                                            className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            required
                                        />
                                    </FormField>
                                </div>
                            </div>

                            {/* Buyer */}
                            <div className="space-y-4 rounded-2xl border border-slate-800/50 bg-slate-950/40 p-5">
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-100">
                                    <FiUser className="h-5 w-5 text-emerald-400" />
                                    Buyer Information
                                </h3>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <FormField label="Company Name" required>
                                        <input
                                            type="text"
                                            value={formData.buyerName}
                                            onChange={(e) =>
                                                updateFormData("buyerName", e.target.value)
                                            }
                                            placeholder="Buyer company name"
                                            className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            required
                                        />
                                    </FormField>
                                    <FormField label="Contact Email" required>
                                        <input
                                            type="email"
                                            value={formData.buyerContact}
                                            onChange={(e) =>
                                                updateFormData("buyerContact", e.target.value)
                                            }
                                            placeholder="contact@buyer.com"
                                            className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            required
                                        />
                                    </FormField>
                                    <FormField label="Address" required className="md:col-span-2">
                                        <input
                                            type="text"
                                            value={formData.buyerAddress}
                                            onChange={(e) =>
                                                updateFormData("buyerAddress", e.target.value)
                                            }
                                            placeholder="Full business address"
                                            className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            required
                                        />
                                    </FormField>
                                </div>
                            </div>

                            {/* Logistics Provider */}
                            <div className="space-y-4 rounded-2xl border border-slate-800/50 bg-slate-950/40 p-5">
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-100">
                                    <FiTruck className="h-5 w-5 text-indigo-400" />
                                    Logistics Provider
                                </h3>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <FormField label="Provider Name" required>
                                        <input
                                            type="text"
                                            value={formData.logisticsProvider}
                                            onChange={(e) =>
                                                updateFormData("logisticsProvider", e.target.value)
                                            }
                                            placeholder="Logistics company name"
                                            className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            required
                                        />
                                    </FormField>
                                    <FormField label="Contact Email" required>
                                        <input
                                            type="email"
                                            value={formData.logisticsContact}
                                            onChange={(e) =>
                                                updateFormData("logisticsContact", e.target.value)
                                            }
                                            placeholder="contact@logistics.com"
                                            className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            required
                                        />
                                    </FormField>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Shipment Details */}
                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                                <div className="rounded-xl bg-gradient-to-tr from-indigo-400 to-fuchsia-500 p-3">
                                    <FiPackage className="h-6 w-6 text-slate-950" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-100">
                                        Shipment Details
                                    </h2>
                                    <p className="text-sm text-slate-400">
                                        Cargo information and route details
                                    </p>
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <FormField
                                    label="Origin"
                                    required
                                    icon={<FiMapPin className="h-4 w-4" />}
                                >
                                    <input
                                        type="text"
                                        value={formData.origin}
                                        onChange={(e) =>
                                            updateFormData("origin", e.target.value)
                                        }
                                        placeholder="e.g., Mombasa Port, Kenya"
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                        required
                                    />
                                </FormField>

                                <FormField
                                    label="Destination"
                                    required
                                    icon={<FiMapPin className="h-4 w-4" />}
                                >
                                    <input
                                        type="text"
                                        value={formData.destination}
                                        onChange={(e) =>
                                            updateFormData("destination", e.target.value)
                                        }
                                        placeholder="e.g., Hamburg Port, Germany"
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                        required
                                    />
                                </FormField>

                                <FormField
                                    label="Departure Date"
                                    required
                                    icon={<FiCalendar className="h-4 w-4" />}
                                >
                                    <input
                                        type="date"
                                        value={formData.departureDate}
                                        onChange={(e) =>
                                            updateFormData("departureDate", e.target.value)
                                        }
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                        required
                                    />
                                </FormField>

                                <FormField
                                    label="Estimated Arrival"
                                    required
                                    icon={<FiCalendar className="h-4 w-4" />}
                                >
                                    <input
                                        type="date"
                                        value={formData.estimatedArrival}
                                        onChange={(e) =>
                                            updateFormData("estimatedArrival", e.target.value)
                                        }
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                        required
                                    />
                                </FormField>

                                <FormField label="Cargo Type" required>
                                    <select
                                        value={formData.cargoType}
                                        onChange={(e) =>
                                            updateFormData("cargoType", e.target.value)
                                        }
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                        required
                                    >
                                        <option value="">Select cargo type</option>
                                        <option value="general">General Cargo</option>
                                        <option value="perishable">Perishable Goods</option>
                                        <option value="hazardous">Hazardous Materials</option>
                                        <option value="refrigerated">Refrigerated</option>
                                        <option value="bulk">Bulk Cargo</option>
                                        <option value="container">Container</option>
                                    </select>
                                </FormField>

                                <FormField label="Quantity" required>
                                    <input
                                        type="text"
                                        value={formData.quantity}
                                        onChange={(e) =>
                                            updateFormData("quantity", e.target.value)
                                        }
                                        placeholder="e.g., 500 bags, 20 pallets"
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                        required
                                    />
                                </FormField>

                                <FormField label="Weight (kg)" required>
                                    <input
                                        type="number"
                                        value={formData.weight}
                                        onChange={(e) =>
                                            updateFormData("weight", e.target.value)
                                        }
                                        placeholder="Total weight in kg"
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                        required
                                    />
                                </FormField>

                                <FormField
                                    label="Cargo Value"
                                    required
                                    icon={<FiDollarSign className="h-4 w-4" />}
                                >
                                    <div className="flex gap-2">
                                        <select
                                            value={formData.currency}
                                            onChange={(e) =>
                                                updateFormData("currency", e.target.value)
                                            }
                                            className="w-24 rounded-xl border border-slate-700 bg-slate-950/40 px-3 py-3 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                        >
                                            <option value="USD">USD</option>
                                            <option value="EUR">EUR</option>
                                            <option value="GBP">GBP</option>
                                            <option value="UGX">UGX</option>
                                        </select>
                                        <input
                                            type="number"
                                            value={formData.value}
                                            onChange={(e) =>
                                                updateFormData("value", e.target.value)
                                            }
                                            placeholder="Total value"
                                            className="flex-1 rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            required
                                        />
                                    </div>
                                </FormField>

                                <FormField
                                    label="Cargo Description"
                                    className="md:col-span-2"
                                >
                                    <textarea
                                        value={formData.cargoDescription}
                                        onChange={(e) =>
                                            updateFormData("cargoDescription", e.target.value)
                                        }
                                        placeholder="Detailed description of the cargo..."
                                        rows={4}
                                        className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                    />
                                </FormField>
                            </div>
                        </div>
                    )}

                    {/* Step 4: IoT & Monitoring */}
                    {currentStep === 4 && (
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                                <div className="rounded-xl bg-gradient-to-tr from-cyan-400 to-sky-500 p-3">
                                    <FiCpu className="h-6 w-6 text-slate-950" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-100">
                                        IoT & Monitoring Setup
                                    </h2>
                                    <p className="text-sm text-slate-400">
                                        Configure sensors and tracking requirements
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="rounded-2xl border border-slate-800/50 bg-slate-950/40 p-5">
                                    <h3 className="mb-4 text-lg font-semibold text-slate-100">
                                        Tracking & Sensors
                                    </h3>
                                    <div className="space-y-3">
                                        <ToggleField
                                            label="GPS Tracking"
                                            description="Real-time location monitoring"
                                            icon={<FiMapPin className="h-5 w-5" />}
                                            checked={formData.gpsTracking}
                                            onChange={(checked) =>
                                                updateFormData("gpsTracking", checked)
                                            }
                                        />
                                        <ToggleField
                                            label="Temperature Monitoring"
                                            description="Track temperature throughout journey"
                                            icon={<FiThermometer className="h-5 w-5" />}
                                            checked={formData.temperatureMonitoring}
                                            onChange={(checked) =>
                                                updateFormData("temperatureMonitoring", checked)
                                            }
                                        />
                                        <ToggleField
                                            label="Humidity Monitoring"
                                            description="Monitor humidity levels"
                                            icon={<FiCpu className="h-5 w-5" />}
                                            checked={formData.humidityMonitoring}
                                            onChange={(checked) =>
                                                updateFormData("humidityMonitoring", checked)
                                            }
                                        />
                                        <ToggleField
                                            label="Door/Tamper Sensor"
                                            description="Alert on unauthorized access"
                                            icon={<FiAlertCircle className="h-5 w-5" />}
                                            checked={formData.doorSensor}
                                            onChange={(checked) =>
                                                updateFormData("doorSensor", checked)
                                            }
                                        />
                                        <ToggleField
                                            label="NFC Tags"
                                            description="Enable NFC verification at checkpoints"
                                            icon={<FiBox className="h-5 w-5" />}
                                            checked={formData.nfcTags}
                                            onChange={(checked) =>
                                                updateFormData("nfcTags", checked)
                                            }
                                        />
                                    </div>
                                </div>

                                {formData.temperatureMonitoring && (
                                    <div className="rounded-2xl border border-slate-800/50 bg-slate-950/40 p-5">
                                        <h3 className="mb-4 text-lg font-semibold text-slate-100">
                                            Temperature Thresholds
                                        </h3>
                                        <div className="grid gap-4 md:grid-cols-2">
                                            <FormField label="Minimum Temperature (°C)">
                                                <input
                                                    type="number"
                                                    value={formData.tempMin}
                                                    onChange={(e) =>
                                                        updateFormData("tempMin", e.target.value)
                                                    }
                                                    placeholder="e.g., 2"
                                                    className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                                />
                                            </FormField>
                                            <FormField label="Maximum Temperature (°C)">
                                                <input
                                                    type="number"
                                                    value={formData.tempMax}
                                                    onChange={(e) =>
                                                        updateFormData("tempMax", e.target.value)
                                                    }
                                                    placeholder="e.g., 8"
                                                    className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                                />
                                            </FormField>
                                        </div>
                                    </div>
                                )}

                                {formData.humidityMonitoring && (
                                    <div className="rounded-2xl border border-slate-800/50 bg-slate-950/40 p-5">
                                        <h3 className="mb-4 text-lg font-semibold text-slate-100">
                                            Humidity Thresholds
                                        </h3>
                                        <FormField label="Maximum Humidity (%)">
                                            <input
                                                type="number"
                                                value={formData.humidityMax}
                                                onChange={(e) =>
                                                    updateFormData("humidityMax", e.target.value)
                                                }
                                                placeholder="e.g., 70"
                                                className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            />
                                        </FormField>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Step 5: Payment & Review */}
                    {currentStep === 5 && (
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                                <div className="rounded-xl bg-gradient-to-tr from-emerald-400 to-lime-400 p-3">
                                    <FiDollarSign className="h-6 w-6 text-slate-950" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-slate-100">
                                        Payment Terms & Review
                                    </h2>
                                    <p className="text-sm text-slate-400">
                                        Define payment structure and review contract
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="rounded-2xl border border-slate-800/50 bg-slate-950/40 p-5">
                                    <h3 className="mb-4 text-lg font-semibold text-slate-100">
                                        Payment Structure
                                    </h3>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <FormField label="Payment Method" required>
                                            <select
                                                value={formData.paymentMethod}
                                                onChange={(e) =>
                                                    updateFormData("paymentMethod", e.target.value)
                                                }
                                                className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            >
                                                <option value="escrow">Smart Contract Escrow</option>
                                                <option value="letter_of_credit">Letter of Credit</option>
                                                <option value="wire_transfer">Wire Transfer</option>
                                                <option value="cryptocurrency">Cryptocurrency</option>
                                            </select>
                                        </FormField>

                                        <FormField label="Payment Due (Days after delivery)">
                                            <input
                                                type="number"
                                                value={formData.paymentDueDays}
                                                onChange={(e) =>
                                                    updateFormData("paymentDueDays", e.target.value)
                                                }
                                                placeholder="30"
                                                className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            />
                                        </FormField>

                                        <FormField label="Upfront Payment (%)">
                                            <input
                                                type="number"
                                                value={formData.paymentPercentageUpfront}
                                                onChange={(e) =>
                                                    updateFormData(
                                                        "paymentPercentageUpfront",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="30"
                                                min="0"
                                                max="100"
                                                className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            />
                                        </FormField>

                                        <FormField label="On Delivery Payment (%)">
                                            <input
                                                type="number"
                                                value={formData.paymentPercentageOnDelivery}
                                                onChange={(e) =>
                                                    updateFormData(
                                                        "paymentPercentageOnDelivery",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="70"
                                                min="0"
                                                max="100"
                                                className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            />
                                        </FormField>
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-slate-800/50 bg-slate-950/40 p-5">
                                    <h3 className="mb-4 text-lg font-semibold text-slate-100">
                                        Insurance & Additional Terms
                                    </h3>
                                    <div className="space-y-4">
                                        <ToggleField
                                            label="Insurance Required"
                                            description="Require cargo insurance for this shipment"
                                            icon={<FiCheckCircle className="h-5 w-5" />}
                                            checked={formData.insuranceRequired}
                                            onChange={(checked) =>
                                                updateFormData("insuranceRequired", checked)
                                            }
                                        />
                                        {formData.insuranceRequired && (
                                            <FormField label="Insurance Coverage Value">
                                                <input
                                                    type="number"
                                                    value={formData.insuranceValue}
                                                    onChange={(e) =>
                                                        updateFormData(
                                                            "insuranceValue",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Insurance amount"
                                                    className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                                />
                                            </FormField>
                                        )}
                                        <FormField label="Special Instructions">
                                            <textarea
                                                value={formData.specialInstructions}
                                                onChange={(e) =>
                                                    updateFormData(
                                                        "specialInstructions",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Any special handling instructions or additional terms..."
                                                rows={4}
                                                className="w-full rounded-xl border border-slate-700 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            />
                                        </FormField>
                                    </div>
                                </div>

                                {/* Contract Summary */}
                                <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/5 to-emerald-400/5 p-5">
                                    <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-100">
                                        <FiCheckCircle className="h-5 w-5 text-cyan-400" />
                                        Contract Summary
                                    </h3>
                                    <div className="grid gap-3 text-sm md:grid-cols-2">
                                        <SummaryItem
                                            label="Shipment"
                                            value={formData.shipmentTitle || "—"}
                                        />
                                        <SummaryItem
                                            label="Route"
                                            value={
                                                formData.origin && formData.destination
                                                    ? `${formData.origin} → ${formData.destination}`
                                                    : "—"
                                            }
                                        />
                                        <SummaryItem
                                            label="Exporter"
                                            value={formData.exporterName || "—"}
                                        />
                                        <SummaryItem
                                            label="Buyer"
                                            value={formData.buyerName || "—"}
                                        />
                                        <SummaryItem
                                            label="Cargo Value"
                                            value={
                                                formData.value
                                                    ? `${formData.currency} ${formData.value}`
                                                    : "—"
                                            }
                                        />
                                        <SummaryItem
                                            label="Payment Method"
                                            value={formData.paymentMethod || "—"}
                                        />
                                        <SummaryItem
                                            label="IoT Sensors"
                                            value={[
                                                formData.gpsTracking && "GPS",
                                                formData.temperatureMonitoring && "Temperature",
                                                formData.humidityMonitoring && "Humidity",
                                                formData.doorSensor && "Tamper",
                                                formData.nfcTags && "NFC",
                                            ]
                                                .filter(Boolean)
                                                .join(", ") || "None"}
                                        />
                                        <SummaryItem
                                            label="Incoterms"
                                            value={formData.incoterms || "—"}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6">
                        <button
                            type="button"
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Previous
                        </button>

                        <div className="text-sm text-slate-400">
                            Step {currentStep} of {totalSteps}
                        </div>

                        {currentStep < totalSteps ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:from-cyan-300 hover:to-emerald-300"
                            >
                                Next Step
                                <FiArrowRight className="h-4 w-4" />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-lime-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:from-emerald-300 hover:to-lime-300"
                            >
                                <FiCheckCircle className="h-4 w-4" />
                                Create Smart Contract
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </main>
    );
}

// Helper Components
function FormField({ label, required, icon, tooltip, children, className = "" }) {
    return (
        <div className={className}>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
                {icon && <span className="text-cyan-400">{icon}</span>}
                {label}
                {required && <span className="text-red-400">*</span>}
                {tooltip && (
                    <span
                        className="text-xs text-slate-500"
                        title={tooltip}
                    >
                        ⓘ
                    </span>
                )}
            </label>
            {children}
        </div>
    );
}

function ToggleField({ label, description, icon, checked, onChange }) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <div className="flex items-center gap-3">
                <span className="text-cyan-400">{icon}</span>
                <div>
                    <p className="text-sm font-medium text-slate-100">{label}</p>
                    <p className="text-xs text-slate-400">{description}</p>
                </div>
            </div>
            <button
                type="button"
                onClick={() => onChange(!checked)}
                className={`relative h-6 w-11 rounded-full transition-colors ${checked ? "bg-cyan-400" : "bg-slate-700"
                    }`}
            >
                <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform ${checked ? "translate-x-5" : "translate-x-0.5"
                        }`}
                />
            </button>
        </div>
    );
}

function SummaryItem({ label, value }) {
    return (
        <div className="rounded-xl bg-slate-900/40 p-3">
            <p className="text-xs text-slate-400">{label}</p>
            <p className="mt-1 font-medium text-slate-100">{value}</p>
        </div>
    );
}
