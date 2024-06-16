import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import {useMutation} from "@apollo/client"
import {SEND_MESSAGE} from "../../utils/mutations"
const ContactForm = () => {

  const [contactForm, setContactForm] = useState({
    contactName: '',
    contactEmail: '',
    message: '',
    submitted: false,
    received: false,
    read: false,
    responded: false,
    jobLead: false,
    studentLead: false,
    consultingLead: false
  });
  const [sendMessage, { error }] = useMutation(SEND_MESSAGE)

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

  const handleContactForm = async (e) => {
    e.preventDefault();
    console.log(contactForm)
    //create mutation for contact form and connect to back end.
    try {
      const { data } = await sendMessage({
        variables: { messageData: { ...contactForm } },
      });
      console.log(data);
      console.log("success")
      window.location.href = "/"
      
    } catch (err) {
      console.error(err);
      console.log(error)
    }

 
    //change screen to success message or icon.
  };
  return (
    <div style={{backgroundColor: "white"}}>
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
       label="I want to discuss a job opportunity"
       >

      </Form.Check>
      <Form.Check
       type="switch"
       id="student-lead"
       name='studentLead'
       value={contactForm.studentLead}
       onChange={handleInputChange}
       label="I want to book a tutoring session"
       >

      </Form.Check>
      <Form.Check
       type="switch"
       id="consulting-lead"
       name='consultingLead'
       value={contactForm.consultingLead}
       onChange={handleInputChange}
       label="I want to discuss web design and ecommerce consulting"
       >

      </Form.Check>
      </Form.Group>
      <Button className="mb-3" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
};

export default ContactForm;
