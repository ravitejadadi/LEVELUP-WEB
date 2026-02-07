import React, { useState, useEffect } from 'react';
import { BarChart3, Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Results', href: '#results' },
        { name: 'Contact', href: '#contact' },
    ];

    const menuVariants = {
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30
            }
        },
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: 20 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-background-dark/80 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'}`}>
            <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 group relative z-110">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary-brand to-secondary-brand flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <BarChart3 className="text-white w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold font-jakarta text-white group-hover:text-primary-brand transition-colors">
                        LevelUp
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-brand hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-brand transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <a href="#contact" className="group flex items-center gap-2 px-6 py-2.5 bg-primary-brand hover:bg-primary-brand/90 text-white rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-primary-brand/30">
                        Get Started
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2 relative z-110 bg-white/5 rounded-lg border border-white/10 transition-colors hover:bg-white/10"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                            className="fixed inset-0 bg-background-dark md:hidden z-100 flex flex-col pt-24"
                        >
                            {/* Decorative Background Element */}
                            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-brand/20 blur-[120px] rounded-full pointer-events-none" />
                            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary-brand/10 blur-[120px] rounded-full pointer-events-none" />

                            <div className="flex flex-col h-full pb-12 px-8 overflow-y-auto relative z-10">
                                <div className="flex flex-col gap-6">
                                    {navLinks.map((link) => (
                                        <motion.a
                                            variants={itemVariants}
                                            key={link.name}
                                            href={link.href}
                                            className="group flex items-center justify-between text-4xl font-bold text-white hover:text-primary-brand transition-colors"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span>{link.name}</span>
                                            <ChevronRight className="w-8 h-8 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-primary-brand" />
                                        </motion.a>
                                    ))}
                                </div>

                                <motion.div variants={itemVariants} className="mt-auto pt-10 border-t border-white/10">
                                    <p className="text-muted-brand text-sm mb-6">Ready to transform your brand?</p>
                                    <a
                                        href="#contact"
                                        className="flex items-center justify-center gap-3 w-full py-5 bg-linear-to-r from-primary-brand to-secondary-brand text-white rounded-2xl text-xl font-bold shadow-xl shadow-primary-brand/20 hover:scale-[1.02] transition-transform active:scale-95"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Get Started
                                        <ArrowRight className="w-6 h-6" />
                                    </a>

                                    <div className="flex justify-center gap-6 mt-10">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-brand hover:text-white hover:border-primary-brand/50 transition-all cursor-pointer">
                                            <span className="text-xs font-bold">TW</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-brand hover:text-white hover:border-primary-brand/50 transition-all cursor-pointer">
                                            <span className="text-xs font-bold">LI</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-brand hover:text-white hover:border-primary-brand/50 transition-all cursor-pointer">
                                            <span className="text-xs font-bold">IG</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;

