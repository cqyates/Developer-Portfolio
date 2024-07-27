import MiniNav from '../../components/MiniNav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CatPic from "../../assets/images/kamalaCat.png"
//put inside a carousel?

const About = () => {
  return (
    <section>
      <Row>
        <Col lg={3}>
          <MiniNav />
        </Col>
        <Col lg={8}>
          <h1
            style={{ color: 'white', width: '100%' }}
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
                <Card.Text style={{textAlign: "left"}}>
                  <p>Over the past 5 years, I have found that my go to stack for making code is a React Frontend with a Node.js Backend.  Powered with information from databases like MySQL, MongoDB or Postgres and delievered to the end user with RESTful APIs or an Apollo Server with GraphQL.</p>
                  <br></br>
                  <p>As a tutor for students learning the MERN stack, I&#39;ve had the opportunity to jump into hundred of MERN stack projects in development and helped students debug, code and deploy MERN stack applications through platforms like Heroku, Render and Netlify</p>
                  </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '40%', margin: '1em' }}>
              <Card.Header>
                <Card.Title>
                  <h3>Education</h3>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text style={{textAlign: "left"}}>
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
                <Card.Text>For the past 5 years, it has been my honor to support coding bootcamp students on their journey to learning the MERN stack.  It is inspiring to me to see many of my students go on to become developers at all levels, able to learn new languages with ease.  They say that you truly know a subject when you can teach that subject to another person and I've learned more as a teacher than as a student.  I've learn to identify not just bugs and errors but misconceptions and thinking traps. Its always my goal to leave my students with the logical foundation necessary to keep learning and growing as developers.  As my students have grown and spread their wings, they would bring me new technologies and methods that I would learn on the fly and then help them debug the issues and successful implement their feature.  As a result of this work, I am a flexible developer, a good mentor and a quick study.</Card.Text>
              </Card.Body>
            </Card>
            {/* <Card style={{ width: '40%', margin: '1em' }}>
              <Card.Header>
                <Card.Title><h3>Ecommerce Expert</h3></Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Paragraph about growing an Ecommerce Business
                </Card.Text>
              </Card.Body>
            </Card> */}
{/*            
            <Card style={{ width: '40%', margin: '1em' }}>
              <Card.Header>
                <Card.Title><h3>Mentor</h3> </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Paragraph about growing new developers </Card.Text>
              </Card.Body>
            </Card> */}
            <Card style={{ width: '40%', margin: '1em' }}>
              <Card.Header>
                <Card.Title> <h3>Political Activist</h3> </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text> I am passionate about advancing the cause of empowering women in the workplace.  I believe that diversity of experience and opinion makes our code and our lives stronger. I always try to boost strong female voices and have proudly volunteered for the Stacey Abrams campaign.  This year, this cat is for Kamala.  See you on the campaign trail! </Card.Text>
                <Card.Img src={CatPic} />
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
