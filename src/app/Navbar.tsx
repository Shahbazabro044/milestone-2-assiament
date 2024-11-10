// src/components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
        <Link href="">SHAHBAZ</Link>
        </Link>
      </div>
      <ul className="navLinks">
        <li>
          <Link href="/">
            <Link href="./Home">Home</Link>
          </Link>
        </li>
        <li>
          <Link href="/about">
          <Link href="/About">About</Link>
          </Link>
        </li>
        <li>
          <Link href="/services">
          <Link href="/Service">Services</Link>
          </Link>
        </li>
        <li>
          <Link href="/contact">
          <Link href="./Contact">Contact</Link>
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={() => {}}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
