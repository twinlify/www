import React from 'react';
import styled, {css} from 'styled-components';
import Button from '../../components/button';
import homeContent from '../../../content/home.json';
import ImageParallax from '../../components/imageParallax';
import {primaryBlue, darkGray, green, darkGreen, white} from '../../style/colors';
import Nexus from '@twinlify/nexus';
import BgPattern from '../../img/bg-pattern.svg';
import {device} from '../../style/breakpoints';

const $Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const $Hero = styled.div`
  width: 100vw;
  background: rgb(67,98,174);
  background: linear-gradient(149deg, rgba(67,98,174,1) 0%, rgba(35,153,152,1) 50%, rgba(66,182,73,1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${device.tablet} {
    //background-color: #ddeef5;
    background: rgb(221,238,245);
    background: linear-gradient(156deg, rgba(221,238,245,1) 0%, rgba(198,208,210,1) 100%);
    flex-direction: row;
    height: 100vh;
    width: 100vw;
  }
`;

const $TextWrapper = styled.div`
  padding: 0 20px;
  z-index: 1;
  margin-top: 120px;
  margin-bottom: 50px;
  & svg {
    display: none;
  }
  @media ${device.tablet} {
    padding: 0 2rem;
    margin: none;
    max-width: 40%;
    position: relative;
    bottom: 50px;
    & svg {
    display: block;
    z-index: -1;
    transform: scale(1.2);
    position: absolute;
    bottom: -20px;
    left: -800px;
  }
  }

  @media ${device.laptop} {
    & svg {
      bottom: -120px;
      left: -500px;
    }
  }
`;

const $CatchPhrase = styled.h1`
  text-align: left;
  color: #ededed;
  max-width: 40ch;
  font-size: 1.5rem;
  @media ${device.mobileL} {
    font-size: 2rem;
  }
`;

const $Paragraph = styled.p`
  margin-block-start: 0em;
  margin-block-end: 0em;
  text-align: left;
  font-size: 1.2rem;
  max-width: 40ch;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const $Nexus = styled.div`
margin-bottom: 30px;
width: calc(100% - 20px);
height: 300px;
border-radius: 20px;
overflow: hidden;
z-index: 1;
box-shadow: 11px 9px 67px 1px rgba(0,0,0,0.59);
-webkit-box-shadow: 11px 9px 67px 1px rgba(0,0,0,0.59);
-moz-box-shadow: 11px 9px 67px 1px rgba(0,0,0,0.59);

@media ${device.mobileL} {
  height: 350px;
}

@media ${device.tablet} {
    width: 40%;
    height: 50%;
  }
`;

const $SectionRow = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 250px;
  max-width: 100vw;
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

    ${props =>
    props.noMargin &&
    css`
      margin-left: unset;
    `}
`;

const $Title = styled.h1`
  font-size: 3rem;
`;

const $Description = styled.p`
  max-width: 90vw;
  margin-bottom: 2rem;
  text-align: left;
  margin-block-start: 0em;
  margin-block-end: 0em;
  @media ${device.tablet} {
    max-width: 50ch;
  }

  ${props =>
    props.center &&
    css`
      text-align: left;
      @media ${device.tablet} {
        text-align: center;
      }
    `}
`;

const $Images = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100vw;

  ${props =>
  props.paddingImages &&
  css`
    & img:nth-child(2) {
      padding: 0 20px;
    }
  `}

  ${props =>
  props.width50 &&
  css`
    max-width: 30vw;
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
  centerDescription = false,
  centerTitle = false,
  changeOrder = false,
  alignLeft = false,
  noMargin = false
}) => (
  <$Text center={centerTitle} changeOrder={changeOrder} alignLeft={alignLeft} noMargin={noMargin}>
    <$Title>{title}</$Title>
    <$Description center={centerDescription}>{description}</$Description>
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
    <$Images paddingImages section1>
      <ImageParallax
        offset={450}
        translate="from-left"
        rotate="anticlockwise"
        source={content.imgOne}
        imageWidth={content.imgOneWidth}
        notOnMobile
      />
      <ImageParallax
        offset={450}
        translate="from-below"
        source={content.imgTwo}
        imageWidth={content.imgTwoWidth}
        height={content.imgTwoHeight}
        mobileStyle
      />
      <ImageParallax
        offset={450}
        translate="from-right"
        rotate="clockwise"
        source={content.imgThree}
        imageWidth={content.imgOneWidth}
        notOnMobile
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
      <ImageParallax
        offset={1500}
        translate="from-left"
        source={content.imgOne}
        imageMaxWidth={content.imgOneMaxWidth}
      />
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
      source={homeContent.sectionThree.imgOne}
      imageWidth={homeContent.sectionThree.imgOneWidth}
    />
    <ImageParallax
      offset={2200}
      translate="from-below"
      rotate="clockwise"
      source={homeContent.sectionThree.imgTwo}
      imageWidth={homeContent.sectionThree.imgTwoWidth}
    />
    </$Images>
  </$SectionColumn>
);

// -----------------------------------------------------------------------------

/* const Section4 = ({content}) => (
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
        source={homeContent.sectionFour.imgOne}
        imageWidth={homeContent.sectionFour.imgOneWidth}
      />
    </$Images>
  </$SectionRow>
) */

// -----------------------------------------------------------------------------


const Home = () => {
  Nexus.create({
    containerId: 'nexusContainer',
    chometId: 'demo',
    configId: 'rooms'
  });
  return (
    <$Main>
      <$Hero>
        <$TextWrapper>
          <$CatchPhrase>WOW your users with beautiful and exclusive 3D data visualisation widgets,</$CatchPhrase>
          <$Paragraph>making any important situation graspable in an instant, whether ran live or played back.</$Paragraph>
          <BgPattern />
        </$TextWrapper>
        <$Nexus id="nexusContainer"/>
      </$Hero>

      <Section1 content={homeContent.sectionOne} />
      <Section2 content={homeContent.sectionTwo} />
      <Section3 content={homeContent.sectionThree} />

    </$Main>
  );
};

export default Home;
