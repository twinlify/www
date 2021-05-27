import React from 'react';
import styled from 'styled-components';
import {primaryBlue, lightGray} from '../style/colors';
import GitHubWhiteLogo from '../img/github-white-logo.svg';
import {useHistory} from 'react-router';

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
    align-items: flex-end;
`;

const $List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-right: 40px;
`;

const $List2 = styled($List)`
    color: red;
`;

const $Link = styled.li`
    cursor: pointer;
    &:hover {
        color: ${lightGray};
    }
`;
// ---------------------------------------------------
const Footer = (props) => {
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
                    <$Link><a href="https://docs.twinlify.com/" target="_blank">Docs</a></$Link>
                    <$Link><a href="https://docs.twinlify.com/" target="_blank">Demo</a></$Link>
                    <$Link onClick={openContact}>Contact</$Link>
                </$List>
                <$List2>
                    <$Link><a href='https://github.com/twinlify/' target="_blank"><GitHubWhiteLogo /></a></$Link>
                </$List2>
            </$Nav>
        </$Footer>
    )
}

export default Footer;