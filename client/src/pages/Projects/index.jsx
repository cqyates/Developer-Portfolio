import ProjectCarousel from '../../components/Carousel';
import MiniNav from '../../components/MiniNav';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProjectPage = () => {
  return (
    <section>
      <Row>
        <Col lg={3}>
          <MiniNav />
        </Col>
        <Col lg={8}>
          <ProjectCarousel />
        </Col>
      </Row>
    </section>
  );
};

export default ProjectPage;
