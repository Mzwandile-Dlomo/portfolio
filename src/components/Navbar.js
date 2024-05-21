import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// Import Roboto and Poppins fonts
import '@fontsource/roboto'; 
import '@fontsource/poppins';


const Wrapper = styled.div`
  height: 4rem;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

`;


const Nav = styled.nav`
  height: 100%;
  width: 100%;
  max-width: 1024px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const MenuContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 4rem; /* Adjust the top position as needed */
  height: calc(100vh - 4rem); /* Adjust the height as needed */
  background-color: black;
  z-index: 50;
  transition: transform 0.3s ease-in-out;
  ${(props) =>
    props.isMenuOpen &&
    css`
      transform: translateX(0);
    `}
  ${(props) =>
    !props.isMenuOpen &&
    css`
      transform: translateX(-100%);
    `}
`;

const NavBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
`;

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    height: 100%;
    overflow-y: auto;
  }
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  color: #ecf39e;
  text-decoration: none;
  padding: 0.5rem 1rem; /* py-2 px-4 */
  border-radius: 0.25rem; /* rounded-md */
  transition: all 0.3s ease-in-out;
  font-family: 'Roboto', sans-serif;

  &:hover {
    color: #3b82f6; /* hover:text-blue-300 */
    transform: scale(1.05); /* hover:scale-105 */
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffd700;
  }

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

const Toggle = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  z-index: 51;

  @media (max-width: 768px) {
    display: block;
  }
`;

const IconBar = styled.span`
  display: block;
  width: 22px;
  height: 2px;
  background-color: #fff;
  margin-bottom: 4px;
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <Nav>
        <NavBrand>
          <NavLink to="#">MJ</NavLink>
        </NavBrand>
        <Toggle onClick={toggleMenu}>
          <IconBar />
          <IconBar />
          <IconBar />
        </Toggle>
        <MenuContainer isMenuOpen={isMenuOpen}>
          <NavItems isOpen={isMenuOpen}>
            <NavItem>
              <NavLink to="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#">Contact</NavLink>
            </NavItem>
          </NavItems>
        </MenuContainer>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;