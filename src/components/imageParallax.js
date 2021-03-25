import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';

// -----------------------------------------------------------------------------

const $Img = styled.img`
transition: all 0.9s ease-in-out;
${props =>
    css`
      transform: translate3D(${props.translateX}%, ${props.translateY}%, 0) rotate3d(0, 0, 1, ${props.rotate}deg)
    `};
`;

// -----------------------------------------------------------------------------

const ImageParallax = (props) => {
    const [scrollY, setScrollY] = useState(0);

    useScrollPosition(({prevPos, currPos}) => {
      setScrollY(currPos.y);
    });

    const value = scrollY + props.offset;
    let translateX = 0;
    let translateY = 0;
    let rotate = 0;
    let defaultRotate = 0;

    if (props.translate === "from-right") {
      translateX = Math.max(0, Math.min(15, value));
    } else if (props.translate === "from-left") {
      translateX = `-${Math.max(0, Math.min(15, value))}`;
    } else if (props.translate === "from-below") {
      translateY = Math.max(0, Math.min(15, value));
    } else if (props.translate === "from-above") {
      translateY = `-${Math.max(0, Math.min(15, value))}`;
    };

    if (props.rotate === "clockwise" && !props.defaultrotation) {
        rotate = `-${Math.max(0, Math.min(20, value))}`;
    }
    else if (props.rotate === "anticlockwise") {
        rotate = Math.max(0, Math.min(20, value));
    };

    if (props.defaultrotation && props.rotate === "clockwise") {
        rotate = `-${Math.max(15, Math.min(35, value))}`;
        console.log(props.defaultrotation, rotate, value)
    }


    return (
      <$Img src={props.source} translateX={translateX} translateY={translateY} rotate={rotate} width={props.imageWidth}/>
    );
  };

  export default ImageParallax;