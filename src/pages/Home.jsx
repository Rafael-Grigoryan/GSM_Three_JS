import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Anchor, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const pageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    in: { opacity: 1, scale: 1 },
    out: { opacity: 0, scale: 1.05 }
};

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.8
};

const Home = () => {
    return (
        <motion.div
            className="page-container"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="hero-section" style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '2rem',
                maxWidth: '1200px',
                margin: '0 auto'
            }}>
                <motion.h1
                    className="gentleman-text"
                    style={{ fontSize: '3rem', marginBottom: '0.5rem' }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    Welcome to the brotherhood
                </motion.h1>

                <motion.h2
                    className="brutal-text"
                    style={{ fontSize: '7vw', lineHeight: '1', marginBottom: '2rem', color: '#fff' }}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    GENTLEMAN <br />
                    <span style={{ color: 'var(--accent-khaki)' }}>SPORTSMAN</span>
                </motion.h2>

                <motion.p
                    style={{
                        fontSize: '1.2rem',
                        maxWidth: '600px',
                        color: 'var(--text-secondary)',
                        marginBottom: '3rem',
                        lineHeight: '1.6'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    The ultimate elite hub for Arm Wrestling.
                    Where raw, brutal strength meets strategy and gentleman's code.
                    Prepare to break your limits.
                </motion.p>

                <motion.div
                    style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <Link to="/training" className="btn-brutal">
                        START TRAINING <ChevronRight size={20} style={{ verticalAlign: 'middle' }} />
                    </Link>
                    <Link to="/news" className="btn-gentleman">
                        READ NEWS
                    </Link>
                </motion.div>
            </div>

            <div className="features-section" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <h3 className="section-title">CORE PILLARS</h3>
                <div className="grid-cards">
                    <FeatureCard
                        icon={<Shield size={40} color="var(--accent-gold)" />}
                        title="HONOR"
                        desc="Respect at the table. A gentleman's match starts and ends with a solid handshake."
                    />
                    <FeatureCard
                        icon={<Anchor size={40} color="var(--accent-khaki)" />}
                        title="STRENGTH"
                        desc="Forged in iron. Unyielding brute force combined with bone-crushing pressure."
                    />
                    <FeatureCard
                        icon={<TrendingUp size={40} color="#fff" />}
                        title="TECHNIQUE"
                        desc="Hook, Toproll, Press. Mechanical perfection over wild aggression."
                    />
                </div>
            </div>
        </motion.div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <motion.div
        className="glass-panel"
        style={{ padding: '2rem', borderTop: '4px solid var(--accent-khaki)' }}
        whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
    >
        <div style={{ marginBottom: '1.5rem' }}>{icon}</div>
        <h4 className="brutal-text" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h4>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5' }}>{desc}</p>
    </motion.div>
);

export default Home;
