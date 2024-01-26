import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 30%;
  min-height: 100vh;
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
    gap: 24px;
    .break-line {
      height: 1px;
      width: 100%;
      background: #343434;
    }
    .section-subcribe {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .btn-buy-a-share {
        display: inline-flex;
        height: 48px;
        padding: 12px 16px;
        justify-content: center;
        align-items: center;
        gap: 4px;
        flex-shrink: 0;
        border-radius: 24px;
        background: #fe0092;

        color: #fff;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: -0.064px;

        margin-top: 24px;
        cursor: pointer;
      }
    }
    .section-hot-topic {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      .row {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .section-you-know {
      display: flex;
      flex-direction: column;
      gap: 16px;
      .suggestion {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        &-left {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #fff;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: 20px; /* 142.857% */
          letter-spacing: -0.056px;
          .names {
            display: flex;
            flex-direction: column;
            .name {
            }
            .time {
              color: #9c9c9c;
              font-size: 14px;
              font-weight: 500;
            }
          }
        }
        &-right {
          cursor: pointer;
          display: inline-flex;
          padding: 3px 18px;
          justify-content: center;
          align-items: center;
          border-radius: 16px;
          background: #343434;

          color: #fff;
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: -0.056px;
        }
      }
    }
  }
`;
