import React from 'react';


function Contact() {
  return (
    <div  style={{ backgroundColor: '#9EB7B4', minHeight: '100vh', padding: '20px' }} className="contact-container">
        <section style={{ marginTop: '15px', textAlign: 'left' }}>
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '30px', color: '#333' }}>Get in Touch</h2>
            <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#555' }}>
            <b>We are here to make your reading experience exceptional. Have a query, suggestion, or simply want to connect? Reach out to us -we'd love to hear from you!</b>
            </p>
          </div>


          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '30px', color: '#333' }}>Contact Us</h2>
            <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#555' }}>
            <b>Email: sample@gmail.comm</b>
              <br/>
              <b>Phone: +915662434568</b>
            </p>
          </div>
        </section>
      </div>
  );
}

export default Contact;