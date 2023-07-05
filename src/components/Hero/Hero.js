import React from 'react';
import styled from 'styled-components/macro';

const Hero = () => {
  return (
    <Wrapper>
      <HeroImage alt="Hero image - A curious looking cat with beautiful blue eyes looking at you." src="/images/hero-img.avif" />
      <Swoop src="/swoop.svg" role="image" alt="A Black wavy background" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
  // note to self. remove whatever below
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  //height: 500px;
  //max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
