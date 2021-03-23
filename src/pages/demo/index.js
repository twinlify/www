import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Button from '../../components/button';
import {device, mediaQueryTransition} from '../../style/breakpoints';
import {primaryBlue} from '../../style/colors';
import demoContent from '../../../content/demo.json';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
// -----------------------------------------------------------------------------

const $Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 200px;
`;

const $WrapperText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const $Title = styled.h1`
`;
const $Text = styled.p`
    max-width: 50ch;
    margin-bottom: 2rem;
`;
const $WrapperImg = styled.div`
    display:flex;
    justify-content: center;
    align-items: flex-end;
`;
const $Img = styled.img`
`;
// -----------------------------------------------------------------------------

const $BoxDemo = styled.div`
  background-color: #534;
  width: 400px;
  height: 400px;
  transition: all 0.9s;

  ${props =>
    css`
      transform: translate3D(${props.translateX}%, 0, 0)
    `};
`;

const BoxDemo = ({offset}) => {
  const [scrollY, setScrollY] = useState(0);

  useScrollPosition(({prevPos, currPos}) => {
    setScrollY(currPos.y);
  });
  const value = 15 + scrollY + offset;
  const translateX = Math.max(0, Math.min(15, value));

  return (
    <$BoxDemo translateX={translateX}>
      15 + {scrollY} + {offset} = {value}
    </$BoxDemo>
  );
};

// -----------------------------------------------------------------------------

const sectionWrappers = demoContent.map((wrapper, index) => (
  <$Section key={wrapper.id}>
    <$WrapperText>
        <$Title>{wrapper.title}</$Title>
        <$Text>{wrapper.content}</$Text>
        <Button>{wrapper.button}</Button>
    </$WrapperText>
    <$WrapperImg>
        <$Img src={wrapper['img-one']} width={wrapper['img-one-width']} />
        <$Img src={wrapper['img-two']} width={wrapper['img-two-width']} />
        <$Img src={wrapper['img-three']} width={wrapper['img-three-width']} />
    </$WrapperImg>
    </$Section>
));

// -----------------------------------------------------------------------------

const Demo = () => {
  return (
    <main>
        {sectionWrappers}
    </main>
  );
};

export default Demo;


// -----------------------------------------------------------------------------
