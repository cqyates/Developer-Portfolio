

import ContactForm from "../../components/ContactForm"
import { Col, Row } from "react-bootstrap"
const ContactPage = () => {
  return (
    <Row >
      <h1> Contact Me Page </h1>
      <Col lg={2}></Col>
      <Col lg={8}>
      <ContactForm />
      </Col>
      <Col lg={2}></Col>
    </Row>
  )
}

export default ContactPage