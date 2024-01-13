import { PrimaryButton, SecondaryButton } from '@/components/button/button.styled';
import { Wrapper } from './section6.styled';
import React, { useRef } from 'react';
// import gsap from 'gsap';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import { Description, Title } from '@/components/text/text.styled';

export const Section6 = () => {
  return (
    <Wrapper>
      <WrapperContent style={{ height: '100%' }}>
        <div className='section6'>
          <Title>Earn points. Claim $XCL</Title>
          <Description
            style={{
              maxWidth: '790px'
            }}
          >
            Every interaction you make on the platform, from signing up to engaging with content, earns you valuable
            POINTs for future usage.
          </Description>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
