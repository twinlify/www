<<<<<<< Updated upstream
import React from 'react';

const Demo = () => <p>Demo</p>;

export default Demo;
=======
import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Button from '../../components/button';
import demoContent from '../../../content/demo.json';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import { Redirect } from 'react-router';
// -----------------------------------------------------------------------------

const $Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 250px;
    ${props =>
    props.styled === 0 &&
    css`
        & div:nth-child(2) {
            img:not(:last-child) {
                margin-right: 2rem;
            }
        }
    `}
    ${props =>
    props.styled === 1 &&
    css`
        flex-direction: row;
        & div:first-child {
          order:2;
          text-align:left;
          align-items: flex-start;
          margin-left: 2rem;
      }
    `}
    ${props =>
    props.styled === 2 &&
    css`
        & div:first-child {
            align-self: flex-start;
            text-align:left;
            align-items: flex-start;
            padding-left: 4rem;
      }
      & div:last-child{
          position: relative;
            img:first-child {
                transform: rotate(-15deg)
            }
            img:nth-child(2) {
                position: absolute;
                right: -150px;
                top: -250px;
            }
      }
    `}
    ${props =>
    props.styled === 3 &&
    css`
        flex-direction: row;
        & div:first-child {
          order:2;
          text-align:left;
          align-items: flex-start;
          margin-left: 2rem;
      }
    `}
    ${props =>
    props.styled === 4 &&
    css`
        flex-direction: row;
        & div:first-child {
          order:2;
          text-align:left;
          align-items: flex-start;
          margin-left: 2rem;
      }
    `}
    ${props =>
    props.styled === 5 &&
    css`
        flex-direction: row;
        & div:first-child {
          order:2;
          text-align:left;
          align-items: flex-start;
          margin-left: 2rem;
      }
    `}
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
  <$Section key={index} styled={index}>
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

>>>>>>> Stashed changes
