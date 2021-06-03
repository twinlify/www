import React from 'react';
import styled, {css} from 'styled-components';
import {device} from '../style/breakpoints';
import {primaryBlue, darkGray} from '../style/colors'

const $ExitButton = styled.div`
    position: absolute;
    right: 10px;
    top: 20px;
    width: 50px;
    height: 36px;
    transition: 0s;
    cursor: pointer;
    @media ${device.laptop} {
        display:none;
    }
    span {
        display: block;
        position: absolute;
        height: 5px;
        width: 100%;
        background: black;
        border-radius: 5px;
        right: 0;
        transform-origin: left center;
    }
    span:nth-child(1) {
        transform: rotate(45deg);
        top: -2px;
        left: 7px;
    }
    span:nth-child(2) {
        transform: rotate(-45deg);
        top: 34px;
        left: 8px;
    }
`;

const ExitButton = (props) => {
    return (
        <$ExitButton onClick={props.onClick} isOpen={props.isOpen}>
            <span />
            <span />
        </$ExitButton>
    )
};

export default ExitButton;