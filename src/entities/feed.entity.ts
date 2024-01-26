export interface IFeed {
  name?: string;
  time?: string;
  content?: string;
  img: boolean;
  avatar?: string;
  numOfActions?: {
    love: number;
    comment: number;
    share: number;
    gift: number;
  };
}
