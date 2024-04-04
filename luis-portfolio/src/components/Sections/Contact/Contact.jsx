
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formErrors, setFormErrors] = useState({});

    // Handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate email format
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    };


    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        let errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            errors.email = 'Invalid email address';
        }
        if (!formData.message) errors.message = 'Message is required';

        setFormErrors(errors);

        // If there are no errors, submit the form (example: send to an API)
        if (Object.keys(errors).length === 0) {
            console.log('Form data:', formData);
            // Reset form data and errors
            setFormData({ name: '', email: '', message: '' });
            setFormErrors({});
            // Here you would typically integrate with an email service
            alert('Thank you for contacting us!');
        }
    };

    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={formErrors.name && 'error'}
                    />
                    {formErrors.name && <p className="error-msg">{formErrors.name}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={formErrors.email && 'error'}
                    />
                    {formErrors.email && <p className="error-msg">{formErrors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={formErrors.message && 'error'}
                    />
                    {formErrors.message && <p className="error-msg">{formErrors.message}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
