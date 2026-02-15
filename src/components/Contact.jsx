import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Terminal } from 'lucide-react';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., log to console or send to backend)
        console.log({ email, message });
        alert("Transmission sent to server.");
        setEmail('');
        setMessage('');
    };

    return (
        <section id="contact" className="py-20 bg-terminal-black relative border-t border-gray-900">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center gap-2 mb-12 justify-center">
                    <span className="text-neon-green font-mono text-xl">04.</span>
                    <h2 className="text-3xl font-bold text-white">
                        <span className="text-neon-purple">Initiate</span>.handshake
                    </h2>
                </div>

                <div className="bg-terminal-gray border border-gray-800 rounded-lg p-8 shadow-2xl relative overflow-hidden">
                    {/* Background binary rain effect hint */}
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                        <div className="font-mono text-xs text-neon-green leading-3">
                            01010101<br />10101010<br />00110011
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-mono text-white mb-4">
                                <span className="text-neon-green">{">"}</span> Transmission_Channel
                            </h3>
                            <p className="text-gray-400 mb-8 font-mono text-sm leading-relaxed">
                                Open for collaboration, code reviews, and tech discussions.
                                Establish connection via secure protocols below.
                            </p>

                            <div className="space-y-4">
                                <a href="mailto:siddharthamitra123@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-neon-green transition-colors group">
                                    <Mail size={20} className="group-hover:animate-pulse" />
                                    <span className="font-mono">siddharthamitra123@gmail.com</span>
                                </a>
                                <a href="https://github.com/Siddhartha0790" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                    <Github size={20} />
                                    <span className="font-mono">github.com/Siddhartha0790</span>
                                </a>

                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-1">input.sender_email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full bg-black border border-gray-700 text-white p-3 rounded font-mono focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green transition-all"
                                    placeholder="user@domain.com"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-1">input.message_payload</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows="4"
                                    className="w-full bg-black border border-gray-700 text-white p-3 rounded font-mono focus:border-neon-green focus:outline-none focus:ring-1 focus:ring-neon-green transition-all"
                                    placeholder="// Enter your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-neon-green/10 border border-neon-green text-neon-green py-3 rounded font-mono hover:bg-neon-green hover:text-black transition-all font-bold flex items-center justify-center gap-2"
                            >
                                <Terminal size={18} />
                                Send Packet
                            </button>
                        </form>
                    </div>
                </div>

                <footer className="mt-20 text-center text-gray-600 font-mono text-sm">
                    <p>Built with React.js & TailwindCSS</p>
                    <p className="mt-2 text-xs">System.exit(0)</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
