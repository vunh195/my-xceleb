import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 32px;
  background: #1e1f28;
  padding: 24px;
  width: 100%;
  gap: 14px;
  margin: 24px 0px;
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
    img {
      width: 100%;
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
`;
