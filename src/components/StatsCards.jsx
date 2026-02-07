import React from 'react';
import { BarChart3, Users, Rocket, Sparkles } from 'lucide-react';

const StatsCards = () => {
    return (
        <div className="relative max-w-6xl mx-auto h-[400px] hidden lg:block">
            {/* ROI Card */}
            <div className="absolute top-0 left-[10%] glass-card rounded-2xl p-6 w-72 animate-float-1" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-brand/20 flex items-center justify-center">
                        <BarChart3 className="text-primary-brand w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">340%</div>
                        <div className="text-sm text-muted-brand">ROI Growth</div>
                    </div>
                </div>
                <p className="text-sm text-muted-brand text-left">Average return on investment for our clients</p>
            </div>

            {/* Reach Card */}
            <div className="absolute top-[20%] right-[8%] glass-card rounded-2xl p-6 w-64 animate-float-2" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary-brand/20 flex items-center justify-center">
                        <Users className="text-secondary-brand w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">2.5M+</div>
                        <div className="text-sm text-muted-brand">Reach Generated</div>
                    </div>
                </div>
                <p className="text-sm text-muted-brand text-left">Combined social media reach across campaigns</p>
            </div>

            {/* Satisfaction Card */}
            <div className="absolute bottom-[10%] left-[15%] glass-card rounded-2xl p-6 w-64 animate-float-3" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-success-brand/20 flex items-center justify-center">
                        <Rocket className="text-success-brand w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">98%</div>
                        <div className="text-sm text-muted-brand">Satisfaction</div>
                    </div>
                </div>
                <p className="text-sm text-muted-brand text-left">Consistently rated 5-star by our partners</p>
            </div>

            {/* Awards Card */}
            <div className="absolute bottom-[5%] right-[12%] glass-card rounded-2xl p-6 w-72 animate-float-4" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary-brand/20 flex items-center justify-center">
                        <Sparkles className="text-secondary-brand w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-white">15+</div>
                        <div className="text-sm text-muted-brand">Industry Awards</div>
                    </div>
                </div>
                <p className="text-sm text-muted-brand text-left">Recognized excellence in digital marketing</p>
            </div>
        </div>
    );
};

export default StatsCards;
