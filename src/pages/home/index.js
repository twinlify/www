import React from 'react';
import styled from 'styled-components';
import Button from '../../components/button';
import {device, mediaQueryTransition} from '../../style/breakpoints';
import { primaryBlue } from '../../style/colors'

// ----------------------------------------------------------

const $ContainerTitle = styled.div`
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

const $Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    &:not(:last-child) {
        margin-bottom: 100px;
    }
    
    @media ${device.laptop} {
        flex-direction: row;
        align-items: unset;
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

const Home = () => {
    return (
        <main>
        <$ContainerTitle>
        <$Title>Principales fonctionnalités de <$Twinlify>TWINLIFY</$Twinlify></$Title>
        <Button click='/contact'>Contact Us</Button>
        </$ContainerTitle>

        <$Container>
            <$Img />
            <$Text>
                <h4>3D visualization</h4>
                <p>Consectetur consectetur laborum pariatur qui elit ipsum ipsum veniam fugiat. Ex pariatur consequat adipisicing culpa ut nisi esse commodo nulla deserunt magna nulla. Adipisicing sunt ex consequat proident nostrud in voluptate nisi laboris nisi consectetur.</p>
            </$Text>
        </$Container>

        <$Container>
            <$ImgTwo />
            <$Text>
                <h4>3D visualization</h4>
                <p>Consectetur consectetur laborum pariatur qui elit ipsum ipsum veniam fugiat. Ex pariatur consequat adipisicing culpa ut nisi esse commodo nulla deserunt magna nulla. Adipisicing sunt ex consequat proident nostrud in voluptate nisi laboris nisi consectetur.</p>
            </$Text>
        </$Container>

        <$Container>
            <$Img />
            <$Text>
                <h4>3D visualization</h4>
                <p>Consectetur consectetur laborum pariatur qui elit ipsum ipsum veniam fugiat. Ex pariatur consequat adipisicing culpa ut nisi esse commodo nulla deserunt magna nulla. Adipisicing sunt ex consequat proident nostrud in voluptate nisi laboris nisi consectetur.</p>
            </$Text>
        </$Container>
        
        <$Container>
            <$ImgTwo />
            <$Text>
                <h4>3D visualization</h4>
                <p>Consectetur consectetur laborum pariatur qui elit ipsum ipsum veniam fugiat. Ex pariatur consequat adipisicing culpa ut nisi esse commodo nulla deserunt magna nulla. Adipisicing sunt ex consequat proident nostrud in voluptate nisi laboris nisi consectetur.</p>
            </$Text>
        </$Container>
        </main>
    )
}

export default Home;

