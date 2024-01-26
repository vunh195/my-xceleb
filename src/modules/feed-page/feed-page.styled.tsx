import styled from 'styled-components';
export const Wrapper = styled.div`
  background: #15151d;
  display: flex;
  .feeds-content {
    padding: 40px 85px;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    .tabs {
      display: flex;
      border-radius: 32px;
      background: #1e1f28;
      padding: 4px;
      margin-bottom: 47px;
      .tab {
        color: #9c9c9c;
        cursor: pointer;

        font-size: 14px;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.056px;

        border-radius: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 11px 42px 11px 43px;
        transition: all 0.3s;

        &.active {
          background: #383944;
          color: #fff;
        }
      }
    }

    .break-line {
      height: 1px;
      background: #343434;
      width: 100%;
    }
  }
`;
