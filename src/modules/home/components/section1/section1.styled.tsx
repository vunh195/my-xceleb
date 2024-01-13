import styled from 'styled-components';
import txt from '@/assets/home/section1/bg-text.png';
import bg from '@/assets/home/section1/img.png';
export const Wrapper = styled.div`
  background-image: url(${bg});
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-position: 0 120%;
  background-size: cover;
  background-repeat: no-repeat;
  .section1 {
    margin-top: 165px;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 960px;
    gap: 40px;
    @media screen and (max-width: 768px) {
      min-height: 640px;
    }
    .bigtitle {
      background-image: url(${txt});
      color: #fff;
      font-family: Alumni Sans;
      font-size: 360px;
      font-style: normal;
      font-weight: 900;
      line-height: 120%; /* 432px */
      background-size: cover;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
