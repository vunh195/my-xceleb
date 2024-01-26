import { SideBarLeftComponent } from '@/components/side-bar/side-bar-left/side-bar-left';
import { Wrapper } from './feed-page.styled';
import { SideBarRightComponent } from '@/components/side-bar/side-bar-right/side-bar-right';
import React from 'react';
import { Feed } from './components/feed/feed';
import { TopAccounts } from './components/top-accounts/top-accounts';
import { IFeed } from '@/entities/feed.entity';
import { BuyCreatorPoint } from './components/buy-creator-point/buy-creator-point';

export const FeedPage = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const mockdata: IFeed = {
    img: true
  };
  const mockdata2: IFeed = {
    img: false
  };
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
        <Feed data={mockdata} />
        <div className='break-line'></div>
        <TopAccounts />
        <div className='break-line'></div>
        <Feed data={mockdata2} />
        <Feed data={mockdata2} />
        <BuyCreatorPoint />
      </div>
      <SideBarRightComponent />
    </Wrapper>
  );
};
