import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Footer.css';

function Footer() {
  return (
    <div  id="linkContainer">
      <a href="https://github.com/Justinstone2001"> <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" className="Icon"/></a>
      <a href="https://www.linkedin.com/in/justin-stone-4071761ab/"> <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="Icon"/></a>
    </div>
  );
}

export default Footer;
