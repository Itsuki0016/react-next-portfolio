import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...formData,
                to: "ktc24a31e0016@edu.kyoto-tech.ac.jp"
            }),
        });

        if (response.ok) {
            setSuccessMessage("Your message has been sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setSuccessMessage("There was an error sending your message. Please try again later.");
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Contact Me</h2>
                <p className="contact-description">
                    Have a project in mind or just want to say hello? Fill out the form below and let's connect!
                </p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows={5}
                            required
                            className="form-control"
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
        </section>
    );
};

export default Contact;