import { useState } from 'react'
import '../styles/Contact.css'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                message: ''
            })
        }, 3000)
    }

    return (
        <div className="contact">
            <div className="contact-header">
                <h1>Get In Touch</h1>
                <p>We'd love to hear about your project. Let's talk!</p>
            </div>

            <div className="contact-container">
                {/* Contact Information */}
                <div className="contact-info">
                    <h2>Contact Information</h2>

                    <div className="info-item">
                        <div className="info-icon">📍</div>
                        <div className="info-content">
                            <h3>Address</h3>
                            <p>Sector 128, Noida</p>
                            <p>Uttar Pradesh, India</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">📞</div>
                        <div className="info-content">
                            <h3>Phone</h3>
                            <p>+91 8650990512</p>
                            <p>Available during business hours</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">✉️</div>
                        <div className="info-content">
                            <h3>Email</h3>
                            <p>info@mvshine.com</p>
                            <p>support@mvshine.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">🕐</div>
                        <div className="info-content">
                            <h3>Business Hours</h3>
                            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                            <p>Sat - Sun: Closed</p>
                        </div>
                    </div>

                    <div className="social-section">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#facebook" className="social-icon">f</a>
                            <a href="#twitter" className="social-icon">𝕏</a>
                            <a href="#linkedin" className="social-icon">in</a>
                            <a href="#instagram" className="social-icon">📷</a>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-container">
                    <h2>Send us a Message</h2>

                    {submitted ? (
                        <div className="success-message">
                            <div className="success-icon">✓</div>
                            <h3>Thank You!</h3>
                            <p>We've received your message and will get back to you soon.</p>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 (XXX) XXX-XXXX"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your Company"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Service Interest *</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="web">Web Development</option>
                                    <option value="mobile">Mobile App Development</option>
                                    <option value="ecommerce">E-commerce Solution</option>
                                    <option value="hotel">Hotel Management</option>
                                    <option value="custom">Custom Solution</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell us about your project..."
                                    rows={5}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>

            {/* FAQ Section */}
            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-grid">
                    <div className="faq-item">
                        <h3>How long does a typical project take?</h3>
                        <p>Project timelines vary based on scope and complexity. We typically discuss timeline expectations during the initial consultation.</p>
                    </div>
                    <div className="faq-item">
                        <h3>What's your pricing model?</h3>
                        <p>We offer flexible pricing models including fixed-price projects, hourly rates, and monthly retainers. Custom quotes available.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Do you provide post-launch support?</h3>
                        <p>Yes! We provide comprehensive maintenance and support packages for all our projects with 24/7 assistance available.</p>
                    </div>
                    <div className="faq-item">
                        <h3>Can you work with our existing team?</h3>
                        <p>Absolutely! We're experienced in collaborating with in-house teams and can integrate seamlessly into your development workflow.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
