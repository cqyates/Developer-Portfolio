import MiniNav from '../../components/MiniNav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const About = () => {
  return (
    <section>
      <Row>
        <Col lg={3}>
          <MiniNav />
        </Col>
        <Col lg={8}>
          <h1> About Me Page Placeholder </h1>
        </Col>
      </Row>
    </section>
  );
};

export default About;
