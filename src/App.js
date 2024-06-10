// import React, { useRef, useEffect, useState } from 'react';
// import styled from 'styled-components';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Navbar from './components/Navbar';
// import Landing from './components/sections/Landing';
// import About from './components/sections/About';
// import Projects from './components/sections/Projects';
// import Contact from './components/sections/Contact';
// import Philosophy from './components/sections/Philosophy';
// import Waves from './components/sections/Waves';

// gsap.registerPlugin(ScrollTrigger);

// const AppContainer = styled.div`
//   min-height: 100vh;
//   background-color: #000;
//   margin-left: auto;
//   margin-right: auto;
//   position: relative;
// `;

// const MainContainer = styled.div`
//   max-width: 100%;
//   padding: 0 1.5rem;
//   font-family: sans-serif;
//   margin-left: auto;
//   margin-right: auto;

//   @media (min-width: 768px) {
//     padding: 0 3rem;
//   }

//   @media (min-width: 1024px) {
//     padding: 0 3rem;
//   }
// `;

// const FlexContainer = styled.div`
//   @media (min-width: 1024px) {
//     display: flex;
//     justify-content: space-between;
//     gap: 1rem;
//     min-height: 100vh;
//   }
// `;

// const LandingSection = styled.div`
//   @media (min-width: 1024px) {
//     position: sticky;
//     top: 0;
//     display: flex;
//     height: 100vh;
//     width: 50%;
//     flex-direction: column;
//     justify-content: space-between;
//     padding-top: 0;
//     padding-bottom: 0;
//   }
// `;

// const FullScreenSection = styled.section`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.bgColor};
//   padding-top: 4rem;
//   border-radius: 1rem;
// `;

// const HalfHeightScreenSection = styled.section`
//   width: 100%;
//   height: 60vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #000;
//   color: white;
// `;

// const Circle = styled.div`
//   position: fixed;
//   width: 50px;
//   height: 50px;
//   background-color: rgba(255, 255, 255, 0.5);
//   border-radius: 50%;
//   pointer-events: none;
//   transform: translate(-50%, -50%);
//   transition: transform 0.1s ease-out;
// `;

// function App() {
//   const aboutRef = useRef(null);
//   const projectsRef = useRef(null);
//   const contactRef = useRef(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setMousePosition({ x: event.clientX, y: event.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     const sections = gsap.utils.toArray('.reveal-section');

//     sections.forEach((section) => {
//       gsap.fromTo(
//         section,
//         { opacity: 0, y: 20 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           scrollTrigger: {
//             trigger: section,
//             start: 'top 80%',
//             end: 'bottom 20%',
//             toggleActions: 'play none none reverse',
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <AppContainer>
//       <Navbar 
//         aboutRef={aboutRef}
//         projectsRef={projectsRef}
//         contactRef={contactRef}/>
//       <MainContainer>
//         <FlexContainer>
//           <LandingSection>
//             <Landing />
//           </LandingSection>
//           <div className="lg:w-1/2 bg-[#]">
//             <FullScreenSection className="reveal-section" id="about" ref={aboutRef} bgColor="#173417">
//               <About />
//             </FullScreenSection>
//             <HalfHeightScreenSection className="reveal-section">
//               <Philosophy />
//             </HalfHeightScreenSection>
//             <HalfHeightScreenSection className="reveal-section" id="projects" ref={projectsRef} bgColor="#132b13">
//               <Projects />
//             </HalfHeightScreenSection>
//             <HalfHeightScreenSection className="reveal-section">
//               <Waves />
//             </HalfHeightScreenSection>
//             <FullScreenSection className="reveal-section" id="contact" ref={contactRef} bgColor="#000">
//               <Contact />
//             </FullScreenSection>
//           </div>
//         </FlexContainer>
//       </MainContainer>
//       <Circle style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} /> 
//     </AppContainer>
//   );
// }

// export default App;



import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Landing from './components/sections/Landing';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Philosophy from './components/sections/Philosophy';
import Waves from './components/sections/Waves';

gsap.registerPlugin(ScrollTrigger);

const AppContainer = styled.div`
  min-height: 100vh;
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

const Section = styled.section`
  width: 100%;
  height: ${(props) => (props.fullHeight ? '100vh' : '60vh')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor || '#000'};
  padding-top: 4rem;
  border-radius: 1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Circle = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
`;

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

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const sections = gsap.utils.toArray('.reveal-section');

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            onEnter: () => section.classList.add('visible'),
            onLeaveBack: () => section.classList.remove('visible'),
          },
        }
      );
    });
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
            <Landing />
          </LandingSection>
          <div className="lg:w-1/2">
            <Section className="reveal-section" id="about" ref={aboutRef} bgColor="#173417" fullHeight>
              <About />
            </Section>
            <Section className="reveal-section" fullHeight={false}>
              <Philosophy />
            </Section>
            <Section className="reveal-section" id="projects" ref={projectsRef} bgColor="#132b13" fullHeight={false}>
              <Projects />
            </Section>
            <Section className="reveal-section" fullHeight={false}>
              <Waves />
            </Section>
            <Section className="reveal-section" id="contact" ref={contactRef} bgColor="#000" fullHeight>
              <Contact />
            </Section>
          </div>
        </FlexContainer>
      </MainContainer>
      <Circle style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} /> 
    </AppContainer>
  );
}

export default App;
