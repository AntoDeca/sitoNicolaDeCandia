import React from 'react';
import styled, { keyframes } from 'styled-components';
function BlobAnimation() {
  return <Blob />;
}

const move = keyframes`
    from{
        transform:translate(0px,-50px) rotate(-90deg)
    }

    to{
        transform: translate(50rem,10rem) rotate(-10deg);
    }
`;

const Blob = styled.div`
  position: absolute;
  width: 50rem;
  height: 50rem;
  background-color: linear-gradient(
    180deg,
    rgba(47, 184, 255, 0.42) 31.7%,
    #9eecd9 100%
  );
  z-index: 50;
  mix-blend-mode: color-dodge;
  animation: ${move} 25s infinite alternate;
`;

export default BlobAnimation;
