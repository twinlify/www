import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import {device} from '../style/breakpoints';

// -----------------------------------------------------------------------------

const $Img = styled.img`
  transition: all 0.9s ease-in-out;
  @media ${device.laptop}  {
    ${props =>
      css`
        transform: translate3D(${props.translateX}%, ${props.translateY}%, 0)
        rotate3d(0, 0, 1, ${props.rotate}deg);
        transition: all 0.9s ease-in-out;
      `};
  }
  width: 80vw;
  max-width: ${props => props.imageMaxWidth};
  transition: unset;
  @media ${device.laptop} {
    width: 50%;
  }`;

// -----------------------------------------------------------------------------

const ImageParallax = props => {
  const [scrollY, setScrollY] = useState(0);
  useScrollPosition(({prevPos, currPos}) => {
    setScrollY(currPos.y);
  });

  const value = scrollY + props.offset;
  let translateX = 0;
  let translateY = 0;
  let rotate = 0;

  if (props.translate === 'from-right') {
    translateX = Math.max(0, Math.min(15, value));
  } else if (props.translate === 'from-left') {
    translateX = `-${Math.max(0, Math.min(15, value))}`;
  } else if (props.translate === 'from-below') {
    translateY = Math.max(0, Math.min(15, value));
  } else if (props.translate === 'from-above') {
    translateY = `-${Math.max(0, Math.min(15, value))}`;
  }

  if (props.rotate === 'clockwise' && !props.defaultrotation) {
    rotate = `-${Math.max(0, Math.min(20, value))}`;
  } else if (props.rotate === 'anticlockwise') {
    rotate = Math.max(0, Math.min(20, value));
  }

  if (props.defaultrotation && props.rotate === 'clockwise') {
    rotate = `-${Math.max(15, Math.min(35, value))}`;
  }

  return (
    <$Img
      src={props.source}
      translateX={translateX}
      translateY={translateY}
      rotate={rotate}
      imageHeight={props.imageHeight}
      imageWidth={props.imageWidth}
      imageMaxWidth={props.imageMaxWidth}
      notOnMobile={props.notOnMobile}
      mobileStyle={props.mobileStyle}
    />
  );
};

export default ImageParallax;
