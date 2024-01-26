import { Head1, Title } from '@/components/text/text.styled';
import { Wrapper } from './top-accounts.styled';
import avatar from '@/assets/feed/account-avatar.png';
export const TopAccounts = () => {
  return (
    <Wrapper>
      <Head1>Top accounts</Head1>
      <div className='accounts'>
        <div className='account'>
          <div className='account-avatar'>
            <img src={avatar} alt='' />
          </div>
          <div className='account-info'>
            <div className='name'>Bella Poach</div>
            <div className='id'>@bella.p0ach.cute</div>
            <div className='break-line'></div>
            <div className='stats'>
              <div className='coin'>
                <span>250 </span>Xcoin
              </div>
              <div className='vol'>Vol: 164.5k</div>
            </div>
          </div>
        </div>{' '}
        <div className='account'>
          <div className='account-avatar'>
            <img src={avatar} alt='' />
          </div>
          <div className='account-info'>
            <div className='name'>Bella Poach</div>
            <div className='id'>@bella.p0ach.cute</div>
            <div className='break-line'></div>
            <div className='stats'>
              <div className='coin'>
                <span>250 </span>Xcoin
              </div>
              <div className='vol'>Vol: 164.5k</div>
            </div>
          </div>
        </div>{' '}
        <div className='account'>
          <div className='account-avatar'>
            <img src={avatar} alt='' />
          </div>
          <div className='account-info'>
            <div className='name'>Bella Poach</div>
            <div className='id'>@bella.p0ach.cute</div>
            <div className='break-line'></div>
            <div className='stats'>
              <div className='coin'>
                <span>250 </span>Xcoin
              </div>
              <div className='vol'>Vol: 164.5k</div>
            </div>
          </div>
        </div>{' '}
        <div className='account'>
          <div className='account-avatar'>
            <img src={avatar} alt='' />
          </div>
          <div className='account-info'>
            <div className='name'>Bella Poach</div>
            <div className='id'>@bella.p0ach.cute</div>
            <div className='break-line'></div>
            <div className='stats'>
              <div className='coin'>
                <span>250 </span>Xcoin
              </div>
              <div className='vol'>Vol: 164.5k</div>
            </div>
          </div>
        </div>{' '}
        <div className='account'>
          <div className='account-avatar'>
            <img src={avatar} alt='' />
          </div>
          <div className='account-info'>
            <div className='name'>Bella Poach</div>
            <div className='id'>@bella.p0ach.cute</div>
            <div className='break-line'></div>
            <div className='stats'>
              <div className='coin'>
                <span>250 </span>Xcoin
              </div>
              <div className='vol'>Vol: 164.5k</div>
            </div>
          </div>
        </div>
        <div className='account'>
          <div className='account-avatar'>
            <img src={avatar} alt='' />
          </div>
          <div className='account-info'>
            <div className='name'>Bella Poach</div>
            <div className='id'>@bella.p0ach.cute</div>
            <div className='break-line'></div>
            <div className='stats'>
              <div className='coin'>
                <span>250 </span>Xcoin
              </div>
              <div className='vol'>Vol: 164.5k</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
