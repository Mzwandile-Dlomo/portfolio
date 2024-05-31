import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '@fontsource/caveat';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 4rem;
  background-color: #3a5a40;
`;

const Header = styled.div`
  margin-top: 1rem;
  padding-top: 3rem;
  background-color: #3a5a40;
  padding: 1rem;
  border-radius: 8px;
`;

const CardsContainer = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  position: absolute;
  width: 16rem;
  height: 12rem;
  border-radius: 8px;
  transition: all 0.5s ease-out;
  overflow: hidden;
  transform: translateX(0px) translateY(0px) perspective(905px) rotateX(0deg) rotateY(0deg) rotateZ(-8deg);
  background: ${(props) => props.background};
  left: ${(props) => props.left};
  &:hover {
    z-index: 4;
    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) !important;
  }
`;

const CardDetails = styled.div`
  width: 75%;
  height: 100%;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background: rgba(0, 0, 0, 0.8);
  transition: 0.5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);
  ${Card}:hover & {
    transform: perspective(2000px) rotateY(0deg);
  }
`;

const CardDetailsHeader = styled.div`
  font-weight: 600;
  color: #fff;
`;

const CardDetailsButton = styled(Link)`
  padding: 0.1875rem 0.375rem;
  border-radius: 25px;
  background-color: #fff;
  color: #000;
  font-weight: 600;
  text-decoration: none;
`;

const Emphasis = styled.h1`
  font-family: 'Caveat', cursive;
  font-weight: bold;
  color: white;
  padding-right: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  perspective: 1000px;

  &:hover{
    color: #9BCF53;
  }
`;

const SubText = styled.div`
  padding-top: 4rem;
  font-weight: 600;
  color: #000;
`;

const Projects = () => {
  return (
    <Container>
      <Header>
        <Emphasis>Projects</Emphasis>
      </Header>
      <div className='flex flex-col justify-center items-center'>
        <div className='pt-8'>
          <SubText>Some projects I've worked on.</SubText>
        </div>
        <CardsContainer>
          <Card background="linear-gradient(to bottom, #2f5f40, #000)" left="-10rem">
            <CardDetails>
              <CardDetailsHeader>Project 1</CardDetailsHeader>
              <CardDetailsButton to="/project1">Link to Project 1</CardDetailsButton>
            </CardDetails>
          </Card>
          <Card background="linear-gradient(to bottom, #3a5a40, #000)" left="-6.5rem">
            <CardDetails>
              <CardDetailsHeader>Project 2</CardDetailsHeader>
              <CardDetailsButton to="/project2">Link to Project 2</CardDetailsButton>
            </CardDetails>
          </Card>
          <Card background="linear-gradient(to bottom, #ffcb05, #000)" left="-5rem">
            <CardDetails>
              <CardDetailsHeader>Project 3</CardDetailsHeader>
              <CardDetailsButton to="/project3">Link to Project 3</CardDetailsButton>
            </CardDetails>
          </Card>
        </CardsContainer>
      </div>
    </Container>
  );
};

export default Projects;
