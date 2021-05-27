import React from 'react';
import styled, {css} from 'styled-components';
import {device} from '../style/breakpoints';
import {primaryBlue, darkGray} from '../style/colors'

const $ExitButton = styled.div`
    margin-right: 20px;
    align-self: center;
    position: relative;
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
        height: 6px;
        width: 100%;
        background: white;
        border-radius: 5px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transform-origin: left center;
        transition: 250ms ease-in-out;
    }
    span:nth-child(1) {
        transform: rotate(45deg);
        top: -2px;
        left: 7px;
    }
    span:nth-child(3) {
        transform: rotate(-45deg);
        top: 34px;
        left: 8px;
      }

  @media ${device.mobileL} {
    span {
      background: ${darkGray};
    }
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