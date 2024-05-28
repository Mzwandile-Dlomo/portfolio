import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Landing from './components/sections/Landing';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Philosophy from './components/sections/Philosophy';

const AppContainer = styled.div`
  min-height: 100vh;
  // background-color: #132a13;
  background-color: #000;
  margin-left: auto;
  margin-right: auto;
  position: relative;
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

const HalfHeightScreenSection = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: white;
`;

// const Circle = styled.div`
//   position: absolute;
//   width: 50px;
//   height: 50px;
//   background-color: rgba(255, 255, 255, 0.5);
//   border-radius: 50%;
//   pointer-events: none; /* This makes sure the circle doesn't block any mouse interactions */
//   transform: translate(-50%, -50%);
//   transition: transform 0.1s ease-out;
// `;

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   const handleMouseMove = (event) => {
  //     setMousePosition({ x: event.clientX, y: event.clientY });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  return (
    <AppContainer>
      <Navbar 
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        contactRef={contactRef}/>
      <MainContainer>
        <FlexContainer>
          <LandingSection>
            <Landing />
          </LandingSection>
          <div className="lg:w-1/2 bg-[#]">
            <FullScreenSection id="about" ref={aboutRef} bgColor="#173417">
              <About />
            </FullScreenSection>
            <HalfHeightScreenSection>
              <Philosophy/>
            </HalfHeightScreenSection>
            <FullScreenSection id="projects" ref={projectsRef} bgColor="#132b13">
              <h1>PROJECTS PAGE</h1>
              {/* <Projects/> */}
            </FullScreenSection>
            <HalfHeightScreenSection>
              Hello, friend!
            </HalfHeightScreenSection>
            <FullScreenSection id="contact" ref={contactRef} bgColor="#173417">
              <Contact/>
            </FullScreenSection>
          </div>
        </FlexContainer>
      </MainContainer>
      {/* <Circle style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} /> */}
    </AppContainer>
  );
}

export default App;
