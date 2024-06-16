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
        <Col lg={8} style={{border: "1px solid yellow"}}>
          <h1 style={{ color: 'white', border: "1px solid white", width: "100%"}}> Meet the Developer </h1>
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
            <Card style={{width: "40%", margin: "1em"}}>
              <Card.Header>
                <Card.Title> Full Stack React Developer </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Paragraph about web development</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{width: "40%",margin: "1em"}}>
              <Card.Header>
                <Card.Title> Educator </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Paragraph about teaching code</Card.Text>
              </Card.Body>
            </Card>
            <Card style={{width: "40%", margin: "1em"}}>
              <Card.Header>
                <Card.Title> Ecommerce Expert </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Paragraph about growing an Ecommerce Business
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{width: "40%", margin: "1em"}}>
              <Card.Header>
                <Card.Title> Advocate </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Paragraph about advocating for women in tech{' '}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{width: "40%", margin: "1em"}}>
              <Card.Header>
                <Card.Title> Mentor </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Paragraph about growing new developers {' '}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{width: "40%", margin: "1em"}}>
              <Card.Header>
                <Card.Title> Music Lover </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Paragraph about growing new developers {' '}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
