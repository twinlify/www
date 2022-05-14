// -----------------------------------------------------------------------------

import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';

import {useNavigate} from 'react-router';
import {device} from './style/breakpoints';
import {lightGray, primaryBlue} from './style/colors';
import Hamburger from './components/hamburger';
import ExitButton from './components/exitButton';
import GitHubBlackLogo from './img/github-black-logo.svg';

// -----------------------------------------------------------------------------

const $Header = styled.header`
  z-index: 100;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  transition: all 0.5s;
  ${props =>
    props.isNewStyleHeader &&
    css`
      background: white;
      -webkit-box-shadow: 0px 8px 33px -11px rgba(0, 0, 0, 0.37);
      box-shadow: 0px 8px 33px -11px rgba(0, 0, 0, 0.37);
    `}
`;

const $Nav = styled.nav`
  height: 100%;
  width: 100%;
  max-width: 1232px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const $LogoWrapper = styled.div`
  margin-left: 25px;
  height: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  cursor: pointer;

  @media ${device.tablet} {
    margin-left: 125px;
    ${props =>
      props.isNewStyleHeader &&
      css`
        margin-left: 20px;
      `}
  }
`;

const $LogoSquare = styled.img`
  padding-top: 10px;
  width: 80px;
`;

const $Twinlify = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
  display: none;
  font-weight: 500;
  font-size: 2.7rem;
  color: black;
  margin-left: 5px;
  padding-top: 33px;

  @media ${device.mobileL} {
    display: block;
  }
  ${props =>
    props.isNewStyleHeader &&
    css`
      color: ${primaryBlue};
    `}
`;

const $Links = styled.ul`
  display: none;
  font-size: 1.3rem;
  list-style: none;
  padding-inline-start: 0px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-right: 20px;
  color: black;
  div {
    display: flex;
  }

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    div {
      padding-top: 40px;
    }
  }
`;

const $LinksMobile = styled.ul`
  z-index: 102;
  list-style: none;
  position: absolute;
  width: 50vw;
  height: 100vh;
  top: 0px;
  padding-top: 5rem;
  padding-inline-start: 0px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  background: rgb(221, 238, 245);
  background: linear-gradient(
    156deg,
    rgba(221, 238, 245, 1) 0%,
    rgba(198, 208, 210, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translate(200%, 0);
  transition: transform 0.3s ease-in-out;
  ${props =>
    props.isOpen &&
    css`
      transform: translate(100%, 0);
      opacity: 1;
    `}
`;

const $Link = styled.li`
  cursor: pointer;
  font-size: 1rem;
  margin: 20px 0;
  padding: 5px 0;
  &:hover {
    color: ${lightGray};
  }
  @media ${device.mobileM} {
    padding: 10px 0;
  }
  @media ${device.mobileL} {
    font-size: 1.3rem;
  }
  @media ${device.tablet} {
    font-size: 1.5rem;
    padding: 15px 0;
  }
  @media ${device.laptop} {
    margin: unset;
    font-size: 1.3rem;
    width: 100%;
    padding: 12px 7px;
  }
  @media ${device.laptopL} {
    padding: 12px 15px;
  }
`;

const $SpecialLink1 = styled($Link)`
  min-width: 13ch;
`;

const $SpecialLink2 = styled($Link)`
  min-width: 6ch;
`;

const $BlackScreen = styled.div`
  display: none;
  background: black;
  opacity: 0.5;
  min-height: 100rem;
  min-width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  ${props =>
    props.isOpen &&
    css`
      display: block;
    `}
  @media ${device.laptop} {
    display: none;
  }
`;

// -----------------------------------------------------------------------------

const Header = () => {
  const [isNewStyleHeader, setIsNewStyleHeader] = useState(false);

  useScrollPosition(({prevPos, currPos}) => {
    if (currPos.y < -20) {
      setIsNewStyleHeader(true);
    } else {
      setIsNewStyleHeader(false);
    }
  });

  const navigate = useNavigate();

  const openHome = () => {
    navigate('/');
    setIsOpen(false);
  };

  const externalLink = () => {
    setIsOpen(false);
  };

  const openContact = () => {
    navigate('/contact');
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const Links = () => (
    <div>
      <ExitButton onClick={handleClick} isOpen={isOpen} />
      <$Link onClick={openHome}>Home</$Link>
      <$SpecialLink1 onClick={externalLink}>
        <a
          href="https://docs.twinlify.com/documentation/getting-started"
          target="__new"
        >
          Getting started
        </a>
      </$SpecialLink1>
      <$Link onClick={externalLink}>
        <a href="https://docs.twinlify.com/documentation/api" target="__new">
          Documentation
        </a>
      </$Link>
      <$Link onClick={openContact}>Contact</$Link>
      <$SpecialLink2 onClick={externalLink}>
        <a href="https://app.twinlify.com" target="__new">
          Sign In
        </a>
      </$SpecialLink2>
      <$Link onClick={externalLink}>
        <a href="https://github.com/twinlify/nexus-sdk" target="__new">
          <GitHubBlackLogo />
        </a>
      </$Link>
    </div>
  );

  return (
    <$Header isNewStyleHeader={isNewStyleHeader}>
      <$Nav>
        <$LogoWrapper onClick={openHome}>
          <$LogoSquare src="https://static.twinlify.com/logos/logo-square.svg" />
          <$Twinlify isNewStyleHeader={isNewStyleHeader}>TWINLIFY</$Twinlify>
        </$LogoWrapper>
        <Hamburger
          onClick={handleClick}
          isOpen={isOpen}
          isNewStyleHeader={isNewStyleHeader}
        />
        <$Links isOpen={isOpen}>
          <Links />
        </$Links>
        <$LinksMobile isOpen={isOpen}>
          <Links />
        </$LinksMobile>
        <$BlackScreen onClick={handleClick} isOpen={isOpen} />
      </$Nav>
    </$Header>
  );
};

export default Header;
