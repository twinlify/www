import React from 'react';
import styled, {css} from 'styled-components';
import {device} from '../style/breakpoints';
import {primaryBlue, darkGray} from '../style/colors'

const $Hamburger = styled.div`
  margin-right: 20px;
  align-self: center;
  position: relative;
  width: 50px;
  height: 36px;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  @media ${device.laptop} {
    display:none;
  }
  span {
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: white;
    border-radius: 10px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transform-origin: left center;
    transition: 250ms ease-in-out;
  }
  span:nth-child(1) {
    top: 0px;
  }
  span:nth-child(2) {
    top: 15px;
  }
  span:nth-child(3) {
    top: 30px;
  }
  ${props =>
  props.isNewStyleHeader &&
  css`
    span {
      background: black;
    }
  `}
  /* ${props =>
    props.isOpen &&
    css`
      span:nth-child(1) {
        transform: rotate(45deg);
        top: -2px;
        left: 7px;
      }
      span:nth-child(2) {
        width: 0%;
        opacity: 0;
      }
      span:nth-child(3) {
        transform: rotate(-45deg);
        top: 34px;
        left: 8px;
      }
  `} */

  @media ${device.mobileL} {
    span {
      background: ${darkGray};
    }
  }
`;

const Hamburger = (props) => {
    return (
        <$Hamburger onClick={props.onClick} isOpen={props.isOpen} isNewStyleHeader={props.isNewStyleHeader}>
            <span />
            <span />
            <span />
        </$Hamburger>
    )
};

export default Hamburger;