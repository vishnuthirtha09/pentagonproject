import React from 'react';

const About = () => {
  return (
    <div style={{ backgroundColor: '#ABC2C1', minHeight: '100vh', padding: '20px' }}>
      <div style={{ paddingTop: '15px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', marginBottom: '10px', color: '#333' }}>Welcome to Bookstore</h1>
        <p style={{ fontSize: '20px', lineHeight: '1', color: '#555' }}>
          Your digital sanctuary for book lovers!
        </p>

        <section style={{ marginTop: '30px', textAlign: 'left' }}>
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '30px', color: '#333' }}>Our Purpose</h2>
            <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#555' }}>
            <b>At Bookstore, we're dedicated to bringing the joy of reading to your fingertips.
              Our mission is simple: to provide a carefully curated collection of books that captivate, educate, and entertain.</b>
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '30px', color: '#333' }}>What Sets Us Apart</h2>
            <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#555' }}>
            <b> We take pride in our diverse selection, handpicked to satisfy every literary craving.
              From timeless classics to contemporary bestsellers, we're committed to offering quality reads for all ages and tastes.</b>
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '30px', color: '#333' }}>Community Engagement</h2>
            <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#555' }}>
            <b> Bookstore is more than a place to buy books; it's a hub for literary enthusiasts. We host book clubs, author signings, and workshops, fostering a vibrant community of readers. Join us in celebrating the magic of storytelling through our engaging events and discussions.</b>
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ fontSize: '30px', color: '#333' }}>Our Commitment</h2>
            <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#555' }}>
            <b> Sustainability and inclusivity are at the core of our values. We strive to promote eco-friendly practices in our operations and support marginalized voices in literature. By collaborating with local authors and publishers, we aim to create a platform that embraces diversity and equality in storytelling.</b>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;