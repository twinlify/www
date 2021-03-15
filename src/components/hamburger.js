import React, {useState} from 'react';
import styled from 'styled-components';
import {device, mediaQueryTransition} from '../style/breakpoints';

// ---------------------------------------------------

const $Container = styled.div`
    position: relative;
    width: 50px;
    height: 45px;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
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
        transition: 250ms ease-in-out;
    }
    span:nth-child(1) {
        top: 0px;
        transform-origin: left center;
    }
    span:nth-child(2) {
        top: 15px;
        transform-origin: left center;
    }
    span:nth-child(3) {
        top: 30px;
        transform-origin: left center;
    }
    &.active {
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
    }
    @media ${device.laptop} {
        display:none;
    }
`;

// ---------------------------------------------------
const Hamburger = (props) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
    setIsActive(!isActive);
    console.log(isActive); //a enlever
    };
    return (
        <$Container onClick={props.handleClick} onClick={handleClick} className={isActive? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
        </$Container>
    )
}

export default Hamburger;