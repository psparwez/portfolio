import { ICONS } from './icons';
import SectionHeading from './section-heading';
import ServiceItemLists from './service-item-lists';

export default function ServicesSection() {
  return (
    <section
      aria-labelledby='my-services'
      className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-7.5 overflow-visible'
    >
      <div className='relative h-auto w-full flex-none'>
        <SectionHeading
          title='My Services'
          description='Formulating comprehensive strategies to meet your design goals and exceed expectations.'
          icon={
            <ICONS.zap
              width={30}
              height={30}
            />
          }
        />
      </div>
      <ServiceItemLists />
    </section>
  );
}
