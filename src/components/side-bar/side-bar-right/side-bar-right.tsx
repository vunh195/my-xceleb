import { Head1, Head2, LabelText, ValueText } from '@/components/text/text.styled';
import { Wrapper } from './side-bar-right.styled';

export const SideBarRightComponent = () => {
  return (
    <Wrapper>
      <div className='side-bar-right-content'>
        <div className='section-subcribe'>
          <Head1>Subcribe to premium</Head1>
          <Head2>Enjoy the privileges from the top celebrities!</Head2>
          <div className='btn-buy-a-share'>Buy a share</div>
        </div>
        <div className='break-line'></div>
        <div className='section-hot-topic'>
          <Head1>Hot topic</Head1>
          <div className='row'>
            <ValueText>Wibuuuuu</ValueText>
            <LabelText>12k posts</LabelText>
          </div>
          <div className='row'>
            <ValueText>Pretty Girl</ValueText>
            <LabelText>12k posts</LabelText>
          </div>
          <div className='row'>
            <ValueText>Bella Poach dance</ValueText>
            <LabelText>12k posts</LabelText>
          </div>
          <div className='row'>
            <ValueText>Hot clip 15min</ValueText>
            <LabelText>12k posts</LabelText>
          </div>
          <div className='row'>
            <ValueText>Chat GPT</ValueText>
            <LabelText>12k posts</LabelText>
          </div>
          <div className='row'>
            <ValueText>Shiba coin</ValueText>
            <LabelText>12k posts</LabelText>
          </div>
        </div>
        <div className='break-line'></div>
        <div className='section-you-know'>
          <Head1>People you know</Head1>
          <div className='suggestion'>
            <div className='suggestion-left'>
              <div className='avatar'>
                <img src='' alt='avatar' />
              </div>
              <div className='names'>
                <div className='name'>Eliza Ibarra ONLYF</div>
                <div className='time'>@elizaibarraofficial</div>
              </div>
            </div>
            <div className='suggestion-right'>Follow</div>
          </div>
          <div className='suggestion'>
            <div className='suggestion-left'>
              <div className='avatar'>
                <img src='' alt='avatar' />
              </div>
              <div className='names'>
                <div className='name'>Eliza Ibarra ONLYF</div>
                <div className='time'>@elizaibarraofficial</div>
              </div>
            </div>
            <div className='suggestion-right'>Follow</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
