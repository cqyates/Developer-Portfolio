import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../assets/logos/rosie.png"
const PageNav = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <img src={logo}/>
      </Navbar.Brand>
      <Container>
       <h1>Corey Q. Yates</h1>
        <Navbar.Collapse>
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
        </Navbar.Collapse>

        <Navbar.Toggle />
       
      </Container>
    </Navbar>
  );
};
export default PageNav;
