import { SideBarLeftComponent } from '@/components/side-bar/side-bar-left/side-bar-left';
import { Wrapper } from './feed.styled';
import { SideBarRightComponent } from '@/components/side-bar/side-bar-right/side-bar-right';
import React from 'react';
import avatar from '@/assets/feed/avatar.png';
import content from '@/assets/feed/content.png';

export const Feed = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <Wrapper>
      <SideBarLeftComponent />
      <div className='feeds-content'>
        <div className='tabs'>
          <div className={activeTab === 0 ? 'tab active' : 'tab'} onClick={() => setActiveTab(0)}>
            Trending
          </div>
          <div className={activeTab === 1 ? 'tab active' : 'tab'} onClick={() => setActiveTab(1)}>
            Following
          </div>
        </div>
        <div className='feed'>
          <div className='feed-header'>
            <div className='feed-header-info'>
              <div className='avatar'>
                <img src={avatar} alt='avatar' />
              </div>
              <div className='names'>
                <div className='name'>Eliza Ibarra ONLYF</div>
                <div className='time'>@elizaibarraofficial • 8hr ago</div>
              </div>
            </div>
            <div className='feed-header-more'>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
                <path
                  d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
          </div>
          <div className='feed-content'>
            <div className='txt'>Felling so lonely in my mansion. I need a man.</div>
            <img src={content} alt='' />
          </div>
          <div className='feed-actions'>
            <div className='react-actions'>
              <div>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                  <path
                    d='M13.8933 3.07333C13.5528 2.73267 13.1485 2.46243 12.7036 2.27805C12.2586 2.09368 11.7817 1.99878 11.3 1.99878C10.8183 1.99878 10.3414 2.09368 9.89643 2.27805C9.45146 2.46243 9.04717 2.73267 8.70667 3.07333L8 3.78L7.29333 3.07333C6.60554 2.38554 5.67269 1.99914 4.7 1.99914C3.72731 1.99914 2.79446 2.38554 2.10666 3.07333C1.41887 3.76112 1.03247 4.69397 1.03247 5.66666C1.03247 6.63935 1.41887 7.5722 2.10666 8.26L2.81333 8.96666L8 14.1533L13.1867 8.96666L13.8933 8.26C14.234 7.91949 14.5042 7.51521 14.6886 7.07023C14.873 6.62526 14.9679 6.14832 14.9679 5.66666C14.9679 5.185 14.873 4.70807 14.6886 4.26309C14.5042 3.81812 14.234 3.41383 13.8933 3.07333Z'
                    stroke='#9C9C9C'
                    stroke-width='1.33333'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>1,249</span>
              </div>
              <div>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                  <path
                    d='M14 7.66669C14.0023 8.5466 13.7967 9.41461 13.4 10.2C12.9296 11.1412 12.2065 11.9328 11.3116 12.4862C10.4168 13.0396 9.3855 13.3329 8.33333 13.3334C7.45342 13.3356 6.58541 13.1301 5.8 12.7334L2 14L3.26667 10.2C2.86995 9.41461 2.66437 8.5466 2.66667 7.66669C2.66707 6.61452 2.96041 5.58325 3.51381 4.68839C4.06722 3.79352 4.85884 3.0704 5.8 2.60002C6.58541 2.20331 7.45342 1.99772 8.33333 2.00002H8.66667C10.0562 2.07668 11.3687 2.66319 12.3528 3.64726C13.3368 4.63132 13.9233 5.94379 14 7.33335V7.66669Z'
                    stroke='#9C9C9C'
                    stroke-width='1.33333'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>22</span>
              </div>
              <div>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                  <path
                    d='M2.66675 8V13.3333C2.66675 13.687 2.80722 14.0261 3.05727 14.2761C3.30732 14.5262 3.64646 14.6667 4.00008 14.6667H12.0001C12.3537 14.6667 12.6928 14.5262 12.9429 14.2761C13.1929 14.0261 13.3334 13.687 13.3334 13.3333V8'
                    stroke='#9C9C9C'
                    stroke-width='1.33333'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M10.6666 4.00004L7.99992 1.33337L5.33325 4.00004'
                    stroke='#9C9C9C'
                    stroke-width='1.33333'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M8 1.33337V10'
                    stroke='#9C9C9C'
                    stroke-width='1.33333'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <span>33</span>
              </div>
              <div>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
                  <g clip-path='url(#clip0_200_5084)'>
                    <path
                      d='M13.3334 8V14.6667H2.66675V8'
                      stroke='#9C9C9C'
                      stroke-width='1.33333'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M14.6666 4.66663H1.33325V7.99996H14.6666V4.66663Z'
                      stroke='#9C9C9C'
                      stroke-width='1.33333'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M8 14.6666V4.66663'
                      stroke='#9C9C9C'
                      stroke-width='1.33333'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M7.99992 4.66671H4.99992C4.55789 4.66671 4.13397 4.49111 3.82141 4.17855C3.50885 3.86599 3.33325 3.44207 3.33325 3.00004C3.33325 2.55801 3.50885 2.13409 3.82141 1.82153C4.13397 1.50897 4.55789 1.33337 4.99992 1.33337C7.33325 1.33337 7.99992 4.66671 7.99992 4.66671Z'
                      stroke='#9C9C9C'
                      stroke-width='1.33333'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M8 4.66671H11C11.442 4.66671 11.866 4.49111 12.1785 4.17855C12.4911 3.86599 12.6667 3.44207 12.6667 3.00004C12.6667 2.55801 12.4911 2.13409 12.1785 1.82153C11.866 1.50897 11.442 1.33337 11 1.33337C8.66667 1.33337 8 4.66671 8 4.66671Z'
                      stroke='#9C9C9C'
                      stroke-width='1.33333'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_200_5084'>
                      <rect width='16' height='16' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                <span>220</span>
              </div>
            </div>
            <div className='gift-action'>
              <span>Gift</span>
            </div>
          </div>
        </div>
      </div>
      <SideBarRightComponent />
    </Wrapper>
  );
};
