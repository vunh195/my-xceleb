import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 35%;
  height: 100vh;
  padding: 40px;
  gap: 24px;

  color: #9c9c9c;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.064px;

  border-left: 2px solid #1e1f28;

  .side-bar-right-content {
    display: flex;
    flex-direction: column;
    .logo {
    }
    .navs {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .nav {
        width: 100%;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 16px;
        &.active {
          border-radius: 12px;
          background: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
`;
