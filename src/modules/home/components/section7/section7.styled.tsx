import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 80px 0px;
  .section7 {
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
    .questions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 24px;
      column-gap: 40px;
      .question {
        min-width: 500px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 16px 21px 32px;
        border-radius: 64px;

        border: 2px solid rgba(255, 255, 255, 0.2);
        background: linear-gradient(144deg, rgba(219, 59, 174, 0.1) 19.19%, rgba(58, 42, 242, 0.1) 75.02%);

        color: var(--WHITE, #fff);
        font-family: Avenir;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }
  }
`;
