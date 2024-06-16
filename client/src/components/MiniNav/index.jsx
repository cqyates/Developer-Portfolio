import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './style.css';
const MiniNav = () => {
  return (
    <aside>
      <Nav style={{ display: 'flex', flexDirection: 'column'}}>
        <Nav.Link style={{color: "white"}} as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link style={{color: "white"}} as={Link} to="/about">
          About Me
        </Nav.Link>
        <Nav.Link style={{color: "white"}} as={Link} to="/projects">
          Projects
        </Nav.Link>
        <Nav.Link style={{color: "white"}} as={Link} to="/recommendations">
          Recommendations
        </Nav.Link>
        <Nav.Link style={{color: "white"}} as={Link} to="/resume">
          Resume
        </Nav.Link>
        <Nav.Link style={{color: "white"}} as={Link} to="/contact">
          Contact Me
        </Nav.Link>
      </Nav>
    </aside>
  );
};
export default MiniNav;
