import React from 'react';
import styled from 'styled-components';
import {primaryBlue, darkGray} from '../style/colors';
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
z-index: -1;
`;
const $Nav = styled.nav`
display: flex;
align-items: flex-end;
& ul {
    list-style: none;
}
`;
// ---------------------------------------------------
const Footer = (props) => {
    return (
        <$Footer>
            <$Nav>
                <ul>
                    <li>Home</li>
                    <li><a>Docs</a></li>
                    <li><a href="https://docs.twinlify.com/">Demo</a></li>
                    <li>Contact</li>
                </ul>
                <ul><a><GitHubWhiteLogo /></a></ul>
            </$Nav>
        </$Footer>
    )
}

export default Footer;