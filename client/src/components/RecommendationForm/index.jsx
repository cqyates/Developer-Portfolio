import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const RecommendationForm = () => {
  const [recForm, setRecForm] = useState({
    relationship: '',
    firstName: '',
    lastName: '',
    currentRole: '',
    currentCompany: '',
    recommendationText: '',
    github: '',
    featuredProject: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecForm({ ...recForm, [name]: value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(recForm)
  }
  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group>
        <Form.Label>My Relationship to Corey: </Form.Label>
        <Form.Select onChange={handleInputChange} name="relationship">
          <option value="coworker">Co-Worker</option>
          <option value="supervisor">Former Supervisor</option>
          <option value="student">Former Student</option>
          <option value="client">Client</option>
        </Form.Select>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="first_name">First Name:</Form.Label>
        <Form.Control
          type="text"
          onChange={handleInputChange}
          value={recForm.firstName}
          name="firstName"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="last_name">Last Name: </Form.Label>
        <Form.Control
          type="text"
          onChange={handleInputChange}
          value={recForm.lastName}
          name="lastName"
        />
      </Form.Group>
      {recForm.relationship === 'student' ? (
        <>
          <Form.Group>
            <Form.Label htmlFor="currentRole">Current Role:</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              value={recForm.currentRole}
              name="currentRole"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="company">Current Company:</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              value={recForm.currentCompany}
              name="currentCompany"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="github">Github:</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              value={recForm.github}
              name="github"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="featured_project">
              Featured Project:
            </Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              value={recForm.featuredProject}
              name="featuredProject"
            />
          </Form.Group>
        </>
      ) : (
        <></>
      )}
      {recForm.relationship === 'supervisor' ? (
        <>
          <Form.Group>
            <Form.Label htmlFor="company">Company:</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              value={recForm.currentCompany}
              name="currentCompany"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="currentRole">Role:</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              value={recForm.currentRole}
              name="currentRole"
            />
          </Form.Group>
        </>
      ) : (
        <></>
      )}
      {recForm.relationship === 'client' ? (
        <>
          <Form.Group>
            <Form.Label htmlFor="company">Company:</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              value={recForm.currentCompany}
              name="currentCompany"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="github">Website:</Form.Label>
            <Form.Control
              type="text"
              onChange={handleInputChange}
              value={recForm.website}
              name="website"
            />
          </Form.Group>
        </>
      ) : (
        <></>
      )}
      <Form.Group>
        <Form.Label htmlFor="recommendation">Recommendation:</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          onChange={handleInputChange}
          value={recForm.recommendationText}
          name="recommendationText"
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
export default RecommendationForm;
