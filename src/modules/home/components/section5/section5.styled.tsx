import styled from 'styled-components';
import bg from '@/assets/home/section5/bg.png';
export const Wrapper = styled.div`
  background-image: url(${bg});
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 800px;
  .section5 {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;
    padding: 80px 0px;
    @media screen and (max-width: 768px) {
      min-height: 640px;
    }
    img {
    }
  }
`;
