import { Link } from 'react-router-dom'
import '../styles/Home.css'

export default function Home() {
    const services = [
        {
            icon: '🌐',
            title: 'Web Development',
            description: 'Responsive and modern websites for all business needs'
        },
        {
            icon: '📱',
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile applications'
        },
        {
            icon: '🛍️',
            title: 'E-commerce',
            description: 'Complete online shopping solutions for your business'
        },
        {
            icon: '⚙️',
            title: 'Custom Solutions',
            description: 'Tailored software solutions for unique challenges'
        },
        {
            icon: '🏨',
            title: 'Hotel Management',
            description: 'Booking systems and management tools for hotels'
        },
        {
            icon: '📊',
            title: 'Business Intelligence',
            description: 'Data analytics and reporting solutions'
        }
    ]

    const sectors = [
        { name: 'Hotels & Hospitality', icon: '🏨' },
        { name: 'E-commerce', icon: '🛒' },
        { name: 'Healthcare', icon: '🏥' },
        { name: 'Education', icon: '📚' },
        { name: 'Finance', icon: '💰' },
        { name: 'Real Estate', icon: '🏢' },
        { name: 'Manufacturing', icon: '🏭' },
        { name: 'Retail', icon: '🛍️' }
    ]

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Digital Solutions for Your Business</h1>
                    <p>Transform your business with innovative web and mobile applications</p>
                    <div className="hero-buttons">
                        <Link to="/services" className="btn btn-primary">
                            Explore Services
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="floating-box box1">💡</div>
                    <div className="floating-box box2">🚀</div>
                    <div className="floating-box box3">⚡</div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-preview">
                <h2>Our Services</h2>
                <p className="section-subtitle">Comprehensive solutions for every business need</p>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sectors Section */}
            <section className="sectors">
                <h2>Industries We Serve</h2>
                <p className="section-subtitle">Experience across diverse business sectors</p>
                <div className="sectors-grid">
                    {sectors.map((sector, index) => (
                        <div key={index} className="sector-card">
                            <div className="sector-icon">{sector.icon}</div>
                            <p>{sector.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose">
                <h2>Why Choose MVshine Infotech?</h2>
                <div className="why-grid">
                    <div className="why-card">
                        <div className="why-number">1</div>
                        <h3>Expert Team</h3>
                        <p>Skilled developers with years of experience in various technologies</p>
                    </div>
                    <div className="why-card">
                        <div className="why-number">2</div>
                        <h3>Custom Solutions</h3>
                        <p>Tailored solutions designed specifically for your business needs</p>
                    </div>
                    <div className="why-card">
                        <div className="why-number">3</div>
                        <h3>On-time Delivery</h3>
                        <p>We respect your timeline and deliver projects on schedule</p>
                    </div>
                    <div className="why-card">
                        <div className="why-number">4</div>
                        <h3>24/7 Support</h3>
                        <p>Continuous support and maintenance for all our solutions</p>
                    </div>
                    <div className="why-card">
                        <div className="why-number">5</div>
                        <h3>Cost Effective</h3>
                        <p>Competitive pricing without compromising on quality</p>
                    </div>
                    <div className="why-card">
                        <div className="why-number">6</div>
                        <h3>Latest Technology</h3>
                        <p>Using cutting-edge technologies and best practices</p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <h2>Ready to Transform Your Business?</h2>
                <p>Let's discuss your project and create something amazing together</p>
                <Link to="/contact" className="btn btn-large">
                    Start Your Project Today
                </Link>
            </section>
        </div>
    )
}
