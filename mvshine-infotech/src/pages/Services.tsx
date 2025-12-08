import '../styles/Services.css'

export default function Services() {
    const services = [
        {
            id: 1,
            title: 'Web Development',
            icon: '🌐',
            description: 'Custom web applications built with modern technologies',
            features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Secure & Scalable'],
            technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL']
        },
        {
            id: 2,
            title: 'Mobile App Development',
            icon: '📱',
            description: 'Native and cross-platform mobile applications',
            features: ['iOS & Android', 'User-Friendly', 'Offline Support', 'Push Notifications'],
            technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin']
        },
        {
            id: 3,
            title: 'E-commerce Solutions',
            icon: '🛒',
            description: 'Complete online shopping platforms',
            features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Multi-vendor Support'],
            technologies: ['WooCommerce', 'Shopify', 'Custom Node.js']
        },
        {
            id: 4,
            title: 'Hotel Management System',
            icon: '🏨',
            description: 'Complete hotel operations management',
            features: ['Booking System', 'Room Management', 'Guest Services', 'Revenue Management'],
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe']
        },
        {
            id: 5,
            title: 'Business Intelligence',
            icon: '📊',
            description: 'Data analytics and reporting solutions',
            features: ['Real-time Dashboards', 'Data Visualization', 'Custom Reports', 'Predictive Analytics'],
            technologies: ['Power BI', 'Tableau', 'Python', 'R']
        },
        {
            id: 6,
            title: 'Cloud Solutions',
            icon: '☁️',
            description: 'Cloud infrastructure and deployment',
            features: ['AWS/Azure Setup', 'Auto Scaling', 'Data Security', 'Cost Optimization'],
            technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes']
        },
        {
            id: 7,
            title: 'UI/UX Design',
            icon: '🎨',
            description: 'User-centered design and branding',
            features: ['Wireframing', 'Prototyping', 'User Testing', 'Brand Design'],
            technologies: ['Figma', 'Adobe XD', 'Sketch']
        },
        {
            id: 8,
            title: 'API Development',
            icon: '⚙️',
            description: 'RESTful and GraphQL API development',
            features: ['API Design', 'Authentication', 'Documentation', 'Testing'],
            technologies: ['Node.js', 'Python', 'GraphQL', 'REST']
        }
    ]

    return (
        <div className="services">
            <div className="services-header">
                <h1>Our Services</h1>
                <p>Complete technology solutions for your business</p>
            </div>

            <div className="services-container">
                {services.map((service) => (
                    <div key={service.id} className="service-detail-card">
                        <div className="service-header">
                            <div className="service-icon-large">{service.icon}</div>
                            <h2>{service.title}</h2>
                        </div>

                        <p className="service-description">{service.description}</p>

                        <div className="service-section">
                            <h3>Key Features</h3>
                            <ul className="features-list">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>✓ {feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="service-section">
                            <h3>Technologies Used</h3>
                            <div className="tech-tags">
                                {service.technologies.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Process Section */}
            <section className="process-section">
                <h2>Our Development Process</h2>
                <div className="process-steps">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3>Discovery & Planning</h3>
                        <p>Understanding your requirements and creating a detailed plan</p>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <h3>Design</h3>
                        <p>Creating beautiful and intuitive user interfaces</p>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <h3>Development</h3>
                        <p>Building robust and scalable applications</p>
                    </div>
                    <div className="step-arrow">→</div>
                    <div className="step">
                        <div className="step-number">4</div>
                        <h3>Testing & Deployment</h3>
                        <p>Thorough testing and smooth deployment to production</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
