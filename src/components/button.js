import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router';

//---------------------------------------------------

const $Button = styled.div`
padding: 1rem 2rem;
background: #44B649;
max-width: 20ch;
max-height: 30px;
border-radius: 30px;
cursor: pointer;

&:hover {
    background: #318A35
}
`
//---------------------------------------------------
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