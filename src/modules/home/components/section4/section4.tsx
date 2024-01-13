import { PrimaryButton, SecondaryButton } from '@/components/button/button.styled';
import { Wrapper } from './section4.styled';
import React, { useRef } from 'react';
// import gsap from 'gsap';
import bg from '@/assets/home/section4/img.png';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import { Description, Title } from '@/components/text/text.styled';

export const Section4 = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <div className='section4'>
          <Title>Shares Generation Event</Title>
          <Description
            style={{
              maxWidth: '790px'
            }}
          >
            Users' shares can be pre-minted and made tradable at any time when their total subscribed value surpasses
            $10,000.
          </Description>
          <img src={bg} alt='' />
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
