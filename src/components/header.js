// -----------------------------------------------------------------------------

import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {useHistory} from 'react-router';
import {device} from '../style/breakpoints';
import {lightGray, darkGray, primaryBlue} from '../style/colors';
import LogoGraphic from '../img/logo_graphic.svg';
import LogoText from '../img/logo_text.svg';
// -----------------------------------------------------------------------------

const $Header = styled.header`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
  background: ${darkGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  @media ${device.laptop} {
    padding: 0 20px;
  }
`;

const $LogoWrapper = styled.div`
  width: 282px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  svg:first-child {
    display: none;
  }
  @media ${device.mobileL} {
    svg:first-child {
      display: block;
    }
  }
  @media ${device.laptop} {
    padding-left: 0px;
  }
`;

const $Links = styled.div`
  display: none;
  top: 0px;
  left: 0;
  background: ${darkGray};
  font-size: 1.3rem;

  @media ${device.laptop} {
    display: flex;
  }
`;

const $LinksMobile = styled.div`
  position: absolute;
  top: 100px;
  background: ${lightGray};
  @media ${device.laptop} {
    display: none;
  }
  transform: translate(100%, 0);
  transition: transform 0.3s ease-in-out;
  ${props =>
    props.isOpen &&
    css`
      transform: translate(0, 0)
    `}
`;

const $Link = styled.p`
  margin: 30px 0;
  cursor: pointer;
  font-size: 1.5rem;
  width: 100vw;

  &:hover {
    color: ${primaryBlue};
  }

  @media ${device.laptop} {
    margin: 0 20px;
    font-size: 1.3rem;
    width: unset;
  }
`;

const $Hamburger = styled.div`
  margin-right: 20px;
  position: relative;
  width: 50px;
  height: 36px;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  @media ${device.laptop} {
    display:none;
  }
  span {
    display: block;
    position: absolute;
    height: 6px;
    width: 100%;
    background: white;
    border-radius: 5px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 250ms ease-in-out;
  }
  span:nth-child(1) {
    top: 0px;
    transform-origin: left center;
  }
  span:nth-child(2) {
    top: 15px;
    transform-origin: left center;
  }
  span:nth-child(3) {
    top: 30px;
    transform-origin: left center;
  }
  ${props =>
    props.isOpen &&
    css`
      span:nth-child(1) {
        transform: rotate(45deg);
        top: -2px;
        left: 7px;
      }
      span:nth-child(2) {
        width: 0%;
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg);
        top: 34px;
        left: 8px;
      }
  `}
`;

// -----------------------------------------------------------------------------

const Header = () => {
  const history = useHistory();

  const openHome = () => {
    history.push('/');
    setIsOpen(false);
  };

  const openTeam = () => {
    history.push('/team');
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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <$Header>
      <$LogoWrapper>
        <LogoGraphic />
        <LogoText />
      </$LogoWrapper>
      <$Hamburger onClick={handleClick} isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </$Hamburger>
      <$Links isOpen={isOpen}>
        <$Link onClick={openHome}>Home</$Link>
        <$Link onClick={openTeam}>Team</$Link>
        <$Link onClick={openDemo}>Demo</$Link>
        <$Link onClick={openAboutUs}>About us</$Link>
        <$Link onClick={openContact}>Contact</$Link>
      </$Links>
      <$LinksMobile isOpen={isOpen}>
        <$Link onClick={openHome}>Home</$Link>
        <$Link onClick={openTeam}>Team</$Link>
        <$Link onClick={openDemo}>Demo</$Link>
        <$Link onClick={openAboutUs}>About us</$Link>
        <$Link onClick={openContact}>Contact</$Link>
      </$LinksMobile>
    </$Header>
  );
};

export default Header;
