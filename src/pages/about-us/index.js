import React from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';


const $Main= styled.main`
display: flex;
flex-direction: column;
align-items: center;
& img {
    margin-bottom: 100px;
}
`;

Aos.init();

const AboutUs = () => {
    return (
        <$Main>
            <h1>Test Animate on Scroll</h1>
            <img data-aos="fade-up" src="https://images.unsplash.com/photo-1506057213367-028a17ec52e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
            <img data-aos="fade-up" src="https://images.unsplash.com/photo-1523897056079-5553b57112d4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1411&q=80" />
            <img data-aos="fade-up" src="https://images.unsplash.com/photo-1475776408506-9a5371e7a068?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1254&q=80" />
        </$Main>
    )
}

export default AboutUs;
