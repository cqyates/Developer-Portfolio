import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

import MiniNav from '../../components/MiniNav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Admin = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const recommendationArray = data?.user.recommendations || [];
  const messageArray = data?.user.messages || [];

  const handleRecApproval = (event) => {
    console.log(event.target.getAttribute("data-id"))
    console.log("turn approval value to true");

  }
  const handleRecDelete = (event) => {
    console.log("delete rec from database")
  }
  return (
    <section>
      <Row>
        <Col lg={3}>
          <MiniNav />
        </Col>
        <Col lg={8}>
          <h1 style={{ color: 'white', marginBottom: "3em" }}>
            Admin Panel
          </h1>
          <Row>
            <Col>
              {messageArray.length == 0 ? (
                <h2 style={{ color: 'white', marginBottom: "3em" }}>No Pending Messages</h2>
              ) : (
                <div>
                  {' '}
                  <h2 style={{ color: 'white'}}>
                    Pending Messages
                  </h2>
                </div>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {recommendationArray.length == 0 ? (
                <h2>No Pending Recommendations</h2>
              ) : (
                <div>
                  <h2 style={{ color: 'white'}}>
                    Pending Recommendations
                  </h2>
                  {recommendationArray.map((recommendation) => (
                    <Card key={recommendation.recommendationId} style={{margin: "1em"}}>
                      <Card.Header>
                        <Card.Title>
                          {recommendation.firstName +
                            ' ' +
                            recommendation.lastName}
                        </Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {recommendation.recommendationText}
                        </Card.Text>
                        <Card.Text>
                          Approved: {recommendation.approved ? 'Yes' : 'No'}
                          <div>
                          <Button type="button" onClick={handleRecApproval} style={{margin: ".5rem", backgroundColor: "green"}} data-id={recommendation.recommendationId}><FontAwesomeIcon icon={faCheck}/></Button>
                          <Button type="button" onClick={handleRecDelete}  style={{margin: ".5rem", backgroundColor: "red"}}><FontAwesomeIcon icon={faTrash}/></Button>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default Admin;
