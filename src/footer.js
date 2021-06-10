import React from 'react';
import {useHistory} from 'react-router';
import styled from 'styled-components';

import {lightGray} from './style/colors';
import GitHubWhiteLogo from './img/github-white-logo.svg';
import {device} from './style/breakpoints';

// ---------------------------------------------------

const $Footer = styled.footer`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
  background-color: black;
  bottom: 0;
`;
const $Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.laptop} {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const $List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const $Link = styled.li`
  cursor: pointer;
  &:hover {
    color: ${lightGray};
  }
`;
// ---------------------------------------------------
const Footer = props => {
  const history = useHistory();

  const openHome = () => {
    history.push('/');
  };

  const openContact = () => {
    history.push('/contact');
  };
  return (
    <$Footer>
      <$Nav>
        <$List>
          <$Link onClick={openHome}>Home</$Link>
          <$Link>
            <a
              href="https://docs.twinlify.com/documentation/getting-started"
              target="__new"
            >
              Getting started
            </a>
          </$Link>
          <$Link>
            <a href="https://docs.twinlify.com/" target="__new">
              Demo
            </a>
          </$Link>
          {/* <$Link onClick={openContact}>Contact</$Link> */}
          <$Link>
            <a href="https://github.com/twinlify/" target="__new">
              <GitHubWhiteLogo />
            </a>
          </$Link>
        </$List>
      </$Nav>
    </$Footer>
  );
};

export default Footer;
