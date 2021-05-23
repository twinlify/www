import React from 'react';
import styled from 'styled-components';
import {primaryBlue, darkGray} from '../style/colors';

// ---------------------------------------------------

const $Footer = styled.footer`
height: 200px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
font-size: 3rem;
color: #f1f1f1;
background-color: #000;
bottom: 0;
z-index: -1;
`;
// ---------------------------------------------------
const Footer = (props) => {
    return (
        <$Footer>TEST TEST TEST TEST</$Footer>
    )
}

export default Footer;