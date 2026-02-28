import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Zap, ShieldAlert } from 'lucide-react';

const programs = [
    {
        id: 'toproll',
        name: "TOPROLL MECHANICS",
        subtitle: "Tear open the opponent's fingers",
        difficulty: "Advanced",
        icon: <Zap size={32} color="var(--accent-khaki)" />,
        details: "Focuses on pronation, back pressure, and wrist flexion. Dominate the hand control before the pin.",
        workouts: [
            "Pronation through thumb - 4 sets x 8-12 reps",
            "Rising with belt - 4 sets x 6 reps",
            "Cupping (wrist curl) with fat grip - 3 sets x 15 reps",
            "Table time: Static holds - 30 seconds x 3"
        ]
    },
    {
        id: 'hook',
        name: "HOOK BRUTALITY",
        subtitle: "Inside game warfare",
        difficulty: "Expert",
        icon: <ShieldAlert size={32} color="var(--accent-gold)" />,
        details: "Supination, deep bicep strength, and shoulder commitment. Drag them into deep waters and crush them.",
        workouts: [
            "Supination curls - 4 sets x 10 reps",
            "Hook training on table (bungee cord) - 3 sets x 12 reps",
            "Isometric bicep holds at 90 degrees - 4 sets x 20 sec",
            "Heavy side pressure pulls - 5 sets x 5 reps"
        ]
    },
    {
        id: 'press',
        name: "TRICEP PRESS",
        subtitle: "The deadly finisher",
        difficulty: "Intermediate",
        icon: <Activity size={32} color="#fff" />,
        details: "Bone alignment behind the hand. The fastest way to pin if you can get out of a slipping position.",
        workouts: [
            "Close grip bench press - 4 sets x 8 reps",
            "Cable tricep pushdowns (heavy) - 4 sets x 10 reps",
            "Shoulder drops on the table - 5 sets x 5 reps",
            "Wrist press isolation - 3 sets x 15 reps"
        ]
    }
];

const Training = () => {
    const [activeTab, setActiveTab] = useState(programs[0].id);

    const activeProgram = programs.find(p => p.id === activeTab);

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
            style={{ padding: '130px 2rem 2rem 2rem', maxWidth: '1200px', margin: '0 auto' }}
        >
            <h1 className="section-title">THE FORGE</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem', lineHeight: '1.6' }}>
                Select your weapon. Train your tendons, fortify your bones,
                and prepare for the inevitable clash of titans.
                <span className="gentleman-text" style={{ paddingLeft: '1rem' }}>No rest for the wicked.</span>
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                {programs.map((prog) => (
                    <button
                        key={prog.id}
                        onClick={() => setActiveTab(prog.id)}
                        className="brutal-text"
                        style={{
                            padding: '1rem 2rem',
                            backgroundColor: activeTab === prog.id ? 'var(--accent-khaki)' : 'transparent',
                            color: activeTab === prog.id ? '#fff' : 'var(--text-secondary)',
                            border: `2px solid ${activeTab === prog.id ? 'var(--accent-khaki)' : 'var(--border-subtle)'}`,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontSize: '1.2rem'
                        }}
                    >
                        {prog.name}
                    </button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeProgram.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="glass-panel"
                    style={{ padding: '3rem', borderLeft: '10px solid var(--accent-gold)' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                        {activeProgram.icon}
                        <h2 className="brutal-text" style={{ fontSize: '3rem', margin: 0 }}>
                            {activeProgram.name}
                        </h2>
                    </div>

                    <h3 className="gentleman-text" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
                        {activeProgram.subtitle}
                    </h3>

                    <div style={{
                        display: 'inline-block',
                        padding: '5px 15px',
                        border: '1px solid var(--accent-khaki)',
                        color: 'var(--accent-khaki)',
                        fontFamily: 'var(--font-head-brut)',
                        textTransform: 'uppercase',
                        marginBottom: '2rem',
                        letterSpacing: '2px'
                    }}>
                        DIFFICULTY: {activeProgram.difficulty}
                    </div>

                    <p style={{ color: 'var(--text-primary)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '3rem' }}>
                        {activeProgram.details}
                    </p>

                    <h4 className="brutal-text" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
                        REQUIRED PROTOCOL
                    </h4>

                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {activeProgram.workouts.map((workout, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    padding: '1rem',
                                    backgroundColor: 'rgba(255,255,255,0.02)',
                                    marginBottom: '0.5rem',
                                    borderLeft: '2px solid var(--accent-khaki)',
                                    fontSize: '1.1rem',
                                    fontFamily: 'var(--font-body)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}
                            >
                                <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>{String(index + 1).padStart(2, '0')}</span>
                                {workout}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default Training;
