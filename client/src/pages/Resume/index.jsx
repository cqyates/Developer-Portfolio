import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CoreyQYatesResumeImg from '../../assets/resume/myResume.png';
import CoreyQYatesPrimaryResume from '../../assets/resume/CoreyQYatesResume.pdf';

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
            <h2 style={{width: "100%"}}>Download My Resume</h2>
          </a>
          <a href={CoreyQYatesPrimaryResume} download>
            <img
              src={CoreyQYatesResumeImg}
              style={{
                width: '30vw',
                boxShadow: '1px 5px 10px white',
                borderRadius: '10px',
              }}
            />
          </a>
        </Col>
      </Row>
    </section>
  );
};

export default ResumePage;
