import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        "Languages": [
            { name: "Python", level: 95, color: "bg-green-500" },
            { name: "C++", level: 85, color: "bg-blue-600" },
            { name: "JavaScript", level: 60, color: "bg-yellow-400" },
            { name: "C", level: 80, color: "bg-gray-500" },
        ],
        "Frameworks": [
            { name: "Django", level: 95, color: "bg-green-600" },
            { name: "Django REST", level: 90, color: "bg-red-500" },
            { name: "FastAPI", level: 70, color: "bg-teal-500" },
        ],
        "Databases": [
            { name: "PostgreSQL", level: 90, color: "bg-blue-500" },
            { name: "Redis", level: 85, color: "bg-red-600" },
            { name: "Neo4j", level: 75, color: "bg-orange-500" },
            { name: "SQL", level: 85, color: "bg-blue-400" },
        ],
        "DevOps & Tools": [
            { name: "Docker", level: 80, color: "bg-blue-400" },
            { name: "Git", level: 90, color: "bg-orange-600" },
        ]
    };

    return (
        <section id="skills" className="py-20 bg-terminal-black">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center gap-2 mb-12">
                    <span className="text-neon-green font-mono text-xl">02.</span>
                    <h2 className="text-3xl font-bold text-white">
                        <span className="text-neon-purple">Stack</span>.dependencies
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {Object.entries(skills).map(([category, items], catIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: catIndex * 0.2 }}
                            viewport={{ once: true }}
                            className="terminal-box"
                        >
                            <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-2">
                                <h3 className="text-xl font-mono text-neon-green">{category}</h3>
                                <span className="text-xs text-gray-500">status: active</span>
                            </div>

                            <div className="space-y-6">
                                {items.map((skill, index) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-mono text-gray-300">{skill.name}</span>
                                            <span className="font-mono text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className={`h-full ${skill.color} shadow-[0_0_10px_currentColor]`}
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
