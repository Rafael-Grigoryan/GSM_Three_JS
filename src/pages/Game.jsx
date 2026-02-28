import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const Game = () => {
    const [gameState, setGameState] = useState('idle'); // idle, playing, won, lost
    const [position, setPosition] = useState(0); // -100 (AI wins) to 100 (Player wins)
    const [aiStrength, setAiStrength] = useState(1.5);

    // The main game loop
    useEffect(() => {
        let interval;
        if (gameState === 'playing') {
            interval = setInterval(() => {
                setPosition((prev) => {
                    const newPos = prev - aiStrength;
                    if (newPos <= -100) {
                        setGameState('lost');
                        return -100;
                    }
                    return newPos;
                });
            }, 100);
        }
        return () => clearInterval(interval);
    }, [gameState, aiStrength]);

    const handleMash = useCallback(() => {
        if (gameState !== 'playing') return;

        setPosition((prev) => {
            const newPos = prev + 5; // Player push power
            if (newPos >= 100) {
                setGameState('won');
                return 100;
            }
            return newPos;
        });
    }, [gameState]);

    // Keyboard support for mashing
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Space' && gameState === 'playing') {
                handleMash();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [gameState, handleMash]);

    const startGame = (difficulty) => {
        let strength = 1.5;
        if (difficulty === 'hard') strength = 2.5;
        if (difficulty === 'legend') strength = 4.0;

        setAiStrength(strength);
        setPosition(0);
        setGameState('playing');
    };

    const getArmRotation = () => {
        // position goes from -100 to 100. 
        // Map to angle: 0 position = 0 deg. 100 position = 90 deg. -100 = -90 deg.
        return (position / 100) * 80;
    };

    return (
        <motion.div
            className="page-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            style={{ padding: '130px 2rem 2rem 2rem', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}
        >
            <h1 className="section-title">TABLE WARS</h1>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem' }}>
                Prove your strength. Mash SPACEBAR or tap the button to pin your opponent!
            </p>

            {gameState === 'idle' && (
                <div className="glass-panel" style={{ padding: '3rem', maxWidth: '600px', margin: '0 auto', border: '2px solid var(--accent-khaki)' }}>
                    <h2 className="brutal-text" style={{ fontSize: '2rem', marginBottom: '2rem' }}>CHOOSE OPPONENT</h2>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn-brutal" onClick={() => startGame('easy')}>ROOKIE</button>
                        <button className="btn-brutal" onClick={() => startGame('hard')}>PRO</button>
                        <button className="btn-brutal" style={{ borderColor: 'var(--accent-gold)' }} onClick={() => startGame('legend')}>CHAMPION</button>
                    </div>
                </div>
            )}

            {gameState === 'playing' && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                    <div style={{
                        width: '100%',
                        maxWidth: '600px',
                        height: '20px',
                        background: 'var(--bg-panel)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '10px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: '50%',
                            width: '2px',
                            backgroundColor: '#fff',
                            zIndex: 10
                        }} />
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: '50%',
                                width: '50%',
                                backgroundColor: 'var(--accent-khaki)',
                                transformOrigin: 'left',
                                scaleX: position > 0 ? position / 100 : 0
                            }}
                        />
                        <motion.div
                            style={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: '50%',
                                width: '50%',
                                backgroundColor: 'red',
                                transformOrigin: 'right',
                                scaleX: position < 0 ? Math.abs(position) / 100 : 0
                            }}
                        />
                    </div>

                    <div style={{
                        width: '300px',
                        height: '300px',
                        border: '5px solid var(--bg-panel)',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                        overflow: 'hidden',
                        position: 'relative',
                        background: 'radial-gradient(circle, rgba(85,107,47,0.2) 0%, rgba(0,0,0,1) 100%)'
                    }}>
                        <motion.div
                            animate={{ rotate: getArmRotation() }}
                            transition={{ type: 'tween', duration: 0.1 }}
                            style={{
                                width: '20px',
                                height: '180px',
                                background: 'linear-gradient(to top, var(--accent-khaki), #fff)',
                                transformOrigin: 'bottom center',
                                position: 'absolute',
                                bottom: '20px'
                            }}
                        />
                    </div>

                    <button
                        className="btn-brutal"
                        style={{ fontSize: '2rem', padding: '1rem 4rem', userSelect: 'none' }}
                        onPointerDown={handleMash}
                    >
                        MASH / TAP
                    </button>
                </div>
            )}

            {(gameState === 'won' || gameState === 'lost') && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="glass-panel"
                    style={{
                        padding: '3rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        border: `4px solid ${gameState === 'won' ? 'var(--accent-khaki)' : 'red'}`
                    }}
                >
                    <h2 className="brutal-text" style={{ fontSize: '4rem', marginBottom: '1rem', color: gameState === 'won' ? 'var(--accent-khaki)' : 'red' }}>
                        {gameState === 'won' ? 'YOU PINNED HIM!' : 'YOU GOT CRUSHED!'}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem' }}>
                        {gameState === 'won' ? 'True GSM Strength.' : 'Go back to The Forge and train.'}
                    </p>
                    <button className="btn-gentleman" onClick={() => setGameState('idle')}>
                        BACK TO TABLE
                    </button>
                </motion.div>
            )}

        </motion.div>
    );
};

export default Game;
