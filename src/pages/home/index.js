import React from 'react';
import styled, {css} from 'styled-components';
import Button from '../../components/button';
import demoContent from '../../../content/demo.json';
import ImageParallax from '../../components/imageParallax';
import RandomPattern from '../../img/random-pattern.svg';
import {primaryBlue, green, darkGreen, white, lightGray} from '../../style/colors';
import Nexus from '@twinlify/nexus';
const $Main = styled.main`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const $BgPresentation = styled.div`
  height: 90vh;
  width: 100vw;
  background-color: #ddeef5;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const $PresentationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-left: 10rem;
  align-self: start;
`
const $Twinlify = styled.h1`
  color: ${primaryBlue};
  font-weight: 500;
  font-size: 6rem;
  text-align: left;
  margin: unset;
`
const $Paragraph = styled.p`
  margin: unset;
  text-align: left;
  position: relative;
  left: 20px;
  bottom: 20px;
`
const $Button = styled.button`
text-decoration: none;
padding: 1rem 2rem;
margin: 1rem 2rem;
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
&:hover {
    background: ${darkGreen};
}
`

const $Demo = styled.div`
  width: 80vw;
  height: 60vh;
  box-shadow: 10px 10px 29px -2px rgba(133,133,133,1);
  -webkit-box-shadow: 10px 10px 29px -2px rgba(133,133,133,1);
  -moz-box-shadow: 10px 10px 29px -2px rgba(133,133,133,1);
`;

const $SectionRow = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 250px;
`;

const $SectionColumn = styled($SectionRow)`
  flex-direction: column;
`;

const $Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 4rem;
  order: 0;

  ${props =>
    props.changeOrder &&
    css`
      order: 1;
    `}

  ${props =>
    props.center &&
    css`
      align-items: center;
      margin-left: unset;
    `}

  ${props =>
    props.alignLeft &&
    css`
      align-self: flex-start;
      margin-left: unset;
    `}
`;

const $Title = styled.h1`
  font-size: 3rem;
`;

const $Description = styled.p`
  max-width: 50ch;
  margin-bottom: 2rem;
  text-align: left;

  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
`;

const $Images = styled.div`
  display: flex;
  align-items: flex-end;

  ${props =>
  props.paddingImages &&
  css`
    & img:nth-child(2) {
      padding: 0 20px;
    }
  `}

  ${props =>
  props.specialDiv &&
  css`
    position: relative;
    & img:last-child {
      position: absolute;
      right: -175px;
      top: -250px;
    }
  `}
`;

// -----------------------------------------------------------------------------

const Title = ({
  title,
  description,
  actionName,
  centerDescription = false,
  centerTitle = false,
  changeOrder = false,
  alignLeft = false
}) => (
  <$Text center={centerTitle} changeOrder={changeOrder} alignLeft={alignLeft}>
    <$Title>{title}</$Title>
    <$Description center={centerDescription}>{description}</$Description>
    <Button>{actionName}</Button>
  </$Text>
);


// -----------------------------------------------------------------------------

const Section1 = ({content}) => (
  <$SectionColumn>
    <Title
      title={content.title}
      description={content.description}
      actionName={content.button}
      centerTitle
      centerDescription
    />
    <$Images paddingImages>
      <ImageParallax
        offset={450}
        translate="from-left"
        rotate="anticlockwise"
        source={content.imgOne}
        imageWidth={content.imgOneWidth}
      />
      <ImageParallax
        offset={450}
        translate="from-below"
        source={content.imgTwo}
        imageWidth={content.imgTwoWidth}
        height={content.imgTwoHeight}
      />
      <ImageParallax
        offset={450}
        translate="from-right"
        rotate="clockwise"
        source={content.imgThree}
        imageWidth={content.imgThreeWidth}
      />
    </$Images>
  </$SectionColumn>
);

// -----------------------------------------------------------------------------

const Section2 = ({content}) => (
  <$SectionRow>
    <Title
      title={content.title}
      description={content.description}
      actionName={content.button}
      changeOrder
    />
    <$Images>
      <ImageParallax
        offset={1500}
        translate="from-left"
        source={content.imgOne}
        imageWidth={content.imgOneWidth}
      />
    </$Images>
  </$SectionRow>
);

// -----------------------------------------------------------------------------

const Section3 = ({content}) => (
  <$SectionColumn>
    <Title
      title={content.title}
      description={content.description}
      actionName={content.button}
      alignLeft
    />
    <$Images specialDiv>
    <ImageParallax
      offset={2200}
      translate="from-below"
      rotate="clockwise"
      defaultrotation="yes"
      source={demoContent.sectionThree.imgOne}
      imageWidth={demoContent.sectionThree.imgOneWidth}
    />
    <ImageParallax
      offset={2200}
      translate="from-below"
      rotate="clockwise"
      source={demoContent.sectionThree.imgTwo}
      imageWidth={demoContent.sectionThree.imgTwoWidth}
    />
    </$Images>
  </$SectionColumn>
);

// -----------------------------------------------------------------------------

const Section4 = ({content}) => (
  <$SectionRow>
    <Title
      title={content.title}
      description={content.description}
      actionName={content.button}
      changeOrder
    />
    <$Images>
      <ImageParallax>
        offset={3400}
        translate="from-below"
        source={demoContent.sectionFour.imgOne}
        imageWidth={demoContent.sectionFour.imgOneWidth}
      />
    </$Images>
  </$SectionRow>
)

// -----------------------------------------------------------------------------


const Demo = () => {
  Nexus.create({
  clientId: 'demo',
  containerId: 'nexusContainer',
  configId: 'rooms'
});
  return (
    <$Main>
      <$BgPresentation>
        <$PresentationWrapper>
          <$Twinlify>TWINLIFY</$Twinlify>
          <$Paragraph>
          WOW your users with beautiful and exclusive 3D data visualisation widgets,<br /> making any important situation graspable in an instant, whether ran live or played back.
​          </$Paragraph>
          {/* <$Button as="a" href="https://docs.twinlify.com/documentation/getting-started" target="_blank" >Getting Started</$Button> */}
        </$PresentationWrapper>
        <$Demo id="nexusContainer" />
      </$BgPresentation>

      <Section1 content={demoContent.sectionOne} />
      <Section2 content={demoContent.sectionTwo} />
      <Section3 content={demoContent.sectionThree} />
      <Section4 content={demoContent.sectionFour} />

    </$Main>
  );
};

export default Demo;
