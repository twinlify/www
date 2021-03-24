import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import Button from '../../components/button';
//import {device, mediaQueryTransition} from '../../style/breakpoints';
import demoContent from '../../../content/demo.json';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';

const $Main = styled.main`
  overflow-x: hidden;
`;

const $FirstPageSimulation = styled.div`
  height: 90vh;
  width: 100vw;
  background-image: url(https://images.unsplash.com/photo-1553341640-6b28ff92098a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
`;

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
transition: all 0.9s ease-in-out;
${props =>
    css`
      transform: translate3D(${props.translateX}%, ${props.translateY}%, 0);
    `};
`;

// -----------------------------------------------------------------------------

const Parallax = (props) => {
  const [scrollY, setScrollY] = useState(0);

  useScrollPosition(({prevPos, currPos}) => {
    setScrollY(currPos.y);
  });

  const value = scrollY + props.offset;
  let translateX = 0;
  let translateY = 0;

  if (props.translate === "from-right") {
    translateX = Math.max(0, Math.min(15, value));
    translateY = 0
  } else if (props.translate === "from-left") {
    translateX = `-${Math.max(0, Math.min(15, value))}`;
    translateY = 0;
  } else if (props.translate === "from-below") {
    translateX = 0;
    translateY = Math.max(0, Math.min(15, value));
  } else if (props.translate === "from-above") {
    translateX = 0;
    translateY = `-${Math.max(0, Math.min(15, value))}`;
  };


  return (
    <$Img src={props.source} translateX={translateX} translateY={translateY} width={props.imageWidth}/>
  );
};

// -----------------------------------------------------------------------------

const Demo = () => {
  return (
    <$Main>
      <$FirstPageSimulation />

      <$SectionStyle2>
        <$WrapperTextStyle2>
          <$Title>{demoContent.sectionOne.title}</$Title>
          <$TextStyle2>{demoContent.sectionOne.description}</$TextStyle2>
          <Button>{demoContent.sectionOne.button}</Button>
        </$WrapperTextStyle2>
        <$WrapperImgStyle2>
          <Parallax offset={450} translate="from-left" source={demoContent.sectionOne.imgOne} imageWidth={demoContent.sectionOne.imgOneWidth} />
          <Parallax offset={450} translate="from-below" source={demoContent.sectionOne.imgTwo} imageWidth={demoContent.sectionOne.imgTwoWidth} height={demoContent.sectionOne.imgTwoHeight} />
          <Parallax offset={450} translate="from-right" source={demoContent.sectionOne.imgThree} imageWidth={demoContent.sectionOne.imgThreeWidth} />
        </$WrapperImgStyle2>
      </$SectionStyle2>

      <$Section>
        <$WrapperText>
          <$Title>{demoContent.sectionTwo.title}</$Title>
          <$Text>{demoContent.sectionTwo.description}</$Text>
          <Button>{demoContent.sectionTwo.button}</Button>
        </$WrapperText>
        <$WrapperImg>
          <Parallax offset={1000} translate="from-left" source={demoContent.sectionTwo.imgOne} imageWidth={demoContent.sectionTwo.imgOneWidth} />
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
          <Parallax offset={3400} translate="from-below" source={demoContent.sectionFour.imgOne} imageWidth={demoContent.sectionFour.imgOneWidth} />
        </$WrapperImg>
      </$Section>

      <$Section>
        <$WrapperText>
          <$Title>{demoContent.sectionFive.title}</$Title>
          <$Text>{demoContent.sectionFive.description}</$Text>
          <Button>{demoContent.sectionFive.button}</Button>
        </$WrapperText>
        <$WrapperImg>
          <Parallax offset={4100} translate="from-left" source={demoContent.sectionFive.imgOne} imageWidth={demoContent.sectionFive.imgOneWidth}/>
        </$WrapperImg>
      </$Section>

      <$Section>
        <$WrapperText>
          <$Title>{demoContent.sectionSix.title}</$Title>
          <$Text>{demoContent.sectionSix.description}</$Text>
          <Button>{demoContent.sectionSix.button}</Button>
        </$WrapperText>
        <$WrapperImg>
          <Parallax offset={4700} translate="from-left" source={demoContent.sectionSix.imgOne} imageWidth={demoContent.sectionSix.imgOneWidth} />
        </$WrapperImg>
      </$Section>
    </$Main>
  );
};

export default Demo;
