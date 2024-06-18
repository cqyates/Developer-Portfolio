import MiniNav from '../../components/MiniNav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//put inside a carousel?

const About = () => {
  return (
    <section>
      <Row>
        <Col lg={3}>
          <MiniNav />
        </Col>
        <Col lg={8} style={{ border: '1px solid yellow' }}>
          <h1
            style={{ color: 'white', border: '1px solid white', width: '100%' }}
          >
            {' '}
            Meet the Developer{' '}
          </h1>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}
          >
            <Card style={{ width: '40%', margin: '1em' }}>
              <Card.Header>
                <Card.Title>
                  <h3>Full Stack React Developer</h3>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Paragraph about web development</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '40%', margin: '1em' }}>
              <Card.Header>
                <Card.Title>
                  <h3>Education</h3>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <h4>University of California, Berkeley</h4>
                  <h5>Bachelor&#39;s of Arts in History</h5>
                  <h5>2006</h5>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '40%', margin: '1em' }}>
              <Card.Header>
                <Card.Title>
                  {' '}
                  <h3>Educator</h3>{' '}
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Paragraph about teaching code</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '40%', margin: '1em' }}>
              <Card.Header>
                <Card.Title><h3>Ecommerce Expert</h3></Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Paragraph about growing an Ecommerce Business
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '40%', margin: '1em' }}>
              <Card.Header>
                <Card.Title><h3>Advocate</h3> </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Paragraph about advocating for women in tech{' '}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '40%', margin: '1em' }}>
              <Card.Header>
                <Card.Title><h3>Mentor</h3> </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Paragraph about growing new developers </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '40%', margin: '1em' }}>
              <Card.Header>
                <Card.Title> <h3>Music Lover</h3> </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Paragraph about growing new developers </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
