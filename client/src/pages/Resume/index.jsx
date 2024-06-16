import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CoreyQYatesResumeImg from '../../assets/resume/CoreyQYatesPrimaryResume.png';
import CoreyQYatesPrimaryResume from '../../assets/resume/CoreyYatesResume.pdf';

import MiniNav from '../../components/MiniNav';

const ResumePage = () => {
  return (
    <section>
      <Row>
        <Col lg={3}>
          <MiniNav />
        </Col>
        <Col lg={8}>
          <a href={CoreyQYatesPrimaryResume} download>
            <img
              src={CoreyQYatesResumeImg}
              style={{
                width: '30vw',
                border: '1px solid gray',
                boxShadow: '1px 5px 10px gray',
              }}
            />
          </a>
        </Col>
      </Row>
    </section>
  );
};

export default ResumePage;
