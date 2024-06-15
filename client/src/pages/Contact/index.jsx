

import ContactForm from "../../components/ContactForm"
import { Col, Row } from "react-bootstrap"
import MiniNav from "../../components/MiniNav"

const ContactPage = () => {
  return (
    <Row style={{border: "3px dotted pink"}}>
      <Col style={{border: "3px dotted pink"}} lg={3}>
      <MiniNav/>
      </Col>
      <Col lg={8}>
      <ContactForm />
      </Col>
     
    </Row>
  )
}

export default ContactPage