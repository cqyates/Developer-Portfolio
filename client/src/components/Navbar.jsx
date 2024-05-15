import {useState} from "react"
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Modal, Tab} from 'react-bootstrap';
import LoginForm from './LoginForm';
import logo from "../assets/logos/rosie.png"
import Auth from "../utils/auth"
const PageNav = () => {
  const [showModal, setShowModal] = useState(false)
  console.log(Auth.loggedIn)
  return (
    <>
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
          <Nav.Link as={Link} to="/contact">
            Contact Me
          </Nav.Link>
          {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/admin'>
                   Admin Tools
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login</Nav.Link>
              )}
        </Navbar.Collapse>

        <Navbar.Toggle />
       
      </Container>
    </Navbar>
     <Modal
     size='lg'
     show={showModal}
     onHide={() => setShowModal(false)}
     aria-labelledby='signup-modal'>
     {/* tab container to do either signup or login component */}
     <Tab.Container defaultActiveKey='login'>
       <Modal.Header closeButton>
         <Modal.Title id='signup-modal'>
           <Nav variant='pills'>
             <Nav.Item>
               <Nav.Link eventKey='login'>Login</Nav.Link>
             </Nav.Item>
           </Nav>
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <Tab.Content>
           <Tab.Pane eventKey='login'>
             <LoginForm handleModalClose={() => setShowModal(false)} />
           </Tab.Pane>
         </Tab.Content>
       </Modal.Body>
     </Tab.Container>
   </Modal>
   </>
  );
};
export default PageNav;
