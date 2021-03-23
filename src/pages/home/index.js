import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Button from '../../components/button';
import {device, mediaQueryTransition} from '../../style/breakpoints';
import {primaryBlue} from '../../style/colors';
import homeContent from '../../../content/home.json';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';

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

// -----------------------------------------------------------------------------

const $BoxDemo = styled.div`
  background-color: #534;
  width: 400px;
  height: 400px;
  transition: all 0.9s;

  ${props =>
    css`
      transform: translate3D(${props.translateX}px, 0, 0)
        rotate3d(0, 0, 1, ${props.rotation}deg);
    `};
`;

const BoxDemo = ({offset}) => {
  const [scrollY, setScrollY] = useState(0);

  useScrollPosition(({prevPos, currPos}) => {
    setScrollY(currPos.y);
  });

  const translateX = scrollY + offset;
  const rotation = scrollY / 100;

  return (
    <$BoxDemo translateX={translateX} rotation={rotation}>
      {scrollY}
    </$BoxDemo>
  );
};

// -----------------------------------------------------------------------------

const listWrappers = homeContent.map((wrapper, index) => (
  <$Wrapper key={wrapper.id}>
    <$Img />
    <$Text>
      <h4>{wrapper.title}</h4>
      <p>{wrapper.description}</p>
    </$Text>

    <BoxDemo offset={index * 450} />
  </$Wrapper>
));

const Home = () => {
  return (
    <main>
      <$WrapperTitle>
        <$Title>
          Principales Fonctionnalités de <$Twinlify>TWINLIFY</$Twinlify>
        </$Title>
        <Button click="/contact">Contact Us</Button>
      </$WrapperTitle>
      {listWrappers}
    </main>
  );
};

export default Home;
