import styled from 'styled-components';

export const PrimaryButton = ({ children, w }: { children: any; w?: number }) => {
  return <PrimaryBtn w={w}>{children}</PrimaryBtn>;
};
export const SecondaryButton = ({ children, w }: { children: any; w?: number }) => {
  return (
    <SecondButton w={w}>
      <div className='layer1'>
        <div className='layer2'>
          <div className='layer3'>{children}</div>
        </div>
      </div>
    </SecondButton>
  );
};
export const PrimaryBtn = styled.div<{ w: any }>`
  width: fit-content;
  border-radius: 40px;
  background: #ff31a7;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  padding: 16px 40px;
  cursor: pointer;

  color: #fff;
  text-align: center;
  font-family: Avenir;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 30px */
`;

export const SecondButton = styled.div<{ w: any }>`
  width: ${(props) => (props.w ? `${props.w}px` : ' auto')};
  height: 48px;
  border-radius: 6px;
  background: #090910;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  .layer1 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 97%;
    z-index: 1;
    border-radius: 6px;
    background: #b3b9d1;
    .layer2 {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 97%;
      height: 97%;
      z-index: 2;
      border-radius: 4px;
      background: #fff;
      color: #4b1606;
      .layer3 {
        border-radius: 4px;
        background: #dae0ea;
        position: relative;
        z-index: 3;
        width: 96%;
        height: 95%;

        display: flex;
        align-items: center;
        justify-content: center;

        /* B16 */
        font-family: Quicksand;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.32px;
      }
    }
  }
`;
