"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const menuRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        if (isOpen) window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 bg-white/5 backdrop-blur-md`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-11">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0"
                    >
                        <Link href="/" className="text-white font-bold text-xl">
                            Ryan Dev.
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.path}
                                    className={`relative ${pathname === item.path
                                        ? 'text-white'
                                        : 'text-gray-300 hover:text-white'
                                        }`}
                                >
                                    <motion.span
                                        className="relative"
                                        whileHover={{ y: -2 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {item.name}
                                        {pathname === item.path && (
                                            <motion.div
                                                className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"
                                                layoutId="navbar-underline"
                                            />
                                        )}
                                    </motion.span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <motion.div whileTap={{ scale: 0.95 }} className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            className="text-gray-300 hover:text-white focus:outline-none p-2 rounded"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <div className="w-7 h-6 relative">
                                <motion.span
                                    className="block absolute left-0 right-0 h-0.5 bg-current rounded"
                                    animate={isOpen ? { rotate: 45, top: '12px' } : { rotate: 0, top: '3px' }}
                                    transition={{ duration: 0.25 }}
                                />
                                <motion.span
                                    className="block absolute left-0 right-0 h-0.5 bg-current rounded"
                                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                    style={{ top: '9px' }}
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    className="block absolute left-0 right-0 h-0.5 bg-current rounded"
                                    animate={isOpen ? { rotate: -45, top: '12px' } : { rotate: 0, top: '15px' }}
                                    transition={{ duration: 0.25 }}
                                />
                            </div>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Mobile menu (full-screen overlay) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="md:hidden fixed inset-0 z-50 flex"
                    >
                        {/* backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 bg-black"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* panel */}
                        <motion.div
                            initial={{ y: '8%', opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: '8%', opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="relative z-50 w-full max-w-md mx-auto my-16 backdrop-blur-2xl border border-white/6 rounded-xl p-6 shadow-xl"
                            ref={menuRef}
                        >
                            <nav className="flex flex-col gap-4 bg-black">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block text-lg font-medium py-3 px-4 rounded-lg text-center ${pathname === item.path ? 'text-white bg-white/6' : 'text-gray-200 hover:bg-white/6'}`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                <div className="mt-4 border-t border-white/6 pt-4 flex justify-center pb-2 gap-3">
                                    <a href="#projects" onClick={() => setIsOpen(false)} className="text-sm px-4 py-1 text-gray-200 bg-white/15 rounded-full hover:text-white">View Projects</a>
                                    <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm px-4 py-1 text-gray-200 bg-white/15 rounded-full hover:text-white">Contact</a>
                                </div>
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;