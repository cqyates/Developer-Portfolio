import { useState } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Auth from '../../utils/auth';
import './style.css';

const RecommendationPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { loading, data } = useQuery(QUERY_USER);
  //this starts the component as an empty array until you refresh the page
  //figure out which hook is the best to load the array on componnent load.
  const recommendationArray = data?.user.recommendations || [];
  
  if (loading) {
    return <h1>loading</h1>;
  }
  const handleRecDelete = (event) => {
    console.log(event.target.value)
  }

  return (
    <section>
      <Row>
        <Col lg={3}>
          <MiniNav />
        </Col>
        <Col lg={8}>
          <Row>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '1em',
              }}
            >
              <h1 style={{ color: 'white', margin: '0 auto' }}>
                Recommendations
              </h1>
              <Button
                type="button"
                onClick={() => setShowModal(true)}
                style={{
                  width: 'fit-content',
                  margin: '1em auto',
                  backgroundColor: 'rgb(150,174,125)',
                  padding: '1rem',
                }}
              >
                <h6 style={{ fontSize: '14pt' }}>Add Your Recommendation</h6>
              </Button>
            </div>
          </Row>
          <Row style={{ color: 'white' }}>
            {recommendationArray.length === 0 ? (
              <h1>No Recommendations Found</h1>
            ) : (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                }}
              >
                {recommendationArray.map((recommendation) => (
                  <Card
                    key={recommendation.recommendationId}
                    style={{
                      width: '52rem',
                      marginBottom: '2em',
                      height: 'fit-content',
                    }}
                  >
                    <Card.Body>
                      <Card.Header
                        id={recommendation.relationship}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '1rem',
                          marginBottom: '1.25rem',
                        }}
                      >
                        <div style={{ textAlign: 'left' }}>
                          <Card.Title style={{ fontSize: '18pt' }}>
                            {recommendation.firstName} {recommendation.lastName}
                          </Card.Title>
                          <Card.Subtitle style={{ fontSize: '16pt' }}>
                            {recommendation.currentRole} at{' '}
                            {recommendation.currentCompany}
                          </Card.Subtitle>
                        </div>
                        <Card.Subtitle style={{ fontSize: '16pt' }}>
                          {recommendation.relationship}
                        </Card.Subtitle>
                      </Card.Header>
                      <Card.Text
                        style={{ textAlign: 'left', fontSize: '14pt' }}
                      >
                        {recommendation.recommendationText}
                      </Card.Text>
                    </Card.Body>
                    {Auth.loggedIn() ? (
                     
                         <Button type="button" onClick={handleRecDelete} value={recommendation._id} style={{backgroundColor: "black"}}>Delete</Button>
            
                    ) : <></>}
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
        </Col>
      </Row>
    </section>
  );
};

export default RecommendationPage;
