import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Code, Database, Layers } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-terminal-black flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-mono mb-4 text-neon-purple">404</h1>
                <p className="font-mono text-gray-400 mb-8">Project not found</p>
                <Link to="/" className="text-neon-green hover:underline font-mono flex items-center gap-2">
                    <ArrowLeft size={16} /> Return to base
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-terminal-black text-gray-300 font-sans selection:bg-neon-green selection:text-terminal-black">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link to="/" className="inline-flex items-center gap-2 text-neon-green hover:text-white transition-colors mb-12 font-mono text-sm group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    cd ..
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                        <div>
                            <span className="text-neon-purple font-mono text-sm block mb-2">Project ID: {project.id}</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
                        </div>
                        <div className="flex gap-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded hover:border-neon-green hover:text-neon-green transition-colors"
                                >
                                    <Github size={18} /> Source
                                </a>
                            )}
                            {project.link !== "#" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-neon-purple/10 border border-neon-purple/50 rounded hover:bg-neon-purple/20 text-neon-purple transition-all"
                                >
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="bg-terminal-gray border border-gray-800 rounded-xl p-8 mb-12 shadow-2xl">
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            {project.longDescription}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Code className="text-neon-green" size={20} /> Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-full text-sm font-mono text-neon-purple">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                    <Layers className="text-blue-400" size={20} /> Key Features
                                </h3>
                                <ul className="space-y-2">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                                            <span className="text-neon-green mt-1">▹</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetails;
