import {useState} from "react"
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';

import MiniNav from '../../components/MiniNav';
import RecommendationForm from '../../components/RecommendationForm';

const RecommendationPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { data } = useQuery(QUERY_USER);
  const unfilteredRecommendationArray = data?.user.recommendations || [];
  const filteredRecommendationArray = unfilteredRecommendationArray.filter(rec => rec.approved === true)
 
  return (
    <section>
      <Row>
        <Col lg={3}>
          <MiniNav />
        </Col>
        <Col lg={8}>
          <div style={{ display: 'flex', flexDirection: 'row', margin: '1em' }}>
            <h2 style={{ color: 'white' }}>Recommendations</h2>
            <Button
              type="button"
              onClick={() => setShowModal(true)}
              style={{ width: 'fit-content', margin: '1em' }}
            >
              Add Recommendation
            </Button>
          </div>
          <Modal
            size="lg"
            show={showModal}
            onHide={() => setShowModal(false)}
            aria-labelledby="recommendation-modal"
          >
            <Tab.Container defaultActiveKey="recommendation">
              <Modal.Header closeButton>
                <Modal.Title id="recommendation-modal">
                  Recommendation Form
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Tab.Content>
                  <Tab.Pane eventKey="recommendation">
                    <RecommendationForm
                      handleModalClose={() => setShowModal(false)}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Modal.Body>
            </Tab.Container>
          </Modal>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {filteredRecommendationArray.map((recommendation) => (
              <Card
                key={recommendation.recommendationId}
                style={{ width: '36em', height: 'fit-content' }}
              >
                <Card.Header id={recommendation.relationship}>
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
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default RecommendationPage;
