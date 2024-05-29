import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import '@fontsource/caveat';

createGlobalStyle`
/* Importing Montserrat font */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  /* Importing Roboto font */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  /* Importing Open Sans font */
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

  /* Importing Lato font */
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

  /* Importing Nunito font */
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

  /* Importing Source Sans Pro font */
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');

  /* Importing Poppins font */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  /* Importing Playfair Display font */
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

  /* Importing Quicksand font */
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;


const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
`;

const ResumeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  @media (min-width: 1025px) {
    display: none;
  }
`;

const Emphasis = styled.span`
  font-family: 'Caveat', cursive;
  font-size: 24px;
  font-weight: bold;
  color: black;
  padding-right: 5px;

  &:hover{
    color: #9BCF53;
    // background-color: red;
  }
`;

const ResumeButton = styled.a`
  display: block;
  text-decoration: none;
  color: black;
  background-color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: #69b25b;
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  font-family: 'Nunito', 'Montserrat', sans-serif;
  font-size: 2.5rem;
  text-align: center;
  font-weight: 700;
  line-height: 1.2;
  color: #9BCF53;
  margin: 20px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  perspective: 1000px;
  cursor: pointer;

  @media (min-width: 640px) {
    font-size: 3.125rem;
  }

  &:hover {
    color: #76885B;
    transform: scale(1.05);

    span {
      display: inline-block;
      animation: growAndShift 0.5s ease-in-out both;
      animation-delay: calc(var(--char-index) * 0.05s);
      color: #9BCF53;
    }
  }

  @keyframes growAndShift {
    0% {
      transform: rotateX(0) rotateY(0) scale(1);
    }
    50% {
      transform: rotateX(20deg) rotateY(20deg) scale(1.2);
    }
    100% {
      transform: rotateX(0) rotateY(0) scale(1);
    }
  }

  span {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .space {
    margin-right: 0.2em;
  }

  .surname{
    color: #76885B;
    display: inline-block;
  }
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

const Description = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: #F0EFEB;
  line-height: 1.5;

  br {
    display: none;

    @media (min-width: 640px) {
      display: initial;
    }
  }
`;

const Nav = styled.nav`
  ul {
    li {
      margin: 0 1rem;

      a {
        padding: 0.5rem 1rem;
        transition: all 0.3s ease;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.05em;

        &.active {
          color: #fff;
        }
      }
    }
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  color: ${({ active, activeColor }) =>
    active ? activeColor : '#B7B7A4'};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ activeColor }) => activeColor};
  }
`;

const NavIndicator = styled.span`
  margin-right: 1rem;
  height: 2px;
  width: ${({ active }) => (active ? '32px' : '10px')};
  background-color: #9BCF53;
  transition: width 0.3s ease;
  transform: translateX(-0%);
`;

const NavText = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;


const SocialMediaList = styled.ul`
  margin-left: 0.25rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const SocialMediaListItem = styled.li`
  margin-right: 1.25rem;
  font-size: 0.75rem;
  flex-shrink: 0;
`;

const SocialMediaLink = styled(Link)`
  display: block;
  color: inherit;

  &:hover {
    color: #ffd700;
  }
`;

const SocialMediaIcon = styled.div`
  font-size: 1.5rem;
  height: 1.5rem;
  width: 1.5rem;
  color: inherit;
`;


const Landing = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  const text = 'Mzwandile';

  return (
    <Container>
      <InnerContainer>
        <div>
          <Title>
            {text.split('').map((char, index) => (
              <span key={index} style={{ '--char-index': index }}>
                {char}
              </span>
            ))}
            <span className="space"></span>
            <h1 className='surname'>Dlomo</h1>
            <h1 className='surname'><Emphasis>.</Emphasis></h1>
          </Title>
          <Subtitle>Software Engineer</Subtitle>
          <Description>
            With logic and creativity intertwined,<br />
            I bring visions to life, line by line.
          </Description>

          <Nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              <li>
                <NavLink
                  className="group flex items-center py-3 nav-link"
                  href="#about"
                  active={activeSection === 'about'}
                  activeColor="#9BCF53"
                >
                  <NavIndicator active={activeSection === 'about'} />
                  <NavText>About</NavText>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="group flex items-center py-3 nav-link"
                  href="#projects"
                  active={activeSection === 'projects'}
                  activeColor="#9BCF53"
                >
                  <NavIndicator active={activeSection === 'projects'} />
                  <NavText>Projects</NavText>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="group flex items-center py-3 nav-link"
                  href="#contact"
                  active={activeSection === 'contact'}
                  activeColor="#9BCF53"
                >
                  <NavIndicator active={activeSection === 'contact'} />
                  <NavText>Contact</NavText>
                </NavLink>
              </li>
            </ul>
          </Nav>
        </div>

        <SocialMediaList>
            <SocialMediaListItem>
              <SocialMediaLink href="https://github.com/Mzwandile-Dlomo" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon>
                  <FaGithub />
                </SocialMediaIcon>
              </SocialMediaLink>
            </SocialMediaListItem>
            <SocialMediaListItem>
              <SocialMediaLink href="https://www.linkedin.com/in/mzwandile-dlomo/" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon>
                  <FaLinkedin />
                </SocialMediaIcon>
              </SocialMediaLink>
            </SocialMediaListItem>
            <SocialMediaListItem>
              <SocialMediaLink href="https://www.instagram.com/__mjdlomo" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon>
                  <FaInstagram />
                </SocialMediaIcon>
              </SocialMediaLink>
            </SocialMediaListItem>
            <SocialMediaListItem>
              <SocialMediaLink href="https://twitter.com/worldmjdlomo" target="_blank" rel="noopener noreferrer">
                <SocialMediaIcon>
                  <FaTwitter />
                </SocialMediaIcon>
              </SocialMediaLink>
            </SocialMediaListItem>
          </SocialMediaList>
          <ResumeButtonContainer>
            <ResumeButton href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resumé
            </ResumeButton>
          </ResumeButtonContainer>
       </InnerContainer>
    </Container>
  );
};

export default Landing;