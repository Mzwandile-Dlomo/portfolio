import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  padding-top: 4rem;
  background-color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const FormContainer = styled.div`
  max-width: 30rem;
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #132a13;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;
`;

const StyledInput = styled.input`
  width: 100%;
  border-bottom: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
  color: #000;
  background-color: transparent;
  outline: none;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
  color: #000;
  background-color: transparent;
  outline: none;
  resize: none;
`;

const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: #0066ff;
  }
`;

const ResponseMessage = styled.p`
  margin-top: 1rem;
  color: #28a745;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  margin-top: 1rem;
  color: #dc3545;
  font-weight: bold;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/submit-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponse('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponse('An error occurred. Please try again later.');
      }
    } catch (error) {
      setResponse('An error occurred. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      <Header>
        <h1 style={{ color: '#fff' }}>Contact</h1>
      </Header>
      <FormContainer>
        <Title>Get in Touch</Title>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <StyledInput
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <StyledInput
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <StyledTextarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
            />
          </div>
          <SubmitButton type="submit">Send Message</SubmitButton>
        </form>
        {response && <ResponseMessage>{response}</ResponseMessage>}
      </FormContainer>
    </Container>
  );
};

export default Contact;
