import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const PageNav = () => {
  return (
    <div
      style={{
        width: 'fit-content',
        position: 'absolute',
        top: '2%',
        right: '4%',
        color: 'white',
        fontFamily: "'Carattere', cursive",
        fontSize: '1.5rem',
        height: '90%',
      }}
    >
      <Navbar style={{ height: '100%' }}>
        <Container style={{ height: '100%' }}>
          <Navbar.Collapse
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              height: '100%',
            }}
          >
            <Nav.Link as={Link} to="/about">
              About Me
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
          </Navbar.Collapse>

          <Navbar.Toggle />
        </Container>
      </Navbar>
    </div>
  );
};
export default PageNav;
