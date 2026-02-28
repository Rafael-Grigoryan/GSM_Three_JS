import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: { opacity: 0, x: '100%' },
        open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
    };

    return (
        <nav className="navbar glass-panel">
            <div className="nav-container">
                <NavLink to="/" className="logo">
                    <Dumbbell className="logo-icon hover-khaki" size={32} />
                    <div className="logo-text">
                        <span className="brutal-text">G</span>
                        <span className="brutal-text">S</span>
                        <span className="brutal-text">M</span>
                    </div>
                </NavLink>

                <div className="nav-links desktop-only">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>HOME</NavLink>
                    <NavLink to="/news" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>NEWS</NavLink>
                    <NavLink to="/training" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>TRAINING</NavLink>
                    <NavLink to="/game" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>GAME</NavLink>
                </div>

                <button className="menu-btn mobile-only hover-gold" onClick={toggleMenu}>
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu glass-panel"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <NavLink to="/" onClick={toggleMenu} className="mobile-link">HOME</NavLink>
                        <NavLink to="/news" onClick={toggleMenu} className="mobile-link">NEWS</NavLink>
                        <NavLink to="/training" onClick={toggleMenu} className="mobile-link">TRAINING</NavLink>
                        <NavLink to="/game" onClick={toggleMenu} className="mobile-link">GAME</NavLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
