import { HeroContainer, HeroMain } from './hero-container';

export default function HeroSection() {
  return (
    <div className='relative flex h-min w-full flex-none flex-col flex-nowrap justify-start gap-7.5 overflow-visible p-0 pt-20 sm:pt-0'>
      <HeroMain />
      <HeroContainer />
    </div>
  );
}
