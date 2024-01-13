import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  display: flex;
  z-index: 10;
  align-items: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
  .header {
    @media screen and (max-width: 1140px) {
      padding: 24px;
    }
    @media screen and (max-width: 475px) {
      padding: 12px 8px;
    }
    padding: 24px 136px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav {
      display: flex;
      align-items: center;
        gap: 60px;
        .nav-item {
          cursor: pointer;
          color: var(--White-w100, #fff);
          text-align: center;
          font-family: Avenir;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%; /* 21px */
        }
      }
    }
  }
`;
