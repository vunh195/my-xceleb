import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .section3 {
    display: flex;
    align-items: center;
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
