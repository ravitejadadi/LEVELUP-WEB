import React from 'react';
import { Settings, Sparkles, Rocket, TrendingUp } from 'lucide-react';

const steps = [
    {
        icon: <Settings size={24} className="text-primary-brand" />,
        title: "Discovery & Strategy",
        desc: "We start by understanding your business goals, target audience, and competitive landscape to craft a tailored marketing strategy.",
        side: "right"
    },
    {
        icon: <Sparkles size={24} className="text-secondary-brand" />,
        title: "Creative Development",
        desc: "Our creative team develops compelling campaigns, content, and visuals that align with your brand identity and resonate with your audience.",
        side: "left"
    },
    {
        icon: <Rocket size={24} className="text-success-brand" />,
        title: "Launch & Execution",
        desc: "We execute campaigns across chosen channels, managing every detail to ensure flawless delivery and maximum impact from day one.",
        side: "right"
    },
    {
        icon: <TrendingUp size={24} className="text-primary-brand" />,
        title: "Optimize & Scale",
        desc: "Continuous monitoring, A/B testing, and data analysis allow us to refine strategies and scale what works for exponential growth.",
        side: "left"
    }
];

const Process = () => {
    return (
        <section id="process" className="py-20 md:py-32 px-6 relative bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-brand/10 border border-secondary-brand/20 mb-6">
                        <Settings className="text-secondary-brand w-4 h-4" />
                        <span className="text-sm font-medium text-white">Our Process</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta text-white mb-6">
                        Your Journey to
                        <span className="block gradient-text">Marketing Success</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-brand max-w-2xl mx-auto leading-relaxed">
                        A proven 4-step methodology that transforms your marketing from ordinary to extraordinary.
                    </p>
                </div>

                <div className="relative">
                    {/* Central Line */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-brand via-secondary-brand to-transparent"></div>

                    <div className="space-y-16 lg:space-y-24">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col lg:flex-row items-center gap-8 ${step.side === 'left' ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Content Card */}
                                <div className="w-full lg:w-[calc(50%-3rem)] glass-card glass-card-hover rounded-2xl p-8 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:border-primary-brand/30 transition-all">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold font-jakarta text-white mb-3">{step.title}</h3>
                                            <p className="text-sm text-muted-brand leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Central Circle */}
                                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-background-dark border-4 border-secondary-brand/30 flex items-center justify-center relative z-10">
                                        <div className="w-4 h-4 rounded-full bg-secondary-brand animate-pulse"></div>
                                    </div>
                                </div>

                                {/* Empty Space for layout */}
                                <div className="hidden lg:block w-[calc(50%-3rem)]"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-20">
                    <a href="#contact" className="btn-primary inline-block">
                        Start Your Project
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Process;
