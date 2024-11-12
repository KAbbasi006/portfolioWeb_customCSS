import { FaLinkedin, FaGithub,FaGlobe, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-logo">Komal Abbasi</h2>
        
        <ul className="footer-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/about">About me</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact me</a></li>
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
