import { ICONS } from './icons';
import SectionHeading from './section-heading';
import StackLists from './stack-lists';

export default function StackSection() {
  return (
    <section
      className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-7.5 overflow-visible'
      aria-labelledby='my-stacks'
    >
      <div className='relative h-auto w-full flex-none'>
        <SectionHeading
          title='My Stacks'
          description='Commitment to staying updated with the latest design trends and techniques.'
          icon={
            <ICONS.stack
              width={30}
              height={30}
            />
          }
        />
      </div>

      <StackLists />
    </section>
  );
}
