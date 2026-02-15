
export const projects = [
    {
        id: "devconnect",
        title: "DevConnect",
        desc: "A Full Stack Django community platform for developers. Features real-time user interactions (upvotes, comments, messaging), robust user profiles, and high-performance data access via Redis caching.",
        longDescription: "DevConnect is a comprehensive social platform tailored for developers to share knowledge, collaborate on projects, and build professional networks. Built with Django and Python, it emphasizes performance and scalability.",
        tech: ["Django", "Python", "Redis", "Docker", "PostgreSQL"],
        github: "https://github.com/Siddhartha0790/ProjectSearch",
        link: "#",
        features: [
            "Real-time messaging system",
            "Vote and comment on projects",
            "Advanced user profiles with skill showcasing",
            "Redis caching for high-traffic endpoints"
        ]
    },
    {
        id: "api-status",
        title: "API Status",
        desc: "Real-time API uptime monitoring service with asynchronous background workers (Celery/Redis). Tracks uptime, response times, and status codes, with automated failure detection and email alerts.",
        longDescription: "API Status is a robust monitoring solution designed to track the health and performance of REST APIs. It uses Celery workers to perform asynchronous checks, ensuring the main application remains responsive.",
        tech: ["Django", "Celery", "Redis", "PostgreSQL", "Python"],
        github: "https://github.com/Siddhartha0790/APIstatus",
        link: "#",
        features: [
            "Scheduled uptime checks",
            "Response time analytics",
            "Email alerts on downtime",
            "Detailed status history logs"
        ]
    },
    {
        id: "cryptoblind",
        title: "CryptoBlind",
        desc: "Zero-knowledge encrypted file storage system ensuring total privacy. Implements client-side hybrid encryption (AES-256-GCM + RSA-2048) and includes a custom Python client SDK for secure data transport.",
        longDescription: "CryptoBlind prioritizes user privacy by ensuring that the server never sees the unencrypted data. Utilizing hybrid encryption, it combines the speed of symmetric encryption with the security of asymmetric key exchange.",
        tech: ["Python", "DRF", "Cryptography", "AES-256", "RSA-2048"],
        github: "https://github.com/Siddhartha0790/Secure-storage",
        link: "#",
        features: [
            "Client-side encryption/decryption",
            "Zero-knowledge architecture",
            "Secure file sharing mechanisms",
            "Custom Python SDK for easy integration"
        ]
    },
    {
        id: "graph-network",
        title: "Graph Network",
        desc: "Social networking platform leveraging Graph algorithms. Uses BFS and MST for connection recommendations and PageRank for popularity scoring, backed by a Neo4j graph database.",
        longDescription: "Graph Network explores the power of graph databases in social networking. By modeling users and relationships as nodes and edges, it efficiently executes complex queries for recommendations and influence analysis.",
        tech: ["Python", "Django", "Neo4j", "Graph Algos"],
        github: "https://github.com/Siddhartha0790/graphnetwork",
        link: "#",
        features: [
            "Friend recommendation using BFS/DFS",
            "Influence scoring with PageRank",
            "Shortest path analysis for connections",
            "Visualization of social graph"
        ]
    }
];
