import ContactForm from '../../components/ContactForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import MiniNav from '../../components/MiniNav';

const ContactPage = () => {
  return (
    <section>
      <Row>
        <Col lg={3}>
          <MiniNav />
        </Col>
        <Col lg={8}>
          <ContactForm />
        </Col>
      </Row>
    </section>
  );
};

export default ContactPage;
