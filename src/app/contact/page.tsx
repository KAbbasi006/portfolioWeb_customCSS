import React from 'react';

const ContactForm = () => {
  return (
    <section  className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact me</h2>
        <p className="section-subtitle">Feel free to contact me !</p>
        
        <form className="contact-form">
        <input
            type="text"
            placeholder="First name"
            className="form-input"
          />
           <input
          type="text"
          placeholder=" Last name"
          className="form-input"
        />
          <input
            type="email"
            placeholder="Email"
            className="form-input"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="form-input"
          />
        
          <input
            type="text"
            placeholder="Timeline"
            className="form-input timeline-input"
          />
          <textarea
            placeholder="Project Details..."
            className="form-textarea"
          ></textarea>
          <button
            type="submit"
            className="form-button"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
