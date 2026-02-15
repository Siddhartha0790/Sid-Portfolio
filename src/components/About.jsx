import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Coffee, Globe, Database } from 'lucide-react';

const About = () => {

    const stats = [
        { icon: <Cpu className="text-neon-purple" />, label: "Education", value: "IIIT Bhubaneswar" },
        { icon: <Terminal className="text-neon-green" />, label: "Core Stack", value: "Python / Django" },
        { icon: <Database className="text-blue-400" />, label: "Focus", value: "Backend / APIs" },
        { icon: <Globe className="text-yellow-400" />, label: "Location", value: "Bhubaneswar, IN" },
    ];

    return (
        <section id="about" className="py-20 bg-terminal-black relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Text Content */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-neon-green font-mono text-xl">01.</span>
                            <h2 className="text-3xl font-bold text-white"><span className="text-neon-purple">System</span>.bio(self)</h2>
                        </div>

                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed font-mono">
                            <p>
                                <span className="text-neon-green">{">>"}</span> hello_world()
                            </p>
                            <p>
                                I am a Computer Science Engineering student at <strong className="text-white">IIIT Bhubaneswar</strong>, specializing in backend development.
                            </p>
                            <p>
                                My expertise lies in building scalable APIs and secure systems using <strong className="text-neon-green">Django</strong> and <strong className="text-neon-green">Python</strong>. I focus on the logic behind the scenes—ensuring data flows efficiently and securely.
                            </p>
                            <p>
                                Currently solving complex problems and exploring the depths of cryptography and distributed systems.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <div key={index} className="p-4 bg-terminal-gray border border-gray-800 rounded hover:border-neon-green transition-colors">
                                    <div className="flex items-center gap-3 mb-2">
                                        {stat.icon}
                                        <span className="text-sm text-gray-500 font-mono">{stat.label}</span>
                                    </div>
                                    <div className="text-white font-bold">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual/Image Side */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-neon-purple/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 bg-terminal-gray border border-gray-700 p-2 rounded-lg rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-black p-4 rounded overflow-hidden">
                                <pre className="text-xs md:text-sm text-green-400 font-mono overflow-x-auto">
                                    {`class Engineer:
    def __init__(self):
        self.name = "Siddhartha Mitra"
        self.education = "IIIT Bhubaneswar"
        self.stack = ["Python", "Django", "PostgreSQL"]
        
{{ ... }}
        while bug.exists():
            self.debug()
            self.coffee_level -= 10
            
# Executing...`}
                                </pre>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};
export default About;
