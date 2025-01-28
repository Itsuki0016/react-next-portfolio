import React, { useState } from "react";
import "./Contact.css";


const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
            setErrorMessage("All fields are required.");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMessage("Please enter a valid email address.");
            return false;
        }
        setErrorMessage("");
        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        const HUBSPOT_PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "48458753";
        const HUBSPOT_FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID || "bd6ff507-e991-436f-a82a-7a455d384403";

        const HUBSPOT_ENDPOINT = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`;

        const payload = {
            fields: [
                { name: "firstname", value: formData.firstname },
                { name: "lastname", value: formData.lastname },
                { name: "email", value: formData.email },
                { name: "message", value: formData.message },
            ],
        };

        try {
            const response = await fetch(HUBSPOT_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setSuccessMessage("Your message has been sent successfully!");
                setFormData({ firstname: "", lastname: "", email: "", message: "" });
            } else {
                throw new Error("Failed to send message.");
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("There was an error sending your message. Please try again.");
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Contact Me</h2>
                <p className="contact-description">
                    Have a project in mind or just want to say hello? Fill out the form below and let is connect!
                </p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <input
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            placeholder="First Name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
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
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">
                        Send Message
                    </button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
        </section>
    );
};

export default Contact;
