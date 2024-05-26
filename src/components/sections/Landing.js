import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';


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

  // @media (min-width: 421px) {
  //   display: none;
  // }
`;

// const ResumeButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 1rem;

//   @media (min-width: 1024px) {
//     display: none;
//   }
// `;

// const ResumeButton = styled.a`
//   display: none;

//   @media (min-width: 1024px) {
//     display: block;
//     text-decoration: none;
//     color: white;
//     background-color: #60a5fa;
//     padding: 0.5rem 1rem;
//     border-radius: 0.375rem;
//     transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

//     &:hover {
//       background-color: #3b82f6;
//       transform: scale(1.05);
//     }
//   }
// `;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-weight: bold;
  line-height: 1.2;
  color: #FFD700;

  @media (min-width: 640px) {
    font-size: 3.125rem;
  }

  a {
    text-decoration: none;
    color: inherit;
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
  background-color: ${({ active }) => (active ? '#000' : 'transparent')};
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

const SocialMediaLink = styled.a`
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

  return (
    <Container>
      <InnerContainer>
        <div>
          <Title>
            <a href="/" className="text-yellow-500">Mzwandile Dlomo</a>
          </Title>
          <Subtitle>Junior Software Engineer</Subtitle>
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
                  activeColor="#FFD700"
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
                  activeColor="#FFA500"
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
                  activeColor="#FF8C00"
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
              Resume
            </ResumeButton>
          </ResumeButtonContainer>
       </InnerContainer>
    </Container>
  );
};

export default Landing;