import React from 'react';

const stats = [
    { label: 'Active Clients', value: '250+' },
    { label: 'Campaigns Launched', value: '1.2k+' },
    { label: 'Average ROI', value: '340%' },
    { label: 'Client Satisfaction', value: '98%' }
];

const Metrics = () => {
    return (
        <section id="results" className="py-20 md:py-32 px-6 bg-background-dark relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-brand/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta text-white mb-6 animate-fade-in-up">
                        Proven Impact Across
                        <span className="block gradient-text">Every Metric</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-brand max-w-2xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.1s' }}>
                        Numbers don't lie. See the measurable results we've delivered for businesses just like yours.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-2xl p-8 text-center animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                        >
                            <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                                {stat.value}
                            </div>
                            <div className="text-sm font-semibold text-primary-brand uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Highlighted Testimonial Area */}
                <div className="mt-16 md:mt-24 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div className="glass-card rounded-3xl p-8 md:p-16 max-w-5xl mx-auto text-center border-primary-brand/20 bg-primary-brand/5 backdrop-blur-md">
                        <p className="text-lg md:text-2xl font-medium text-white italic leading-relaxed mb-8">
                            "LevelUpMarketing transformed our digital presence completely. Within 6 months, we saw a 400% increase in qualified leads and our revenue grew by 250%. Their strategic approach and creative execution are unmatched."
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-brand to-secondary-brand shrink-0"></div>
                            <div className="text-center sm:text-left">
                                <div className="font-bold text-white uppercase tracking-wider text-sm sm:text-base">David Chen</div>
                                <div className="text-xs sm:text-sm text-primary-brand font-semibold">CEO, TechVista Systems</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Metrics;
