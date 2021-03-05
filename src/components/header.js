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
  height: 40px;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const $Logo = styled.img`
  width: 40px;
`;

const $Links = styled.div`
  display: flex;
`;

// -----------------------------------------------------------------------------

const $Link = styled.p`
  margin: 0 20px;
  cursor: pointer;

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

  return (
    <$Header>
      <$Logo src="https://static.twinlify.com/logos/logo.svg" />

      <$Links>
        <$Link onClick={openHome}>Home</$Link>
        <$Link onClick={openTeam}>Team</$Link>
      </$Links>
    </$Header>
  );
};

export default Header;
