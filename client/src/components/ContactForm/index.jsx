import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    contactName: '',
    contactEmail: '',
    message: '',
    submitted: false,
    received: false,
    read: false,
    returned: false,
    jobLead: false,
    studentLead: false,
    consultingLead: false
  });
  const handleInputChange=(e)=> {
  const {name, value} = e.target 
  setContactForm({...contactForm, [name]:value })
  if(name==="jobLead") {
   if(contactForm.jobLead === false) {
     setContactForm({...contactForm, jobLead: true})
   } else {
    setContactForm({...contactForm, jobLead: false})
   }
  }
  else if (name === "studentLead") {
    if(contactForm.studentLead === false) {
      setContactForm({...contactForm, studentLead: true})
    } else {
     setContactForm({...contactForm, studentLead: false})
    }
  }
  else if (name === "consultingLead") {
    if(contactForm.consultingLead === false) {
      setContactForm({...contactForm, consultingLead: true})
    } else {
     setContactForm({...contactForm, consultingLead: false})
    }
  }
  console.log(contactForm.consultingLead)
  }

  const handleContactForm = (e) => {
    e.preventDefault();
    console.log(contactForm)
    //create mutation for contact form and connect to back end.
    //change screen to success message or icon.
  };
  return (
    <Form onSubmit={handleContactForm}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control 
        type="text"
        onChange={handleInputChange}
        value={contactForm.contactName}
        name="contactName"
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="email">Email Address</Form.Label>
        <Form.Control 
        type="email"
        value={contactForm.contactEmail}
        onChange={handleInputChange}
        name="contactEmail"
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="message"> Message</Form.Label>
        <Form.Control 
        as="textarea" 
        type="text"
        onChange={handleInputChange}
        value={contactForm.message}
        name="message"
        ></Form.Control>
      </Form.Group>
      <Form.Group>
      <Form.Check
       type="switch"
       id="job-lead"
       name='jobLead'
       value={contactForm.jobLead}
       onChange={handleInputChange}
       label="This is about a job"
       >

      </Form.Check>
      <Form.Check
       type="switch"
       id="student-lead"
       name='studentLead'
       value={contactForm.studentLead}
       onChange={handleInputChange}
       label="This is about booking tutoring sessions"
       >

      </Form.Check>
      <Form.Check
       type="switch"
       id="consulting-lead"
       name='consultingLead'
       value={contactForm.consultingLead}
       onChange={handleInputChange}
       label="Check here if you want to discuss website design and ecommerce consulting"
       >

      </Form.Check>
      </Form.Group>
      <Button className="mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
