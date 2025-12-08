import '../styles/About.css'

export default function About() {
    const team = [
        {
            name: 'Vidar Sharma',
            role: 'Founder & CEO',
            icon: '👔'
        },
        {
            name: 'Team Lead - Backend',
            role: 'Lead Developer',
            icon: '👨‍💻'
        },
        {
            name: 'Team Lead - Frontend',
            role: 'UI/UX Expert',
            icon: '👩‍💻'
        },
        {
            name: 'QA Lead',
            role: 'Quality Assurance',
            icon: '🧪'
        }
    ]

    return (
        <div className="about">
            <div className="about-header">
                <h1>About MVshine Infotech</h1>
                <p>Your trusted technology partner for digital transformation</p>
            </div>

            {/* Company Story */}
            <section className="company-story">
                <div className="story-content">
                    <h2>Our Story</h2>
                    <p>
                        MVshine Infotech was founded with a vision to empower businesses through innovative technology solutions.
                        What started as a small team of passionate developers has grown into a full-service software development company
                        serving clients across multiple industries.
                    </p>
                    <p>
                        We believe in building long-term relationships with our clients by delivering exceptional quality and providing
                        outstanding support. Our team combines technical expertise with a deep understanding of business needs to create
                        solutions that truly make a difference.
                    </p>
                </div>
                <div className="story-image">
                    <div className="image-placeholder">🌟</div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="mission-vision">
                <div className="mission-card">
                    <h3>🎯 Our Mission</h3>
                    <p>
                        To deliver innovative, scalable, and user-centric software solutions that drive business growth
                        and digital transformation across various industries.
                    </p>
                </div>
                <div className="vision-card">
                    <h3>🚀 Our Vision</h3>
                    <p>
                        To be the most trusted and preferred technology partner for businesses seeking digital excellence
                        and sustainable growth through innovative solutions.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="core-values">
                <h2>Our Core Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">💡</div>
                        <h3>Innovation</h3>
                        <p>We stay ahead of technology trends and continuously innovate</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🎯</div>
                        <h3>Excellence</h3>
                        <p>We maintain the highest standards in everything we do</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🤝</div>
                        <h3>Integrity</h3>
                        <p>We build trust through transparent and honest practices</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">⏱️</div>
                        <h3>Reliability</h3>
                        <p>We deliver on our commitments every single time</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🌍</div>
                        <h3>Global Mindset</h3>
                        <p>We think globally while understanding local needs</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">👥</div>
                        <h3>Collaboration</h3>
                        <p>We work as partners with our clients for mutual success</p>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="team-section">
                <h2>Our Team</h2>
                <p className="section-subtitle">A talented group of developers, designers, and strategists</p>
                <div className="team-grid">
                    {team.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="team-avatar">{member.icon}</div>
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Partner With Us */}
            <section className="partnership-section">
                <h2>Why Partner With Us</h2>
                <div className="partnership-grid">
                    <div className="partnership-item">
                        <div className="item-number">✓</div>
                        <h3>Proven Track Record</h3>
                        <p>Successfully delivered 50+ projects across diverse industries</p>
                    </div>
                    <div className="partnership-item">
                        <div className="item-number">✓</div>
                        <h3>Expert Team</h3>
                        <p>Skilled professionals with years of industry experience</p>
                    </div>
                    <div className="partnership-item">
                        <div className="item-number">✓</div>
                        <h3>Latest Technologies</h3>
                        <p>Using cutting-edge tools and frameworks for modern solutions</p>
                    </div>
                    <div className="partnership-item">
                        <div className="item-number">✓</div>
                        <h3>Client-Centric Approach</h3>
                        <p>Your success is our success - we prioritize your goals</p>
                    </div>
                    <div className="partnership-item">
                        <div className="item-number">✓</div>
                        <h3>Dedicated Support</h3>
                        <p>24/7 support and maintenance for all our solutions</p>
                    </div>
                    <div className="partnership-item">
                        <div className="item-number">✓</div>
                        <h3>Competitive Pricing</h3>
                        <p>Best value for money without compromising quality</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
