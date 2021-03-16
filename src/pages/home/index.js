import React from 'react';
import styled from 'styled-components';
import Button from '../../components/button';
import {device, mediaQueryTransition} from '../../style/breakpoints';
import { primaryBlue } from '../../style/colors';
import homeContent from '../../../content/home.json'

// ----------------------------------------------------------

const $WrapperTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;
    @media ${device.laptop} {
        margin-bottom: 10rem;
    }
`;
const $Title = styled.h1`
    text-transform: uppercase;
    padding: 0 4rem;
    margin-bottom: 4rem;
    @media ${device.laptop} {
        margin-bottom: 8rem;
    }
`;

const $Twinlify = styled.span`
    color: ${primaryBlue};
    font-size: 3rem;
    margin-left: 0.5rem;
    font-weight: 400;
`;

const $Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    &:not(:last-child) {
        margin-bottom: 100px;
    }
    &:nth-child(2n+1) {
        background: red;
        */ & $Text ?? ne fonctionne pas, alternative? {} */
    }
    @media ${device.laptop} {
        flex-direction: row;
        align-items: unset;
        justify-content: space-between; // à revoir en fonction du contenu json
    }
`;

const $Img = styled.div` //Simulation Image
    min-width: 300px;
    min-height: 240px;
    background-color: black;
`;

const $ImgTwo = styled($Img)`
    order: 2;
`;

const $Text = styled.div`
    p {
        text-align: center;
        line height: 1.2rem;
        max-width: 30ch;
    }
    order: 3;
    @media ${device.laptop} {
        order: unset;
        padding: 0 2rem;
        p {
            text-align: left;
            max-width: 60ch;
        }
    }
`;
//------------------------------------------------------------

const listItems = homeContent.map((item) =>
        <$Wrapper key={item.id}>
            <$Img />
            <$Text>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
            </$Text>
        </$Wrapper>
        );

const Home = () => {
    return (
        <main>
        <$WrapperTitle>
        <$Title>Principales Fonctionnalités de <$Twinlify>TWINLIFY</$Twinlify></$Title>
        <Button click='/contact'>Contact Us</Button>
        </$WrapperTitle>
        {listItems}
        </main>
    )
}

export default Home;

