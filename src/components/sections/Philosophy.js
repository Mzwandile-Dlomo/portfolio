import styled from 'styled-components';
import '@fontsource/caveat';

const Container = styled.div`
  width: 100%;
  height: 50vh;
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
const Philosophy = () => {
  return (
    <Container>
        <Title>Philosophy</Title>
    </Container>
  )
}

export default Philosophy