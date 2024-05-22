import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaTimes, FaBars, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';


const Header = styled.header`
  height: 4rem;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
`;

const Nav = styled.nav`
  height: 100%;
  width: 100%;
  max-width: 1024px;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  background-color: white;
  border-radius: 0.375rem;
  padding: 0.75rem;
  display: flex;
  justify-content: flex-start;
`;

const LogoLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
`;

const MenuContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 4rem;
  height: calc(100vh - 4rem);
  background-color: black;
  z-index: 50;
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? `
    animation: slideInLeft 0.3s ease-in-out;
  `
      : `
    display: none;
  `}
`;


const MenuContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
`;

const MenuList = styled(animated.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  will-change: transform, opacity;
`;

const MenuListItem = styled.li``;

const MenuLink = styled.a`
  color: #ecf39e;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    color: #60a5fa;
    transform: scale(1.05);
  }
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

const MenuToggleButton = styled(animated.button)`
  color: var(--menu-toggle-color, #ecf39e);
  transition: color 0.3s ease-in-out;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: var(--menu-toggle-hover-color, #60a5fa);
  }

  &:focus {
    outline: none;
  }
`;


const Navbar = ({ aboutRef, projectsRef, contactRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleButtonProps = useSpring({
    transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
    config: { tension: 200, friction: 20 },
  });

  const menuListProps = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
    delay: 30,
    config: { tension: 200, friction: 20 },
  });

  const socialMediaIconsProps = useSpring({
    from: { opacity: 0, y: -100 },
    to: { opacity: 1, y: 0 },
    delay: 0,
    config: { mass: 1, tension: 280, friction: 20 },
  });

  const handleScroll = (ref) => {
    const targetOffsetTop = ref.current.offsetTop;
    const currentPosition = window.pageYOffset;
    const offset = targetOffsetTop - currentPosition;

    window.scrollTo({
      top: currentPosition + offset,
      behavior: 'smooth',
    });

    setIsMenuOpen(false);
  };

  return (
    <Header>
      <Nav>
        <Logo>
          <LogoLink to="/">MJ</LogoLink>
        </Logo>
        <MenuContainer isMenuOpen={isMenuOpen}>
          <MenuContent>
            <MenuList style={menuListProps}>
              <MenuListItem>
                <MenuLink onClick={(e) => { e.preventDefault(); handleScroll(aboutRef); }}>
                  About
                </MenuLink>
              </MenuListItem>
              <MenuListItem>
                <MenuLink onClick={(e) => { e.preventDefault(); handleScroll(projectsRef); }}>
                  Projects
                </MenuLink>
              </MenuListItem>
              <MenuListItem>
                <MenuLink onClick={(e) => { e.preventDefault(); handleScroll(contactRef); }}>
                  Contact
                </MenuLink>
              </MenuListItem>
            </MenuList>
            <SocialMediaList style={socialMediaIconsProps}>
              <SocialMediaListItem>
                <SocialMediaLink href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                  <SocialMediaIcon>
                    <FaGithub />
                  </SocialMediaIcon>
                </SocialMediaLink>
              </SocialMediaListItem>
              <SocialMediaListItem>
                <SocialMediaLink href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                  <SocialMediaIcon>
                    <FaLinkedin />
                  </SocialMediaIcon>
                </SocialMediaLink>
              </SocialMediaListItem>
              <SocialMediaListItem>
                <SocialMediaLink href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer">
                  <SocialMediaIcon>
                    <FaInstagram />
                  </SocialMediaIcon>
                </SocialMediaLink>
              </SocialMediaListItem>
              <SocialMediaListItem>
                <SocialMediaLink href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
                  <SocialMediaIcon>
                    <FaTwitter />
                  </SocialMediaIcon>
                </SocialMediaLink>
              </SocialMediaListItem>
            </SocialMediaList>
          </MenuContent>
        </MenuContainer>
        <div className="flex items-center lg:hidden">
          <MenuToggleButton style={toggleButtonProps} onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="h-6 w-6 fill-current" /> : <FaBars className="h-6 w-6 fill-current" />}
          </MenuToggleButton>

        </div>
      </Nav>
    </Header>
  );
};

Navbar.propTypes = {
  aboutRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  projectsRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  contactRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default Navbar;
