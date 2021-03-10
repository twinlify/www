// -----------------------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router';
import {primary} from '../style/colors';

// -----------------------------------------------------------------------------

const $Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  height: 100px;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const $Logo = styled.img`
  width: 100px;
`;

const $Links = styled.div`
  display: flex;
  font-size: 1.3rem;
`;

// -----------------------------------------------------------------------------

const $Link = styled.p`
  margin: 0 20px;
  cursor: pointer;
  transition: all 100ms ease-in-out;

  &:hover {
    color: ${primary};
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

  return (
    <$Header>
      <$Logo src="https://static.twinlify.com/logos/logo.svg" />

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
