import styled from 'styled-components';
import '@fontsource/caveat';

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const Title = styled.h1`
//   font-family: 'Nunito', 'Montserrat', sans-serif;
  font-size: 1.9rem;
  text-align: center;
  font-weight: 600;
//   line-height: 1.2;
  color: #9BCF53;
//   margin: 20px 0;
//   text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
//   perspective: 1000px;
  cursor: pointer;

`;

const Subtitle = styled.h2`
  margin-top: 0.75rem;
  text-align: center;
  font-size: 1.125rem;
  font-weight: medium;
  color: #69b25b;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const Emphasis = styled.span`
  font-family: 'Caveat', cursive;
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding-right: 5px;

  &:hover{
    color: #9BCF53;
    // background-color: red;
  }
`;


const Philosophy = () => {
  return (
    <Container>
        <Title><Emphasis>My Life Philosophy</Emphasis></Title>
        <Subtitle>Dedicated to creating a more open, secure, and connected world through innovative software solutions.</Subtitle>
    </Container>
  )
}

export default Philosophy