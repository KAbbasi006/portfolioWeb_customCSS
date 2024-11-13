import { FaLinkedin, FaGithub,FaGlobe, FaBehance } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-logo">Komal Abbasi</h2>
        
        <ul className="footer-nav">
        <li><Link href="/">Home</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact me</Link></li>
        </ul>
        
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/komal-abbasi-2121b7275/" target="_blank"><FaLinkedin className="text-2xl"/></a>
          <a href="https://github.com/KAbbasi006" target="_blank"><FaGithub className="text-2xl"/></a>
          <a href="https://www.behance.net/KAkomalabbasi" target="_blank"><FaBehance className="text-2xl"/></a>
          <a href="https://assignment5-portfolio-website-odq36tdk8-komal-abbasis-projects.vercel.app" target="_blank"><FaGlobe className="text-2xl"/></a>
        </div>
        
        <div className="contact-info">
          <p>abcdefghij@gmail.com</p>
          <p>021 123456789</p>
        </div>

        <p className="footer-credit">Designed by Komal Abbasi</p>
      </div>
    </footer>
  );
};

export default Footer;
