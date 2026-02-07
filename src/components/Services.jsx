import React from 'react';
import { Megaphone, Lightbulb, PenTool, Search, Share2, BarChart3, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const servicesSet = [
    {
        icon: <Megaphone className="text-primary-brand" size={28} />,
        title: "Digital Marketing",
        desc: "Comprehensive digital strategies that amplify your brand presence across all channels and drive measurable results.",
        features: ["Multi-channel campaigns", "Performance tracking", "Audience targeting"]
    },
    {
        icon: <Lightbulb className="text-primary-brand" size={28} />,
        title: "Brand Strategy",
        desc: "Build a powerful brand identity that resonates with your target audience and sets you apart from competitors.",
        features: ["Brand positioning", "Visual identity design", "Messaging framework"]
    },
    {
        icon: <PenTool className="text-primary-brand" size={28} />,
        title: "Content Creation",
        desc: "Engaging content that tells your story, educates your audience, and drives conversions through compelling narratives.",
        features: ["Blog & article writing", "Video production", "Graphic design"]
    },
    {
        icon: <Search className="text-primary-brand" size={28} />,
        title: "SEO Optimization",
        desc: "Dominate search rankings with technical SEO, keyword strategies, and content optimization that brings organic traffic.",
        features: ["On-page optimization", "Link building", "Technical audits"]
    },
    {
        icon: <Share2 className="text-primary-brand" size={28} />,
        title: "Social Media Management",
        desc: "Build communities, engage audiences, and grow your following with strategic social media management and content.",
        features: ["Content calendar", "Community engagement", "Paid social ads"]
    },
    {
        icon: <BarChart3 className="text-primary-brand" size={28} />,
        title: "Analytics & Reporting",
        desc: "Data-driven insights that inform strategy, measure success, and identify opportunities for continuous improvement.",
        features: ["KPI tracking", "Custom dashboards", "Monthly reports"]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 md:py-32 px-6 relative bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-brand/10 border border-primary-brand/20 mb-6">
                        <Sparkles className="text-primary-brand w-4 h-4" />
                        <span className="text-sm font-medium text-white">Our Services</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta text-white mb-6">
                        Comprehensive Marketing
                        <span className="block gradient-text">Solutions</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-brand max-w-2xl mx-auto leading-relaxed">
                        From strategy to execution, we deliver end-to-end marketing services that drive growth and build lasting brand value.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {servicesSet.map((service, index) => (
                        <div
                            key={index}
                            className="glass-card glass-card-hover rounded-2xl p-8 group animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary-brand/10 group-hover:bg-primary-brand/20 flex items-center justify-center mb-6 transition-all border border-primary-brand/20 group-hover:border-primary-brand/40">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold font-jakarta text-white mb-3 group-hover:text-primary-brand transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-muted-brand leading-relaxed mb-6">
                                {service.desc}
                            </p>

                            <div className="space-y-2 pt-6 border-t border-white/10">
                                {service.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-center gap-2">
                                        <CheckCircle2 className="text-success-brand w-4 h-4 flex-shrink-0" />
                                        <span className="text-sm text-muted-brand">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex items-center gap-2 text-primary-brand opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
                                <span className="text-sm font-semibold">Learn more</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
