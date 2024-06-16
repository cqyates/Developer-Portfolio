import ContactForm from '../../components/ContactForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import MiniNav from '../../components/MiniNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  return (
    <section>
      <Row>
        <Col lg={3}>
          <MiniNav />
        </Col>
        <Col lg={8}>
          <h2 style={{ color: 'white', width: '80%', margin: '1em auto' }}>
            Send Me a Message
          </h2>
          <ContactForm />
        </Col>
        <Col lg={1} style={{ border: '1px solid white', borderRadius: "10px" }}>
          <ButtonGroup style={{ display: 'flex', flexDirection: 'column', height: "100%", justifyContent: "space-evenly"}}>
            <a href="https://github.com/cqyates" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              size="6x"
              style={{ color: 'white', margin: "2rem" }}
            />
            </a>
            <a href="https://www.linkedin.com/in/corey-yates-codes/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="6x"
              style={{ color: 'white', margin: "2rem" }}
            />
            </a>
            <a href="https://www.facebook.com/cqyates/" target="_blank" rel="noreferrer">
             <FontAwesomeIcon
              icon={faFacebook}
              size="6x"
              style={{ color: 'white', margin: "2rem" }}
            />
            </a>
            <a href="mailto:cqyates@gmail.com" target="_blank" rel="noreferrer">
             <FontAwesomeIcon
              icon={faEnvelope}
              size="6x"
              style={{ color: 'white', margin: "2rem" }}
            />
            </a>
          </ButtonGroup>
        </Col>
      </Row>
    </section>
  );
};

export default ContactPage;
