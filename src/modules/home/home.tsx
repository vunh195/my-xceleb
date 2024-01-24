import useLocoScroll from '@/hooks/use-locomotive';
import { Section1 } from './components/section1/section1';
import { Section2 } from './components/section2/section2';
import { Section3 } from './components/section3/section3';
import { Section5 } from './components/section5/section5';
import { Section6 } from './components/section6/section6';
import { Wrapper } from './home.styled';
import { Section4 } from './components/section4/section4';
import { Footer, Header } from '@/components';
import { Section7 } from './components/section7/section7';
export const Home = () => {
  useLocoScroll();

  return (
    <Wrapper id='home' data-scoll-container>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </Wrapper>
  );
};
