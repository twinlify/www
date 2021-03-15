// -----------------------------------------------------------------------------

import React, {useState} from 'react';
import styled from 'styled-components';
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
  max-height: 0px;
  transition: max-height 0.3s ease-in;
  }
  & .active {
    max-height: 300px;
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
  display: flex;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 5px;
    width: 30px;
    background: ${props => (props.isOpen ? 'red' : 'white')};
    border-radius: 5px;
    &:not(:last-child) {
      margin-bottom: 6px;
    }
  }
  @media ${device.laptop} {
    display: none;
  }
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
    console.log(isOpen); //a enlever
  };

  return (
    <$Header>
      <$Logo src="https://static.twinlify.com/logos/logo.svg" />
      {/*<$Logo src={logo} />*/}
      <$Hamburger onClick={handleClick} isOpen={isOpen}>
        <span />
        <span />
        <span />
      </$Hamburger>
      <$Links className={isOpen ? 'active' : ''}>
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
