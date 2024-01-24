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
    .feed {
      margin: 47px 0px;
      border-radius: 32px;
      background: #1e1f28;
      padding: 24px;
      width: 100%;
      gap: 14px;
      .feed-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        &-info {
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
        &-more {
          cursor: pointer;
        }
      }
      .feed-content {
        color: #fff;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.056px;
        .txt {
          margin-bottom: 16px;
        }
      }
      .feed-actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .react-actions {
          display: flex;
          gap: 24px;
          div {
            display: flex;
            gap: 12px;
            svg {
              cursor: pointer;
            }
            span {
              color: #fff;
              font-size: 14px;
              font-style: normal;
              font-weight: 700;
              line-height: normal;
              letter-spacing: -0.056px;
            }
          }
        }
        .gift-action {
          display: flex;
          width: 80px;
          padding: 3px 27px 3px 28px;
          justify-content: center;
          align-items: center;
          border-radius: 16px;
          background: #343434;
          cursor: pointer;

          color: #fff;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: -0.056px;
        }
      }
    }
  }
`;
