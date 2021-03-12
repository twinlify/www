// -----------------------------------------------------------------------------

import React, { useState } from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router';
import {primary} from '../style/colors';
// import {device} from '../style/breakpoints';
import logo from '../img/logo_square.svg';
// -----------------------------------------------------------------------------

const $Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  height: 100px;
  background-color: #111;
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
  font-size: 1.3rem;

  @media screen and (max-width: 1024px) {
    overflow: hidden;
    top: 100px;
    left: 0;
    width: 100%;
    background: rgb(88,88,88);
    background: linear-gradient(0deg, rgba(88,88,88,1) 0%, rgba(40,40,40,1) 54%, rgba(17,17,17,1) 100%);
    flex-direction: column;
    font-size: 1.5rem;
    max-height: ${({ isOpen }) => (isOpen ? "0" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

const $Link = styled.p`
  margin: 0 20px;
  cursor: pointer;

  &:hover {
    color: ${primary};
  }

  @media screen and (max-width: 1024px) {
    margin: 20px 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 5px;
    width: 30px;
    background: ${({ isOpen }) => (isOpen ? "red" : "white")};
    border-radius: 5px;
    &:not(:last-child) {margin-bottom: 6px}
  }
  @media screen and (max-width: 1024px) {
    display: flex;
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

  return (
    <$Header>
      <$Logo src="https://static.twinlify.com/logos/logo.svg" />
      {/*<$Logo src={logo} />*/}
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <$Links>
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
