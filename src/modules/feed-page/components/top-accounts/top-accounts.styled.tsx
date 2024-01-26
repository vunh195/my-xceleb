import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 24px 0px;
  gap: 16px;
  .accounts {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    width: 100%;
    .account {
      border-radius: 32px;
      background: #1e1f28;
      display: flex;
      padding: 16px;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      width: 100%;
      &-avatar {
        width: 100%;
        border-radius: 32px;
        img {
          width: 100%;
        }
      }
      &-info {
        font-weight: 700;
        letter-spacing: -0.056px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        width: 100%;
        .name {
          font-size: 14px;
          color: #fff;
        }
        .id {
          color: #9c9c9c;
        }
        .break-line {
          height: 1px;
          width: 100%;
          background: #343434;
        }
        .stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #9c9c9c;
          font-weight: 500;
          line-height: 16px; /* 133.333% */
          font-size: 12px;
          letter-spacing: -0.048px;
          width: 100%;

          .coin {
            display: flex;
            align-items: center;
            gap: 4px;
            span {
              font-weight: 700;
              color: #fff;
            }
          }
        }
      }
    }
  }
`;
