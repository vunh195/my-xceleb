import { PrimaryButton, SecondaryButton } from '@/components/button/button.styled';
import { Wrapper } from './section7.styled';
import React, { useRef } from 'react';
// import gsap from 'gsap';
import { WrapperContent } from '@/components/wrapper-content/wrapper-content.styled';
import { Description, Title } from '@/components/text/text.styled';
import { DownOutlined } from '@ant-design/icons';

export const Section7 = () => {
  return (
    <Wrapper>
      <WrapperContent style={{ height: '100%' }}>
        <div className='section7'>
          <Title>FAQs</Title>
          <Description
            style={{
              maxWidth: '790px'
            }}
          >
            Have questions in your mind, the answers are right here
          </Description>
          <div className='questions'>
            <div className='question'>
              <span>What does the roadmap look like?</span>
              <DownOutlined />
            </div>
            <div className='question'>
              <span>Who is the team behind?</span>
              <DownOutlined />
            </div>
            <div className='question'>
              <span>Who is the team behind?</span>
              <DownOutlined />
            </div>
            <div className='question'>
              <span>What does the roadmap look like?</span>
              <DownOutlined />
            </div>
            <div className='question'>
              <span>What does the roadmap look like?</span>
              <DownOutlined />
            </div>
          </div>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};
