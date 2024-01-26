import { SearchOutlined } from '@ant-design/icons';
import { Wrapper } from './buy-creator-point.styled';
import { Head1, Head2 } from '@/components/text/text.styled';

export const BuyCreatorPoint = () => {
  return (
    <Wrapper>
      <Head1>Buy Creator Coins</Head1>
      <Head2>All creators have a coin. Buy your favorites and get on their team!</Head2>
      <div className='search-wrapper'>
        <input type='text' placeholder='search' name='' id='' />
        <SearchOutlined style={{ color: 'white' }} />
      </div>
      <div className='creators'>
        <div className='creator'>
          <div className='creator-left'>
            <div className='avatar'>
              <img src='' alt='avatar' />
            </div>
            <div className='names'>
              <div className='name'>Eliza Ibarra ONLYF</div>
              <div className='btn-follow'>Follow</div>
            </div>
          </div>
          <div className='creator-right'>
            <div className='price'>~$105.32</div>
            <div className='btn-buy'>Buy</div>
          </div>
        </div>
        <div className='creator'>
          <div className='creator-left'>
            <div className='avatar'>
              <img src='' alt='avatar' />
            </div>
            <div className='names'>
              <div className='name'>Eliza Ibarra ONLYF</div>
              <div className='btn-follow'>Follow</div>
            </div>
          </div>
          <div className='creator-right'>
            <div className='price'>~$105.32</div>
            <div className='btn-buy'>Buy</div>
          </div>
        </div>
        <div className='creator'>
          <div className='creator-left'>
            <div className='avatar'>
              <img src='' alt='avatar' />
            </div>
            <div className='names'>
              <div className='name'>Eliza Ibarra ONLYF</div>
              <div className='btn-follow'>Follow</div>
            </div>
          </div>
          <div className='creator-right'>
            <div className='price'>~$105.32</div>
            <div className='btn-buy'>Buy</div>
          </div>
        </div>
        <div className='creator'>
          <div className='creator-left'>
            <div className='avatar'>
              <img src='' alt='avatar' />
            </div>
            <div className='names'>
              <div className='name'>Eliza Ibarra ONLYF</div>
              <div className='btn-follow'>Follow</div>
            </div>
          </div>
          <div className='creator-right'>
            <div className='price'>~$105.32</div>
            <div className='btn-buy'>Buy</div>
          </div>
        </div>
        <div className='creator'>
          <div className='creator-left'>
            <div className='avatar'>
              <img src='' alt='avatar' />
            </div>
            <div className='names'>
              <div className='name'>Eliza Ibarra ONLYF</div>
              <div className='btn-follow'>Follow</div>
            </div>
          </div>
          <div className='creator-right'>
            <div className='price'>~$105.32</div>
            <div className='btn-buy'>Buy</div>
          </div>
        </div>
      </div>
      <div className='break-line'></div>
      <div className='btn-load-more'>Load more</div>
    </Wrapper>
  );
};
