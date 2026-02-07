import React from 'react';
import { ArrowRight } from 'lucide-react';
import StatsCards from './StatsCards';

const Hero = () => {
    return (
        <section className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-32 pb-20 px-6 bg-background-dark">
            {/* Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[600px] bg-primary-brand/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-secondary-brand/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] bg-secondary-brand/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-brand/10 border border-primary-brand/20 mb-8 animate-fade-in-up">
                    <div className="w-2 h-2 rounded-full bg-success-brand animate-pulse"></div>
                    <span className="text-sm font-medium text-white">Trusted by 500+ Brands</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-jakarta text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <span className="block">Elevate Your</span>
                    <span className="block gradient-text">Brand to New Heights</span>
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl text-muted-brand max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Strategic marketing solutions that drive growth, build authority, and transform your business through data-driven campaigns and creative excellence.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <a href="#contact" className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2 group">
                        <span>Start Your Journey</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-all backdrop-blur-sm text-center">
                        Explore Services
                    </a>
                </div>

                {/* Desktop Floating Cards */}
                <StatsCards />

                {/* Mobile Stats Grid */}
                <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:mt-12 max-w-2xl mx-auto">
                    {[
                        { label: 'ROI Growth', value: '340%' },
                        { label: 'Reach Generated', value: '2.5M+' },
                        { label: 'Client Satisfaction', value: '98%' },
                        { label: 'Industry Awards', value: '15+' },
                    ].map((stat, i) => (
                        <div key={i} className="glass-card rounded-xl p-6 text-center">
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-muted-brand">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
