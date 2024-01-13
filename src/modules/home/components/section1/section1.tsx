import { PrimaryButton, SecondaryButton } from '@/components/button/button.styled';
import { Wrapper } from './section1.styled';
import React, { useRef } from 'react';
// import gsap from 'gsap';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import { Description } from '@/components/text/text.styled';

export const Section1 = () => {
  return (
    <Wrapper>
      <WrapperContent>
        <div className='section1'>
          <div className='bigtitle'>XCeleb</div>
          <Description
            style={{
              maxWidth: '790px'
            }}
          >
            Join us in navigating the complex landscape of stardom and transforming dreams into enduring legacies.
            Welcome to the pinnacle of celebrity management excellence.
          </Description>
          <PrimaryButton>Sign up</PrimaryButton>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
