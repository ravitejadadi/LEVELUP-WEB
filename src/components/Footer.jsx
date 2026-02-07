import React from 'react';
import { BarChart3 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-background-dark py-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-8 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-brand to-secondary-brand flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                                <BarChart3 className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold font-jakarta text-white">
                                LevelUp
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                            <a href="#services" className="text-sm font-medium text-muted-brand hover:text-white transition-colors">Services</a>
                            <a href="#process" className="text-sm font-medium text-muted-brand hover:text-white transition-colors">Process</a>
                            <a href="#contact" className="text-sm font-medium text-muted-brand hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2">
                        <p className="text-sm text-muted-brand font-medium">
                            © 2024 LevelUp Marketing. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-xs text-muted-brand hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="text-xs text-muted-brand hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
