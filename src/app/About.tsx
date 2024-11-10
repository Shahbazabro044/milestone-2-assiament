import Image from 'next/image';
import styles from '../styles/Home.module.css';  // You can still import this for layout or other styles

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-intro">
          <p>
            Hello, I'm <strong>Shahbaz Abro</strong>, a designer and developer with a deep passion for both creativity and technology. From an early age, I was always fascinated by how things work—whether it was drawing my favorite characters or learning how websites are built. This curiosity led me to explore the world of <strong>design</strong> and <strong>development</strong>, and today, I combine the two to create unique, user-centered digital experiences.
          </p>
          <p>
            I started my journey in <strong>design</strong> with Figma, where I quickly fell in love with the ability to turn ideas into beautiful, interactive prototypes. Designing became more than just a hobby; it was a way for me to communicate stories and emotions visually. Over time, I expanded my skills into the world of <strong>web development</strong>, particularly using <strong>Next.js</strong> to bring my designs to life with clean, responsive code.
          </p>
          <p>
            I believe in the power of creating experiences that not only look good but also feel right. Whether it's a website, an app, or any digital product, I aim to design with purpose and build with precision. Every project is an opportunity to learn something new, and I approach each one with enthusiasm and dedication.
          </p>
        </div>
      </div>
      <div className="profile-image">
        <img          src="https://i.pinimg.com/originals/68/6d/23/686d2383b17abb094fd04ecf849cfe25.jpg"  // Replace with your image path or URL
          alt="Your Name"
          width={200}  // Set your preferred image size
          height={200}
          className="image"
        />
      </div>
    </section>
  );
}

export default About;
