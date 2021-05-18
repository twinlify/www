import React from 'react';
import styled, {css} from 'styled-components';
import Button from '../../components/button';
import demoContent from '../../../content/demo.json';
import ImageParallax from '../../components/imageParallax';
import RandomPattern from '../../img/random-pattern.svg';
import {primaryBlue, green, darkGreen, white} from '../../style/colors';

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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ddeef5' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cuse fill='%23d9e9f0' href='%23s' y='2'/%3E%3Cuse fill='%23d9e9f0' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23d4e4eb' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23d4e4eb' href='%23s'/%3E%3Cuse fill='%23d0e0e6' href='%23s' x='2'/%3E%3Cuse fill='%23d0e0e6' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23cbdbe1'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23cbdbe1'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23c7d6dc'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23ddeef5'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23c2d1d8'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%234898b8'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%234898b8'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%234898b8'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  position: relative;
`;

const $PresentationWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-left: 10rem;
`
const $Twinlify = styled.h1`
  color: ${primaryBlue};
  font-weight: 500;
  font-size: 8rem;
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
      <ImageParallax
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
  return (
    <$Main>
      <$BgPresentation>
        <$PresentationWrapper>
          <$Twinlify>TWINLIFY</$Twinlify>
          <$Paragraph>
          WOW your users with beautiful and exclusive 3D data visualisation widgets,<br /> making any important situation graspable in an instant, whether ran live or played back.
​          </$Paragraph>
          <$Button as="a" href="https://docs.twinlify.com/documentation/getting-started" target="_blank" >Getting Started</$Button>
        </$PresentationWrapper>
      </$BgPresentation>

      <Section1 content={demoContent.sectionOne} />
      <Section2 content={demoContent.sectionTwo} />
      <Section3 content={demoContent.sectionThree} />
      <Section4 content={demoContent.sectionFour} />

    </$Main>
  );
};

export default Demo;
