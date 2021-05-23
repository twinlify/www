import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router';
import  {green, darkGreen, white} from '../style/colors';

// ---------------------------------------------------

const $Button = styled.button`
padding: 1rem 2rem;
font-size: 1rem;
background: ${green};
max-width: 23ch;
max-height: 40px;
border-radius: 30px;
cursor: pointer;
border: 0;
outline: 0;
color: ${white};
font-family: poppins;
display: flex;
align-items: center;
justify-content: center;

&:hover {
    background: ${darkGreen};
}
`
// ---------------------------------------------------
const Button = (props) => {
    const history = useHistory();
    const direction = props.click;
    const open = () => {
        history.push(direction)
    };
    return (
        <$Button onClick={open}>
            {props.children}
        </$Button>
    )
}

export default Button;