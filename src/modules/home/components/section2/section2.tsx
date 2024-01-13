import { PrimaryButton, SecondaryButton } from '@/components/button/button.styled';
import { Wrapper } from './section2.styled';
import React, { useRef } from 'react';
// import gsap from 'gsap';
import bg from '@/assets/home/section2/img.png';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import { Description, Title } from '@/components/text/text.styled';

export const Section2 = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <div className='section2'>
          <Title>Every share is a life-time access</Title>
          <Description
            style={{
              maxWidth: '790px'
            }}
          >
            Join us in navigating the complex landscape of stardom and transforming dreams into enduring legacies.
            Welcome to the pinnacle of celebrity management excellence.
          </Description>
          <PrimaryButton>Sign up</PrimaryButton>
          <img src={bg} alt='' />
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
