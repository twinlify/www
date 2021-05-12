import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Button from '../../components/button';
import {device, mediaQueryTransition} from '../../style/breakpoints';
import {primaryBlue, green, darkGreen, white,} from '../../style/colors';
import homeContent from '../../../content/home.json';

// -----------------------------------------------------------------------------

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
  margin-bottom: 1rem;
  @media ${device.laptop} {
    margin-bottom: 2rem;
  }
`;

const $Twinlify = styled.span`
  color: ${primaryBlue};
  font-size: 3rem;
  margin-left: 0.5rem;
  font-weight: 400;
`;

const $Button = styled.button`
padding: 1rem 2rem;
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
text-decoration: none;

&:hover {
    background: ${darkGreen};
}
`

const $Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 100px;
  }
  &:nth-child(2n + 1) {
    span {
      order: 2;
    }
  }
  @media ${device.laptop} {
    flex-direction: row;
    align-items: unset;
    justify-content: space-between; // à revoir en fonction du contenu json
  }
`;

const $Img = styled.span`
  //Simulation Image
  min-width: 300px;
  min-height: 240px;
  background-color: black;
`;

const $Text = styled.div`
    p {
        text-align: center;
        line-height: 1.2rem;
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

// -----------------------------------------------------------------------------

const listWrappers = homeContent.map((wrapper, index) => (
  <$Wrapper key={wrapper.id}>
    <$Img />
    <$Text>
      <h4>{wrapper.title}</h4>
      <p>{wrapper.content}</p>
    </$Text>
  </$Wrapper>
));

const Home = () => {
  return (
    <main>
      <$WrapperTitle>
        <$Title>
          <$Twinlify>TWINLIFY</$Twinlify>
        </$Title>
        <$Button as="a" href="https://docs.twinlify.com/documentation/getting-started" target="_blank">Getting Started</$Button>
      </$WrapperTitle>
      {listWrappers}
    </main>
  );
};

export default Home;
