import ExperienceItem from './experience-item';
import { ICONS } from './icons';
import SectionHeading from './section-heading';

export default function ExperienceSection() {
  return (
    <div
      className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-7.5 overflow-visible'
      aria-label='My experience '
    >
      <div className='relative h-auto w-full flex-none'>
        <SectionHeading
          title='My experience'
          description='Navigating diverse environments with adaptability and expertise for holistic solutions.'
          icon={
            <ICONS.briefcase
              width={30}
              height={30}
            />
          }
        />
      </div>
      <ExperienceItem />
    </div>
  );
}
