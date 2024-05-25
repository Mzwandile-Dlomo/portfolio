import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  @media (max-width: 600px) {
    padding: 0.5rem;
  }

  @media (max-width: 900px) {
    padding: 0.7rem;
  }
  @media (max-width: 1200px) {
    padding: 1rem;
  }
`;

const Header = styled.div`
  padding-top: 4rem;
  background-color: #000;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  text-align: center;

  @media (max-width: 600px) {
    padding-top: 1.5rem;
    padding: 0.3rem;
  }

  @media (max-width: 900px) {
    padding-top: 2rem;
    padding: 0.5rem;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30rem;
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #132a13;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    margin-top: 0.5rem;
    padding: 0.6rem;
  }

  @media (max-width: 900px) {
    margin-top: 0.6rem;
    padding: 0.8rem;
  }

  @media (max-width: 1300px) {
    margin-top: 0.7rem;
    padding: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #fff;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 13000px) {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border-bottom: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
  color: #69b25b;
  background-color: transparent;
  outline: none;

  &:focus {
    border-color: #69b25b;
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 900px) {
    padding: 0.7rem;
    margin-bottom: 0.85rem;
  }

  
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
  color: #69b25b;
  background-color: transparent;
  outline: none;
  resize: none;

  &:focus {
    border-color: #69b25b;
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
    margin-bottom: 0.75rem;
  }

  @media (max-width: 900px) {
    padding: 0.7rem;
    margin-bottom: 1rem;
  }
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
    background-color: #69b25b;
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
  }

  @media (max-width: 900px) {
    padding: 0.7rem;
  }
`;

const ResponseMessage = styled.p`
  margin-top: 1rem;
  color: #28a745;
  font-weight: bold;

  @media (max-width: 600px) {
    margin-top: 0.5rem;
  }
`;

const ErrorMessage = styled.p`
  margin-top: 1rem;
  color: #dc3545;
  font-weight: bold;

  @media (max-width: 600px) {
    margin-top: 0.5rem;
  }
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
        <h1 className='text-white'>Contact</h1>
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
