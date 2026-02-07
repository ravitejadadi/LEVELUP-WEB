import React, { useState, useEffect } from 'react';
import { BarChart3, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Results', href: '#results' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-background-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 group relative z-50">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-brand to-secondary-brand flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
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
                            className="text-sm font-medium text-muted-brand hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="px-6 py-2.5 bg-primary-brand hover:bg-primary-brand/90 text-white rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-primary-brand/30">
                        Get Started
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2 relative z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 bg-background-dark transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-bold text-white hover:text-primary-brand transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-primary-brand text-white rounded-full text-lg font-bold shadow-lg shadow-primary-brand/30"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Get Started
                    </a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
