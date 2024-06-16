import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MiniNav from '../../components/MiniNav';
const RecommendationPage = () => {
  const { loading, data } = useQuery(QUERY_USER);
  const recommendationArray = data?.user.recommendations || [];

  return (
    <section >
      <Row>
        <Col lg={3}>
          <MiniNav />
        </Col>
        <Col lg={8} style={{display: "flex", justifyContent: "space-around"}}>
          {recommendationArray.map((recommendation) => (
            <Card key={recommendation._id} style={{width: "36em", height: "fit-content"}}>
              <Card.Header>
                <Card.Title>
                  {recommendation.firstName + ' ' + recommendation.lastName}
                </Card.Title>
                <Card.Subtitle>{recommendation.relationship}</Card.Subtitle>
              </Card.Header>
              <Card.Body>
                <Card.Text>{recommendation.recommendationText}</Card.Text>
                {recommendation.relationship === 'former student' ? (
                  <Card.Subtitle>Github</Card.Subtitle>
                ) : (
                  <Card.Subtitle>Current Company</Card.Subtitle>
                )}
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </section>
  );
};

export default RecommendationPage;
