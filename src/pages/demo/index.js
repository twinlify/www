import React from 'react';
import styled, {css} from 'styled-components';
import Button from '../../components/button';
import demoContent from '../../../content/demo.json';
import ImageParallax from '../../components/imageParallax';

const $Main = styled.main`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const $FirstPageSimulation = styled.div`
  height: 90vh;
  width: 100vw;
  background-image: url('https://images.unsplash.com/photo-1553341640-6b28ff92098a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
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
`;
const $WrapperImgStyle2 = styled($Images)`
  & img:not(:last-child) {
    margin-right: 3rem;
  }
`;
const $WrapperImgStyle3 = styled($Images)`
  position: relative;
  & img:last-child {
    position: absolute;
    right: -175px;
    top: -250px;
  }
`;

// -----------------------------------------------------------------------------

const Title = ({
  title,
  description,
  actionName,
  centerDescription = false,
  centerTitle = false,
  changeOrder = false
}) => (
  <$Text center={centerTitle} changeOrder={changeOrder}>
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
    <$WrapperImgStyle2>
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
    </$WrapperImgStyle2>
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

const Demo = () => {
  return (
    <$Main>
      <$FirstPageSimulation />

      <Section1 content={demoContent.sectionOne} />
      <Section2 content={demoContent.sectionTwo} />

      <$SectionColumn>
        <$Text alignLeft>
          <$Title>{demoContent.sectionThree.title}</$Title>
          <$Description>{demoContent.sectionThree.description}</$Description>
          <Button>{demoContent.sectionThree.button}</Button>
        </$Text>
        <$WrapperImgStyle3>
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
        </$WrapperImgStyle3>
      </$SectionColumn>

      <$SectionRow>
        <$Text>
          <$Title>{demoContent.sectionFour.title}</$Title>
          <$Description>{demoContent.sectionFour.description}</$Description>
          <Button>{demoContent.sectionFour.button}</Button>
        </$Text>
        <$Images>
          <ImageParallax
            offset={3400}
            translate="from-below"
            source={demoContent.sectionFour.imgOne}
            imageWidth={demoContent.sectionFour.imgOneWidth}
          />
        </$Images>
      </$SectionRow>

      <$SectionRow>
        <$Text>
          <$Title>{demoContent.sectionFive.title}</$Title>
          <$Description>{demoContent.sectionFive.description}</$Description>
          <Button>{demoContent.sectionFive.button}</Button>
        </$Text>
        <$Images>
          <ImageParallax
            offset={4100}
            translate="from-left"
            source={demoContent.sectionFive.imgOne}
            imageWidth={demoContent.sectionFive.imgOneWidth}
          />
        </$Images>
      </$SectionRow>

      <$SectionRow>
        <$Text>
          <$Title>{demoContent.sectionSix.title}</$Title>
          <$Description>{demoContent.sectionSix.description}</$Description>
          <Button>{demoContent.sectionSix.button}</Button>
        </$Text>
        <$Images>
          <ImageParallax
            offset={4900}
            translate="from-left"
            source={demoContent.sectionSix.imgOne}
            imageWidth={demoContent.sectionSix.imgOneWidth}
          />
        </$Images>
      </$SectionRow>
    </$Main>
  );
};

export default Demo;
