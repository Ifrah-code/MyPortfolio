import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out to me for collaborations, opportunities, or just to say hello!
      </p>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="contact-btn">Send Message</button>
      </form>

      <div className="contact-socials">
        <a href="https://github.com/Ifrah-code" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/ifrahs" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:ifrah@example.com">Email</a>
      </div>
    </section>
  );
};

export default Contact;
