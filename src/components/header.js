// -----------------------------------------------------------------------------

import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import {useHistory} from 'react-router';
import {device, mediaQueryTransition} from '../style/breakpoints';
import logo from '../img/logo_square.svg';
import {darkGray, primaryBlue} from '../style/colors';
// -----------------------------------------------------------------------------

const $Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  height: 100px;
  background: ${darkGray};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const $Logo = styled.img`
  width: 100px;
`;

const $Links = styled.div`
  display: flex;
  overflow: hidden;
  top: 100px;
  left: 0;
  width: 100%;
  background: rgb(88,88,88);
  background: linear-gradient(0deg, rgba(88,88,88,1) 0%, rgba(40,40,40,1) 54%, rgba(17,17,17,1) 100%);
  flex-direction: column;
  font-size: 1.5rem;
  max-height: ${props => (props.isOpen ? '300px' : '0')};
  transition: max-height 0.3s ease-in-out;
  }

  @media ${device.laptop} {
   top: 0px;
   width: auto;
   max-height: unset;
   background: ${darkGray};
   flex-direction: row;
   font-size: 1.3rem;
  }
`;

const $Link = styled.p`
  margin: 20px 0;
  cursor: pointer;

  &:hover {
    color: ${primaryBlue};
  }

  @media ${device.laptop} {
    margin: 0 20px;
  }
`;

const $Hamburger = styled.div`
  margin-top: 9px;
  position: relative;
  width: 50px;
  height: 45px;
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
  };

  const openTeam = () => {
    history.push('/team');
  };

  const openDemo = () => {
    history.push('/demo');
  };

  const openAboutUs = () => {
    history.push('/about-us');
  };

  const openContact = () => {
    history.push('/contact');
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <$Header>
      <$Logo src="https://static.twinlify.com/logos/logo.svg" />
      {/*<$Logo src={logo} />*/}
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
    </$Header>
  );
};

export default Header;
