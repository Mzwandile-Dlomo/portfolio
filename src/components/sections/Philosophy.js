import styled from 'styled-components';
import '@fontsource/caveat';

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem;
`;


const Title = styled.h1`
  font-family: 'Nunito', 'Montserrat', sans-serif;
  font-size: 1.2rem;
  text-align: center;
  font-weight: 600;
  color: #D1D8C5;
  margin: 20px 0;
  cursor: pointer;

`;

const Subtitle = styled.h3`
  margin-top: 0.75rem;
  text-align: center;
  font-size: 0.4rem;
  font-weight: medium;
  color: #D1D8C5;

  @media (min-width: 640px) {
    font-size: 1.05rem;
  }
`;

const Emphasis = styled.span`
  font-family: 'Caveat', cursive;
  font-weight: bold;
  padding-right: 5px;
  perspective: 1000px;

  &:hover{
    color: #9BCF53;
  }
`;


const First = styled.span`
  font-family: 'Caveat', 'sans';
  font-weight: bold;
  color: green;
  padding-right: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  perspective: 1000px;

  &:hover{
    color: #9BCF53;
  }
`;

const Philosophy = () => {
  return (
    <Container>
        <Title><Emphasis>My Life Philosophy</Emphasis></Title>
        <Subtitle><First className=''>Dedicated</First> to creating a more open, secure, and connected world through innovative software solutions.</Subtitle>
    </Container>
  )
}

export default Philosophy