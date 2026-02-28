import React from 'react';
import { motion } from 'framer-motion';

const newsItems = [
    {
        id: 1,
        title: "Levan Saginashvili retains the crown",
        date: "OCTOBER 15, 2026",
        summary: "The Georgian Hulk proved once again that he is an unstoppable force of nature, destroying his opponent in a brutal 6-0 supermatch.",
        img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "Denis Cyplenkov's legendary return",
        date: "SEPTEMBER 2, 2026",
        summary: "The giant with hands of steel shocked the armwrestling world with a legendary comeback to the table after a massive recovery.",
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "East vs West 20: The bloodbath",
        date: "AUGUST 14, 2026",
        summary: "Tensions were high and grips were torn. The latest East vs West event saw two injuries and three upset victories.",
        img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800",
    }
];

const pageVariants = {
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 100 }
};

const News = () => {
    return (
        <motion.div
            className="page-container"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.6 }}
            style={{ padding: '130px 2rem 2rem 2rem', maxWidth: '1200px', margin: '0 auto' }}
        >
            <h1 className="section-title">THE ARM BOARD</h1>
            <p style={{ color: 'var(--accent-gold)', marginBottom: '3rem', fontSize: '1.2rem', fontStyle: 'italic', fontFamily: 'var(--font-head-gent)' }}>
                Latest highlights from the battlefield of iron hands.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {newsItems.map((news, index) => (
                    <motion.article
                        key={news.id}
                        className="glass-panel"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            borderLeft: '5px solid var(--accent-khaki)',
                            overflow: 'hidden'
                        }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div style={{ flex: '1 1 300px', height: '250px', position: 'relative' }}>
                            <div
                                style={{
                                    position: 'absolute', inset: 0,
                                    background: `url(${news.img}) center/cover no-repeat`,
                                    filter: 'grayscale(0.8) contrast(1.2)'
                                }}
                            />
                            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(85, 107, 47, 0.2)' }} />
                        </div>

                        <div style={{ flex: '2 1 400px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                                {news.date}
                            </span>
                            <h2 className="brutal-text" style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: '1.2' }}>
                                {news.title}
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1.1rem' }}>
                                {news.summary}
                            </p>

                            <div style={{ marginTop: '2rem' }}>
                                <button className="btn-gentleman" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>
                                    FULL STORY
                                </button>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </motion.div>
    );
};

export default News;
