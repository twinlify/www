// -----------------------------------------------------------------------------

import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {useHistory} from 'react-router';
import {device} from '../style/breakpoints';
import {grayishWhite, lightGray, primaryBlue, darkBlue} from '../style/colors';
import Hamburger from './hamburger';
import Solutions from './solutions';

// -----------------------------------------------------------------------------

const $Header = styled.header`
  z-index: 100;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: ${grayishWhite};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${lightGray};
`;

const $Nav = styled.nav`
  height: 100%;
  width: 100%;
  max-width: 1232px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const $LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  margin-left: 20px;
  cursor: pointer;
`;

const $LogoSquare = styled.img`
  width:80px;
`;

const $Twinlify = styled.h1`
  display: none;
  margin-block-start: 0em;
  margin-block-end: 0em;
  font-weight: 500;
  font-size: 2.7rem;
  color: ${primaryBlue};
  margin-left: 5px;
  padding-top: 33px;
  @media ${device.mobileL} {
    display: block;
  }
`;

const $Links = styled.ul`
  display: none;
  font-size: 1.3rem;
  list-style: none;
  padding-inline-start: 0px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-right: 20px;
  color: ${primaryBlue};


  @media ${device.laptop} {
    display: flex;
  }
`;

const $LinksMobile = styled.ul`
  list-style: none;
  position: absolute;
  top: 100px;
  padding-inline-start: 0px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  background: ${lightGray};
  @media ${device.laptop} {
    display: none;
  }
  transform: translate(100%, 0);
  transition: transform 0.3s ease-in-out;
  ${props =>
    props.isOpen &&
    css`
      transform: translate(0, 0);
    `}
`;

const $LinkWrapper = styled.div`
  position: relative;
`;

const $Link = styled.li`
  cursor: pointer;
  font-size: 1.5rem;
  width: 100vw;
  margin: 20px 0;

  &:hover {
    color: ${darkBlue};
  }

  @media ${device.laptop} {
    margin: unset;
    font-size: 1.3rem;
    width: unset;
    padding: 12px 15px;
  }
`;

// -----------------------------------------------------------------------------

const Header = () => {
  const history = useHistory();

  const openHome = () => {
    history.push('/');
    setIsOpen(false);
  };

  const openSolutions = () => {
    history.push('/solutions');
    setIsOpen(false);
  };

  const openDemo = () => {
    history.push('/demo');
    setIsOpen(false);
  };

  const openAboutUs = () => {
    history.push('/about-us');
    setIsOpen(false);
  };

  const openContact = () => {
    history.push('/contact');
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isVisibleSolutions, setIsVisibleSolutions] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const hoverIn = () => {
    setIsVisibleSolutions(true);
  }

  const hoverOut = () => {
    setIsVisibleSolutions(false);
  }

  return (
    <$Header>
      <$Nav>
        <$LogoWrapper onClick={openHome}>
          <$LogoSquare src="https://static.twinlify.com/logos/logo-square.svg" />
          <$Twinlify>TWINLIFY</$Twinlify>
        </$LogoWrapper>
        <Hamburger onClick={handleClick} isOpen={isOpen} />
        <$Links isOpen={isOpen}>
          <$Link onClick={openHome}>Home</$Link>
          <$LinkWrapper onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
            <$Link onClick={openSolutions}>Solutions</$Link>
            <Solutions isVisibleSolutions={isVisibleSolutions}/>
          </$LinkWrapper>
          <$Link onClick={openDemo}>Demo</$Link>
          <$Link onClick={openAboutUs}>About us</$Link>
          <$Link onClick={openContact}>Contact</$Link>
        </$Links>
        <$LinksMobile isOpen={isOpen}>
          <$Link onClick={openHome}>Home</$Link>
          <$Link onClick={openSolutions}>Solutions</$Link>
          <$Link onClick={openDemo}>Demo</$Link>
          <$Link onClick={openAboutUs}>About us</$Link>
          <$Link onClick={openContact}>Contact</$Link>
        </$LinksMobile>
      </$Nav>
    </$Header>
  );
};

export default Header;
