// -----------------------------------------------------------------------------

import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {useHistory} from 'react-router';
import {device} from '../style/breakpoints';
import {grayishWhite, darkGray, lightGray, primaryBlue, darkBlue} from '../style/colors';
import Hamburger from './hamburger';
import GitHubBlackLogo from '../img/github-black-logo.svg';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';

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
      -webkit-box-shadow: 0px 8px 33px -11px rgba(0,0,0,0.37);
      box-shadow: 0px 8px 33px -11px rgba(0,0,0,0.37);
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
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-bottom: 20px;
  cursor: pointer;
`;

const $LogoSquare = styled.img`
  padding-top: 10px;
  width:80px;
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
      color: ${primaryBlue}
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

  @media ${device.laptop} {
    display: flex;
    align-items: center;
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
    color: ${lightGray};
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

  const [isNewStyleHeader, setIsNewStyleHeader] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < -150) {
      setIsNewStyleHeader(true);
      console.log(isNewStyleHeader)
    }
    else {
      setIsNewStyleHeader(false)
    }
  })
  const history = useHistory();

  const openHome = () => {
    history.push('/');
    setIsOpen(false);
  };

  const externalLink = () => {
    setIsOpen(false);
  };

  const openContact = () => {
    history.push('/contact');
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <$Header isNewStyleHeader={isNewStyleHeader}>
      <$Nav>
        <$LogoWrapper onClick={openHome}>
          <$LogoSquare src="https://static.twinlify.com/logos/logo-square.svg" />
          <$Twinlify isNewStyleHeader={isNewStyleHeader}>TWINLIFY</$Twinlify>
        </$LogoWrapper>
        <Hamburger onClick={handleClick} isOpen={isOpen} />
        <$Links isOpen={isOpen}>
          <$Link onClick={openHome}>Home</$Link>
          <$Link onClick={externalLink}><a href="https://docs.twinlify.com/" target="_blank">Docs</a></$Link>
          <$Link onClick={externalLink}><a href="https://platform.twinlify.com/" target="_blank">Demo</a></$Link>
          <$Link onClick={openContact}>Contact</$Link>
          <$Link onClick={externalLink}><a href='https://github.com/twinlify/' target="_blank"><GitHubBlackLogo /></a></$Link>
        </$Links>
        <$LinksMobile isOpen={isOpen}>
          <$Link onClick={openHome}>Home</$Link>
          <$Link onClick={externalLink}>Demo</$Link>
          <$Link onClick={openContact}>Contact</$Link>
        </$LinksMobile>
      </$Nav>
    </$Header>
  );
};

export default Header;
