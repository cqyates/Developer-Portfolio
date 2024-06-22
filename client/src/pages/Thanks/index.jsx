import MiniNav from '../../components/MiniNav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ThankYouPage = () => {
  return (
    <section>
      <Row>
        <Col lg={3}>
          <MiniNav/>
        </Col>
        <Col lg={9}>
          <h2 style={{color: "white"}}>Thank You for Your Recommendation!</h2>
        </Col>
      </Row>
    </section>
  )
}

export default ThankYouPage