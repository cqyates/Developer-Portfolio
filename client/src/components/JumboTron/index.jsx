import { useState } from 'react';

import { Link } from 'react-router-dom';

import MyNav from '../Navbar';
import LoginForm from '../LoginForm';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import greenBanner from '../../assets/images/green_banner.png';
import './style.css';

import Auth from '../../utils/auth';

const JumboTron = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section style={{ width: '100%', position: 'relative' }}>
      {Auth.loggedIn() ? (
        <div
          style={{
            color: 'white',
            position: 'absolute',
            top: '5px',
            left: '5px',
          }}
        >
          <Nav.Link as={Link} to="/admin">
            Admin Tools
          </Nav.Link>
          <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
        </div>
      ) : (
        <Nav.Link onClick={() => setShowModal(true)}>
          <FontAwesomeIcon
            icon={faLock}
            style={{
              color: 'white',
              position: 'absolute',
              top: '20px',
              left: '20px',
            }}
            size="2x"
          />
        </Nav.Link>
      )}
      <img
        style={{
          width: '100%',
          borderRadius: '10px',
          boxShadow: '1px 3px 12px white',
        }}
        src={greenBanner}
      />
      <h1 style={{ position: 'absolute' }}>Corey Q. Yates</h1>
      <h2 style={{ position: 'absolute' }}>Software Developer</h2>
      <MyNav />
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </section>
  );
};

export default JumboTron;
