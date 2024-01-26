import styled from 'styled-components';
export const Wrapper = styled.div`
  border-radius: 32px;
  background: #1e1f28;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  padding: 24px;
  .search-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 24px;
    background: #343434;
    padding: 7px 16px;
    input {
      all: unset;
      color: #9c9c9c;
      &::-webkit-input-placeholder {
        color: #9c9c9c;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: -0.056px;
      }
    }
  }
  .creators {
    width: 100%;
    .creator {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 16px 0px;
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
          .btn-follow {
            color: #09f;
            font-size: 14px;
            font-weight: 700;
            line-height: 20px; /* 142.857% */
            letter-spacing: -0.056px;
            cursor: pointer;
          }
        }
      }
      &-right {
        display: flex;
        align-items: center;
        gap: 16px;
        .price {
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.056px;
        }
        .btn-buy {
          display: flex;
          width: 80px;
          padding: 3px 27px;
          justify-content: center;
          align-items: center;
          border-radius: 16px;
          background: #fe0092;

          color: #fff;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: -0.056px;
        }
      }
    }
  }
  .btn-load-more {
    color: #09f;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.056px;
    cursor: pointer;
    margin: 0 auto;
  }
`;
