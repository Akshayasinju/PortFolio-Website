

function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="logo" href="#home">YourName</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

