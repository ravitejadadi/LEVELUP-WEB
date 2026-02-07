import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 px-6 bg-background-dark">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-jakarta text-white mb-6">
                        Ready to Elevate
                        <span className="block gradient-text">Your Brand?</span>
                    </h2>
                    <p className="text-base md:text-lg text-muted-brand max-w-2xl mx-auto leading-relaxed">
                        Let's discuss how we can help you achieve your marketing goals and drive real business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8 animate-fade-in-up">
                        <div className="glass-card rounded-2xl p-8 space-y-10 border-white/5">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-primary-brand/10 flex items-center justify-center mb-4 transition-all border border-primary-brand/20">
                                    <Mail className="text-primary-brand" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                                <p className="text-sm text-muted-brand mb-2">Get in touch via email</p>
                                <a href="mailto:hello@levelupmarketing.com" className="text-lg font-semibold text-primary-brand hover:underline">
                                    hello@levelupmarketing.com
                                </a>
                            </div>

                            <div>
                                <div className="w-12 h-12 rounded-xl bg-secondary-brand/10 flex items-center justify-center mb-4 transition-all border border-secondary-brand/20">
                                    <Phone className="text-secondary-brand" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                                <p className="text-sm text-muted-brand mb-2">Mon-Fri from 9am to 6pm EST</p>
                                <a href="tel:+15551234567" className="text-lg font-semibold text-secondary-brand hover:underline">
                                    +1 (555) 123-4567
                                </a>
                            </div>

                            <div>
                                <div className="w-12 h-12 rounded-xl bg-success-brand/10 flex items-center justify-center mb-4 transition-all border border-success-brand/20">
                                    <MapPin className="text-success-brand" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Visit Us</h3>
                                <p className="text-sm font-semibold text-white leading-relaxed">
                                    123 Marketing Boulevard<br />
                                    Suite 500, New York, NY 10001
                                </p>
                            </div>

                            <div className="pt-6 border-t border-white/10">
                                <p className="text-xs font-bold text-muted-brand uppercase tracking-widest mb-6">Follow Our Journey</p>
                                <div className="flex gap-4">
                                    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                        <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-muted-brand hover:bg-primary-brand hover:text-white border border-white/10 hover:border-primary-brand transition-all">
                                            <Icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="glass-card rounded-2xl p-8 md:p-12 border-white/5">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-muted-brand uppercase tracking-widest">Full Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-brand transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-muted-brand uppercase tracking-widest">Email Address</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-brand transition-all" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted-brand uppercase tracking-widest">Subject</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-brand transition-all" placeholder="Inquiry about services" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-muted-brand uppercase tracking-widest">Message</label>
                                    <textarea rows="6" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-brand resize-none transition-all" placeholder="Tell us more about your project..."></textarea>
                                </div>
                                <button className="w-full btn-primary flex items-center justify-center gap-2 group">
                                    <span>Send Message</span>
                                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
