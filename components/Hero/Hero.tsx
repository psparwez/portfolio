import HeroContainer from './hero-container';
import HeroMain from './hero-main';

export default function Hero() {
  return (
    <div className='relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-[30px] overflow-visible p-0 pt-20 sm:pt-0'>
      <HeroMain />
      <HeroContainer />
    </div>
  );
}
