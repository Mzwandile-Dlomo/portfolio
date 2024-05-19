import './App.css';
import  Navbar  from './components/Navbar';
import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';




const AppContainer = styled.div`
  min-height: 100vh;         /* Equivalent to min-h-screen */
  background-color: #132a13; /* Equivalent to bg-[#132a13] */
  margin-left: auto;
  margin-right: auto;
`;

const MainWrapperContainer = styled.div`
  background-color: #fff;
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

const LandingSection = styled.div`
  @media (min-width: 1024px) {
    position: sticky; /* lg:sticky */
    top: 0; /* lg:top-0 */
    display: flex; /* lg:flex */
    height: 100vh; /* lg:h-screen */
    width: 50%; /* lg:w-1/2 */
    flex-direction: column; /* lg:flex-col */
    justify-content: space-between; /* lg:justify-between */
    padding-top: 0; /* lg:py-0 */
    padding-bottom: 0; /* lg:py-0 */
  }
`;

const CenteredContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex; /* flex */
  justify-content: center; /* justify-center */
  align-items: center; /* items-center */
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
      {/* <MainWrapperContainer>
        <MainContainer>

        </MainContainer>
      </MainWrapperContainer> */}
    </AppContainer>
  );
}

export default App;
