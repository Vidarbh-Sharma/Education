import '../styles/Portfolio.css'

export default function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'Hotel Booking Platform',
            category: 'Hotel Management',
            image: '🏨',
            description: 'A comprehensive hotel booking system with real-time availability',
            technologies: ['React', 'Node.js', 'MongoDB'],
            year: '2024'
        },
        {
            id: 2,
            title: 'E-commerce Store',
            category: 'E-commerce',
            image: '🛒',
            description: 'Full-featured e-commerce platform with payment integration',
            technologies: ['React', 'Express', 'PostgreSQL', 'Stripe'],
            year: '2024'
        },
        {
            id: 3,
            title: 'Healthcare Management App',
            category: 'Healthcare',
            image: '🏥',
            description: 'Patient management and appointment booking system',
            technologies: ['React', 'Firebase', 'Node.js'],
            year: '2023'
        },
        {
            id: 4,
            title: 'Restaurant Management System',
            category: 'Restaurant',
            image: '🍽️',
            description: 'Order management and table reservation system',
            technologies: ['React', 'Python', 'PostgreSQL'],
            year: '2023'
        },
        {
            id: 5,
            title: 'Real Estate Portal',
            category: 'Real Estate',
            image: '🏢',
            description: 'Property listing and virtual tour platform',
            technologies: ['React', 'Node.js', 'MongoDB', '3D Viewer'],
            year: '2023'
        },
        {
            id: 6,
            title: 'Education Platform',
            category: 'Education',
            image: '📚',
            description: 'Online learning platform with video streaming',
            technologies: ['React', 'Node.js', 'HLS Streaming'],
            year: '2022'
        },
        {
            id: 7,
            title: 'Finance Dashboard',
            category: 'Finance',
            image: '💰',
            description: 'Investment tracking and analytics dashboard',
            technologies: ['React', 'Chart.js', 'Python'],
            year: '2022'
        },
        {
            id: 8,
            title: 'Social Media App',
            category: 'Social',
            image: '👥',
            description: 'Community platform with real-time messaging',
            technologies: ['React Native', 'Firebase', 'WebSocket'],
            year: '2022'
        },
        {
            id: 9,
            title: 'Manufacturing ERP',
            category: 'Manufacturing',
            image: '🏭',
            description: 'Enterprise resource planning system',
            technologies: ['React', 'Node.js', 'PostgreSQL'],
            year: '2023'
        }
    ]

    return (
        <div className="portfolio">
            <div className="portfolio-header">
                <h1>Our Portfolio</h1>
                <p>Showcasing our successful projects across various industries</p>
            </div>

            <div className="portfolio-grid">
                {projects.map((project) => (
                    <div key={project.id} className="portfolio-card">
                        <div className="project-image">{project.image}</div>
                        <div className="project-content">
                            <span className="project-category">{project.category}</span>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, idx) => (
                                    <span key={idx} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                            <p className="project-year">{project.year}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stats Section */}
            <section className="portfolio-stats">
                <h2>Our Achievements</h2>
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>50+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div className="stat-card">
                        <h3>8+</h3>
                        <p>Industries Served</p>
                    </div>
                    <div className="stat-card">
                        <h3>30+</h3>
                        <p>Happy Clients</p>
                    </div>
                    <div className="stat-card">
                        <h3>5+</h3>
                        <p>Years Experience</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
