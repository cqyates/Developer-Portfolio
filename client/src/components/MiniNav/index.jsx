import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import "./style.css";
const MiniNav = () => {
  return (
    <aside>
      <Nav style={{display: "flex", flexDirection: "column"}}>
      <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/projects">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/recommendations">
            Recommendations
          </Nav.Link>
          <Nav.Link as={Link} to="/resume">
            Resume
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact Me
          </Nav.Link>
      </Nav>
    </aside>
  )
}
export default MiniNav