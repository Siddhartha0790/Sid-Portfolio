import React from 'react';
import { motion } from 'framer-motion';
import { Folder, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-terminal-black">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center gap-2 mb-12">
                    <span className="text-neon-green font-mono text-xl">03.</span>
                    <h2 className="text-3xl font-bold text-white">
                        <span className="text-neon-purple">Executed</span>.projects
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-terminal-gray border border-gray-800 rounded-lg p-6 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col"
                        >
                            <Link to={`/project/${project.id}`} className="block flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <Folder className="text-neon-green" size={40} />
                                    <div className="flex gap-3 relative z-20">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}><Github size={20} /></a>
                                        {project.link !== "#" && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}><ExternalLink size={20} /></a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">{project.title}</h3>

                                <p className="text-gray-400 mb-4 h-20 overflow-hidden text-sm">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs font-mono text-neon-purple/80">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </Link>

                            {/* Decorative border effect */}
                            <div className="absolute inset-0 border border-neon-green/0 rounded-lg group-hover:border-neon-green/50 transition-colors pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
