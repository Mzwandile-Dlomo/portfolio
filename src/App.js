import './App.css';
import  Navbar  from './components/Navbar';
import styled from 'styled-components';
import { useRef, useEffect, useState } from 'react';



const AppContainer = styled.div`
  min-height: 100vh;         /* Equivalent to min-h-screen */
  background-color: #132a13; /* Equivalent to bg-[#132a13] */
  margin-left: auto;
  margin-right: auto;
`;

const MainContainer = styled.div`
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


function App() {
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  

  return (
    <AppContainer>
      <Navbar/>
      <MainContainer>
        <h1>Hello, world!</h1>
      </MainContainer>
    </AppContainer>
  );
}

export default App;
