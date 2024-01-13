import { PrimaryButton, SecondaryButton } from '@/components/button/button.styled';
import { Wrapper } from './section3.styled';
import React, { useRef } from 'react';
// import gsap from 'gsap';
import bg from '@/assets/home/section3/img.png';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import { Description, Title } from '@/components/text/text.styled';

export const Section3 = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <div className='section3'>
          <Title>Incentives, aligned</Title>
          <Description
            style={{
              maxWidth: '790px'
            }}
          >
            Fantech brings people together with aligned incentives. Discover a platform where your support is rewarded,
            your voice matters, and your network thrives.
          </Description>
          <img src={bg} alt='' />
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
