import React from 'react';
import styled, {css} from 'styled-components';
import homeContent from '../../../content/home.json';
import ImageParallax from '../../components/imageParallax';
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
  background: rgb(67, 98, 174);
  background: linear-gradient(
    149deg,
    rgba(67, 98, 174, 1) 0%,
    rgba(35, 153, 152, 1) 50%,
    rgba(66, 182, 73, 1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media ${device.tablet} {
    //background-color: #ddeef5;
    background: rgb(221, 238, 245);
    background: linear-gradient(
      156deg,
      rgba(221, 238, 245, 1) 0%,
      rgba(198, 208, 210, 1) 100%
    );
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
  box-shadow: 11px 9px 67px 1px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 11px 9px 67px 1px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 11px 9px 67px 1px rgba(0, 0, 0, 0.59);

  @media ${device.mobileL} {
    height: 350px;
  }

  @media ${device.tablet} {
    width: 40%;
    height: 50%;
  }
`;

const $Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 250px;
  max-width: 100vw;
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
  <$Text
    center={centerTitle}
    changeOrder={changeOrder}
    alignLeft={alignLeft}
    noMargin={noMargin}
  >
    <$Title>{title}</$Title>
    <$Description center={centerDescription}>{description}</$Description>
  </$Text>
);

// -----------------------------------------------------------------------------

const Section1 = () => (
  <$Section>
    <Title
      title={homeContent.sections[0].title}
      description={homeContent.sections[0].description}
    />
    <ImageParallax
      offset={1500}
      translate="from-right"
      source="https://nsa40.casimages.com/img/2021/05/28/210528124401854710.png"
      imageMaxWidth="50%"
    />
  </$Section>
);

// -----------------------------------------------------------------------------

const Section2 = () => (
  <$Section>
    <ImageParallax
      offset={1500}
      translate="from-left"
      source="https://nsa40.casimages.com/img/2021/05/28/210528124401854710.png"
      imageMaxWidth="50%"
    />
    <Title
      title={homeContent.sections[1].title}
      description={homeContent.sections[1].description}
    />
  </$Section>
);

// -----------------------------------------------------------------------------

const Section3 = ({content}) => (
  <$Section>
    <Title
      title={homeContent.sections[2].title}
      description={homeContent.sections[2].description}
    />
    <ImageParallax
      offset={1500}
      translate="from-right"
      source="https://nsa40.casimages.com/img/2021/05/28/210528124401854710.png"
      imageMaxWidth="50%"
    />
  </$Section>
);

// -----------------------------------------------------------------------------

/* const Section4 = ({content}) => (
  <$Section>
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
  </$Section>
) */

// -----------------------------------------------------------------------------

const Home = () => {
  Nexus.create({
    containerId: 'nexusContainer',
    clientId: 'demo',
    configId: 'rooms'
  });
  return (
    <$Main>
      <$Hero>
        <$TextWrapper>
          <$CatchPhrase>{homeContent.catchPhrase}</$CatchPhrase>
          <$Paragraph>{homeContent.subcatchPhrase}</$Paragraph>
          <BgPattern />
        </$TextWrapper>
        <$Nexus id="nexusContainer" />
      </$Hero>

      <Section1 />
      <Section2 />
      <Section3 />
    </$Main>
  );
};

export default Home;
