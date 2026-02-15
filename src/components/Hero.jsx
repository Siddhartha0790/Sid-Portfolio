import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Database, Server, FileText } from 'lucide-react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "> initializing_portfolio... \n> loaded: Python Backend Developer \n> status: ready_to_code";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-terminal-black">
            {/* Background Grids */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0.5)_1px,transparent_1px)] bg-[size:40px_40px] z-0 opacity-20"></div>

            <div className="z-10 w-full max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="terminal-box shadow-[0_0_30px_rgba(0,255,0,0.1)]"
                >
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-gray-500 text-sm font-mono">user@backend-dev:~</div>
                        <div className="w-4"></div>
                    </div>

                    {/* Terminal Content */}
                    <div className="font-mono text-lg space-y-4">
                        <div className="whitespace-pre-wrap text-neon-green min-h-[100px]">
                            {text}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2.5 h-5 bg-neon-green ml-1 align-middle"
                            >
                            </motion.span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.5, duration: 0.5 }}
                            className="mt-8 border-t border-gray-800 pt-6"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                                <span className="text-neon-purple">Def</span> Build(future):
                            </h1>
                            <p className="text-gray-400 max-w-xl text-xl">
                                Architecting scalable systems, optimizing database queries, and building robust APIs.
                            </p>

                            <div className="flex gap-4 mt-8">
                                <a href="#projects" className="px-6 py-3 bg-neon-green/10 border border-neon-green text-neon-green hover:bg-neon-green/20 transition-all rounded font-mono flex items-center gap-2">
                                    <Terminal size={18} />
                                    View Projects
                                </a>
                                <a href="/Sid_resume10.pdf" download className="px-6 py-3 bg-blue-500/10 border border-blue-500 text-blue-400 hover:bg-blue-500/20 transition-all rounded font-mono flex items-center gap-2">
                                    <FileText size={18} />
                                    Resume
                                </a>
                                <a href="#contact" className="px-6 py-3 bg-neon-purple/10 border border-neon-purple text-neon-purple hover:bg-neon-purple/20 transition-all rounded font-mono flex items-center gap-2">
                                    <Server size={18} />
                                    Contact Me
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Decorative icons in background of terminal */}
                    <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-5 pointer-events-none">
                        <Code size={200} />
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
