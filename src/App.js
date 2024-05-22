import './App.css';
import  Navbar  from './components/Navbar';
import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import Landing from './components/sections/Landing'
import About from './components/sections/About'
import Projects from './components/sections/Projects';


const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #132a13;
  margin-left: auto;
  margin-right: auto;
`;


const MainContainer = styled.div`
  max-width: 100%;
  padding: 0 1.5rem;
  font-family: sans-serif;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    padding: 0 3rem;
  }

  @media (min-width: 1024px) {
    padding: 0 3rem;
  }
`;

const FlexContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    min-height: 100vh;
  }
`;

const LandingSection = styled.div`
  @media (min-width: 1024px) {
    // position: -webkit-sticky;
    position: sticky;
    top: 0;
    display: flex;
    height: 100vh;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const FullScreenSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  padding-top: 4rem;
`;



function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  
  return (
    <AppContainer>
      <Navbar 
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}/>
      <MainContainer>
        <FlexContainer>
          <LandingSection>
            <div className="h-full w-full flex justify-center items-center">
               <Landing />
            </div>
          </LandingSection>
          <div className="lg:w-1/2 bg-[#]">
            <FullScreenSection id="about" ref={aboutRef} bgColor="#173417">
              <h1>ABOUT PAGE</h1>
            </FullScreenSection>
            <FullScreenSection id="projects" ref={projectsRef} bgColor="#132b13">
              <h1>PROJECTS PAGE</h1>
            </FullScreenSection>
            <FullScreenSection id="contact" ref={contactRef} bgColor="#173417">
              <h1>CONTACT PAGE</h1>
            </FullScreenSection>
          </div>
        </FlexContainer>
      </MainContainer>
    </AppContainer>
  );
}

export default App;
