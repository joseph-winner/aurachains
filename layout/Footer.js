import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#050B10] text-slate-300 border-t border-slate-800">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Top section */}
                <div className="flex flex-col gap-12 py-10 md:flex-row md:justify-between">
                    {/* Brand */}
                    <div className="max-w-sm space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/40 bg-blue-500/10">
                                <span className="h-3.5 w-3.5 rotate-45 border-2 border-blue-400" />
                            </span>
                            <span className="text-lg font-semibold tracking-tight text-white">
                                AuraChain
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            The future of supply chain management,
                            powered by blockchain and IoT.
                        </p>
                    </div>

                    {/* Link columns */}
                    <div className="grid flex-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                        <div>
                            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Platform
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        For Exporters
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        For Buyers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        For Logistics
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Resources
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Case Studies
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        API Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Support
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Company
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                Legal
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-slate-800 py-6">
                    <p className="text-center text-xs text-slate-500">
                        &copy; {year} AuraChain. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
