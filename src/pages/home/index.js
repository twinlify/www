import React from 'react';
import styled from 'styled-components';
import Button from '../../components/button';
import {device, mediaQueryTransition} from '../../style/breakpoints';

// ----------------------------------------------------------

const $ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10rem;
    @media ${device.laptopMax} {
        margin-bottom: 5rem;
    }
`;
const $Title = styled.h1`
    text-transform: uppercase;
    padding: 0 1rem;
    margin-bottom: 8rem;
    @media ${device.laptopMax} {
        margin-bottom: 4rem;
    }
`;

const $Twinlify = styled.span`
    color: #283D61;
    font-size: 3rem;
    margin-left: 0.5rem;
    font-weight: 400;
`;

const $Container = styled.div`
    display: flex;
    &:not(:last-child) {
        margin-bottom: 100px;
    }
    @media ${device.laptopMax} {
        flex-direction: column;
        align-items: center;
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
    max-width: 60ch;
    padding: 0 2rem;
    p {
        text-align: center;
        line height: 1.2rem;
    }
    @media ${device.laptopMax} {
        order: 3;
    }
    @media ${device.laptopMin} {
        p {
            text-align: left;
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

