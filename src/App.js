import './App.css';
import  Navbar  from './components/Navbar';
import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Landing from './components/sections/Landing'
import About from './components/sections/About'
import Projects from './components/sections/Projects';


const AppContainer = styled.div`
  min-height: 100vh;         /* Equivalent to min-h-screen */
  background-color: #132a13; /* Equivalent to bg-[#132a13] */
  margin-left: auto;
  margin-right: auto;
`;

const WrapperContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0;
  padding-bottom: 0;
  font-family: sans-serif;

  @media (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 0;
    padding-bottom: 0;
  }

  @media (min-width: 1024px) {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const MainContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex; /* lg:flex */
    justify-content: space-between; /* lg:justify-between */
    gap: 1rem; /* lg:gap-4 */
    min-height: 100vh; /* lg:min-h-screen */
  }
`;

const Left = styled.div`
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

const Right = styled.div`
  height: 100vh;

  @media (min-width: 1024px) {
    width: 50%;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const RightSectionWrapper = styled.div`
  border-radius: 0.375rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenteredContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex; /* flex */
  justify-content: center; /* justify-center */
  align-items: center; /* items-center */
`;

// 
const Container = styled.div`
  margin: 0 auto;
  max-width: 100vw;

  @media (min-width: 640px) {
    padding: 0 3rem;
  }

  @media (min-width: 768px) {
    padding: 0 3rem;
  }

  @media (min-width: 1024px) {
    padding: 0 3rem;
  }
`;

const Layout = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    min-height: 100vh;
  }
`;

const LeftContainer = styled.div`
  @media (min-width: 1024px) {
    position: sticky;
    top: 0;
    display: flex;
    height: 100vh;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
  }
`;

const CenteredContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <AppContainer>
      <Navbar/>
      <Container>
        <Layout>
          <LeftContainer>
            <Landing/>
          </LeftContainer>
          <Right>
            <RightSectionWrapper>
              <About/>
            </RightSectionWrapper>
            <RightSectionWrapper>
              <Projects/>
            </RightSectionWrapper>
          </Right>
        </Layout>
      </Container>
    </AppContainer>
  );
}

export default App;
