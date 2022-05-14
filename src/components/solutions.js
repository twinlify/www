import React from 'react';
import styled, {css} from 'styled-components';
import {useNavigate} from 'react-router';
import {white, lightGray, darkGray, primaryBlue} from '../style/colors';
import WifiLogo from '../img/wi-fi.svg';
import RightArrow from '../img/right-arrow.svg';

const $HoverMenu = styled.ul`
  display: none;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  background: ${lightGray};
  list-style: none;
  position: absolute;
  top: 55px;
  padding-inline-start: 0px;
  padding: 1rem;
  // small square
  &::before {
    content: '';
    z-index: -1;
    width: 20px;
    height: 20px;
    background: ${lightGray};
    position: absolute;
    top: -5px;
    left: 40px;
    transform: rotate(45deg);
  }
  ${props =>
    props.isVisibleSolutions &&
    css`
      display: flex;
    `}
`;

const $HoverLink = styled.li`
  color: ${darkGray};
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  svg {
    margin-right: 5px;
  }
  &:hover {
    color: ${primaryBlue};
  }
`;

const $LinkRedirect = styled.span`
  padding-top: 10px;
  cursor: pointer;
  color: ${primaryBlue};
  svg {
    margin-left: 10px;
    transform: translateX(0) translateY(2px);
    transition: all 300ms ease-in;
  }
  &:hover {
    svg {
      transform: translateX(10px) translateY(2px);
    }
  }
`;

const Solutions = props => {
  const history = useNavigate();

  const openSolutions = () => {
    navigate('/solutions');
    setIsOpen(false);
  };

  return (
    <$HoverMenu isVisibleSolutions={props.isVisibleSolutions}>
      <$HoverLink>
        <WifiLogo width="20" />
        Asset tracking
      </$HoverLink>
      <$HoverLink>
        <WifiLogo width="20" />
        Real time maps
      </$HoverLink>
      <$HoverLink>
        <WifiLogo width="20" />
        Interactive storytelling
      </$HoverLink>
      <$LinkRedirect onClick={openSolutions}>
        All Solutions
        <RightArrow width="20" />
      </$LinkRedirect>
    </$HoverMenu>
  );
};

export default Solutions;
