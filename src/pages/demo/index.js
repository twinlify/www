import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Button from '../../components/button';
import demoContent from '../../../content/demo.json';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import { Redirect } from 'react-router';
// -----------------------------------------------------------------------------

const $Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 250px;
`;
const $SectionStyle2 = styled($Section)`
  flex-direction: column;
`;

const $WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  order:1;
  margin-left: 4rem;
`;
const $WrapperTextStyle2 = styled($WrapperText)`
  align-items: center;
  order: 0;
  margin-left: unset;
`;
const $WrapperTextStyle3 = styled($WrapperText)`
  order: 0;
  align-self: flex-start;
  margin-left: unset;
`;

const $Title = styled.h1`
  font-size: 3rem;
`;

const $Text = styled.p`
  max-width: 50ch;
  margin-bottom: 2rem;
  text-align: left;
`;
const $TextStyle2 = styled($Text)`
  text-align: center;
`;

const $WrapperImg = styled.div`
  display:flex;
  align-items: flex-end;
`;
const $WrapperImgStyle2 = styled($WrapperImg)`
  & img:not(:last-child){
    margin-right: 2rem;
  }
`;
const $WrapperImgStyle3 = styled($WrapperImg)`
  position: relative;
  & img:first-child {
    transform: rotate(-15deg);
  }
  & img:last-child {
    position: absolute;
    right: -175px;
    top: -250px;
  }
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

const Demo = () => {
  return (
    <main>
      <$SectionStyle2>
        <$WrapperTextStyle2>
          <$Title>{demoContent.sectionOne.title}</$Title>
          <$TextStyle2>{demoContent.sectionOne.description}</$TextStyle2>
          <Button>{demoContent.sectionOne.button}</Button>
        </$WrapperTextStyle2>
        <$WrapperImgStyle2>
          <$Img src={demoContent.sectionOne.imgOne} width={demoContent.sectionOne.imgOneWidth} />
          <$Img src={demoContent.sectionOne.imgTwo} width={demoContent.sectionOne.imgTwoWidth} height={demoContent.sectionOne.imgTwoHeight} />
          <$Img src={demoContent.sectionOne.imgThree} width={demoContent.sectionOne.imgThreeWidth}/>
        </$WrapperImgStyle2>
      </$SectionStyle2>

      <$Section>
        <$WrapperText>
          <$Title>{demoContent.sectionTwo.title}</$Title>
          <$Text>{demoContent.sectionTwo.description}</$Text>
          <Button>{demoContent.sectionTwo.button}</Button>
        </$WrapperText>
        <$WrapperImg>
          <$Img src={demoContent.sectionTwo.imgOne} width={demoContent.sectionTwo.imgOneWidth} />
        </$WrapperImg>
      </$Section>

      <$SectionStyle2>
        <$WrapperTextStyle3>
          <$Title>{demoContent.sectionThree.title}</$Title>
          <$Text>{demoContent.sectionThree.description}</$Text>
          <Button>{demoContent.sectionThree.button}</Button>
        </$WrapperTextStyle3>
        <$WrapperImgStyle3>
          <$Img src={demoContent.sectionThree.imgOne} width={demoContent.sectionThree.imgOneWidth} />
          <$Img src={demoContent.sectionThree.imgTwo} width={demoContent.sectionThree.imgTwoWidth}/>
        </$WrapperImgStyle3>
      </$SectionStyle2>

      <$Section>
        <$WrapperText>
          <$Title>{demoContent.sectionFour.title}</$Title>
          <$Text>{demoContent.sectionFour.description}</$Text>
          <Button>{demoContent.sectionFour.button}</Button>
        </$WrapperText>
        <$WrapperImg>
          <$Img src={demoContent.sectionFour.imgOne} width={demoContent.sectionFour.imgOneWidth} />
        </$WrapperImg>
      </$Section>

      <$Section>
        <$WrapperText>
          <$Title>{demoContent.sectionFive.title}</$Title>
          <$Text>{demoContent.sectionFive.description}</$Text>
          <Button>{demoContent.sectionFive.button}</Button>
        </$WrapperText>
        <$WrapperImg>
          <$Img src={demoContent.sectionFive.imgOne} width={demoContent.sectionFive.imgOneWidth} />
        </$WrapperImg>
      </$Section>

      <$Section>
        <$WrapperText>
          <$Title>{demoContent.sectionSix.title}</$Title>
          <$Text>{demoContent.sectionSix.description}</$Text>
          <Button>{demoContent.sectionSix.button}</Button>
        </$WrapperText>
        <$WrapperImg>
          <$Img src={demoContent.sectionSix.imgOne} width={demoContent.sectionSix.imgOneWidth} />
        </$WrapperImg>
      </$Section>
    </main>
  );
};

export default Demo;