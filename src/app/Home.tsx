import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="home-container">
      {/* Left Side Text */}
      <div className="text-container">
        <h2 className='animated-heading'>Hello, I'm Shahbaz Abro</h2>
        <p>I am forntend developer a designer and developer with a deep passion for both creativity and technology. From an early age, I was always fascinated by how things work—whether it was drawing my favorite characters or learning how websites are built. This curiosity led me to explore the world </p>
      </div>

      {/* Right Side Image */}
      <div className="image-container">
        <img 
          src="https://i.pinimg.com/originals/68/6d/23/686d2383b17abb094fd04ecf849cfe25.jpg"  // Replace with your image URL
          alt="Your Name"
          className="profile-image"
        />
      </div>
    </div>
  );
}

export default Home;
