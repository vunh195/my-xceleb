import { PrimaryButton, SecondaryButton } from '@/components/button/button.styled';
import { Wrapper } from './section5.styled';
import React, { useRef } from 'react';
// import gsap from 'gsap';
import bg from '@/assets/home/section5/img.png';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import { Title } from '@/components/text/text.styled';

export const Section5 = () => {
  return (
    <Wrapper>
      <WrapperContent style={{ height: '100%' }}>
        <div className='section5'>
          <Title>Sounds fun? Get started today!</Title>
          <PrimaryButton>Sign up</PrimaryButton>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
