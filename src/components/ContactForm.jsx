// ContactForm.js
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // service id: service_2v8k29q
    // template_kpn9pdt

    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
      .then((result) => {
        alert('Message successfully sent!');
      }, (error) => {
        alert('Failed to send the message, please try again later.');
      });

    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#F5F9FF', color: '#345541' }}  id="contact-us">
      <h2 style={{ textAlign: 'center' , marginBottom : '20px'}}>Contact Us</h2> {/* Only center heading */}
      <form onSubmit={sendEmail}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message">Message</label><br />
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ textAlign: 'center' }}> {/* Only center submit button */}
          <button
            type="submit"
            style={{
              padding: '1rem 2rem',
              fontSize: '1.2rem',
              backgroundColor: '#9e8352',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
