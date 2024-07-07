import { useState, useEffect } from 'react';
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
  const { loading, data } = useQuery(QUERY_USER);
  const recommendationArray = data?.user.recommendations || [];
  console.log(recommendationArray);
  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <section>
      <Row>
        <Col lg={3}>
          <MiniNav />
        </Col>
        <Col lg={8} style={{ border: '1px solid white' }}>
          <Row style={{ border: '1px solid white' }}>
            <div
              style={{ display: 'flex', flexDirection: 'row', margin: '1em' }}
            >
              <h2 style={{ color: 'white' }}>Recommendations</h2>
              <Button
                type="button"
                onClick={() => setShowModal(true)}
                style={{ width: 'fit-content', margin: '1em' }}
              >
                Add Recommendation
              </Button>
            </div>
          </Row>
          <Row style={{ border: '1px solid white', color: 'white' }}>
            {recommendationArray.length === 0 ? (
              <h1>No Recommendations Found</h1>
            ) : (
              <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                {recommendationArray.map((recommendation) => (
                  <Card key={recommendation.recommendationId} style={{width:"32em", marginBottom: "2em"}}>
                    <Card.Header>
                      <Card.Title>
                        {recommendation.firstName} {recommendation.lastName}
                      </Card.Title>
                    </Card.Header>
                    <Card.Body>{recommendation.recommendationText}</Card.Body>
                  </Card>
                ))}
              </div>
            )}
            <div style={{ display: 'flex' }}></div>
          </Row>
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
          {/* <div style={{ display: 'flex', justifyContent: 'space-around' }}>
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
          </div> */}
        </Col>
      </Row>
    </section>
  );
};

export default RecommendationPage;
