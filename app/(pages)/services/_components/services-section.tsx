'use client';
import { motion } from 'motion/react';

import { calendarIcon, calendarIconLight, zapIcon, zapIconLight } from '@/app/assets/assets';
import DynamicIcon from '@/components/dynamic-icon';
import MyStack from '@/components/MyStack/MyStack';
import SectionHeading from '@/components/SectionHeading';
import ShowCase from '@/components/ShowCase';
import Testimonials from '@/components/Testimonials';
import ScheduleButton from '@/components/ui/ScheduleButton';
import { myServicesPlans } from '@/data';

import InfoRow from './info-row';

export default function ServicesSection() {
  return (
    <div className='relative flex h-min w-full flex-1 flex-col flex-nowrap items-center justify-start gap-0 overflow-hidden p-0'>
      <div className='relative flex h-min w-full max-w-full flex-none flex-col flex-nowrap items-center justify-center gap-[60px] overflow-visible p-[80px_0px] sm:px-5 lg:w-[80%] lg:max-w-[750px] lg:px-0'>
        <SectionHeading
          darkImage={zapIcon}
          lightImage={zapIconLight}
          title='My Services'
          description='Formulating comprehensive strategies to meet your design goals and exceed expectations.'
        />

        <div className='relative grid h-min w-full flex-0 grid-cols-1 justify-center gap-2.5 overflow-visible p-0 lg:grid-cols-[repeat(2,minmax(50px,1fr))] lg:grid-rows-[repeat(2,min-content)]'>
          {myServicesPlans?.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              className='relative h-auto w-full place-self-start'
              key={plan.id}
            >
              <div className='flexFlow bg-very-dark-gray border-dark-gray-3 relative flex h-min place-items-end items-end gap-5 rounded-xl border p-6'>
                <div className='relative flex h-min w-full flex-col gap-4 p-0'>
                  {/* Top Section */}
                  <div className='flex h-min w-full items-center justify-between'>
                    {/* Left Section with Icon and Service */}
                    <div className='flex flex-1 items-center gap-2'>
                      <div className='bg-dark-gray-3 border-border-color flex w-auto items-center justify-center rounded-lg border p-2'>
                        <div className='aspect-square h-6 w-6 overflow-hidden'>
                          <DynamicIcon
                            width={24}
                            height={24}
                            darkImage={plan.icon}
                            lightImage={plan.lightIcon}
                            altText={plan.description}
                            className='h-full w-full object-cover object-center'
                          />
                        </div>
                      </div>

                      <div className='flex flex-1 flex-col justify-start'>
                        <p className='text-very-light-gray text-[20px] font-bold'>{plan.service}</p>
                      </div>
                    </div>

                    {/* Right Section with Price */}
                    <div className='flex items-center gap-0'>
                      <div className='flex flex-col justify-start'>
                        <p className='text-light-gray-3 text-[18px] font-semibold'>{plan.price}/</p>
                      </div>
                      <div className='flex flex-col justify-start'>
                        <p className='text-light-gray-2 text-[14px] font-medium'>hour</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section with Description */}
                  <div className='flex h-auto w-full flex-col whitespace-pre-wrap'>
                    <p className='text-light-gray-2 text-[15px] font-semibold'>
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className='border-dark-gray-3 flex h-auto w-full flex-col gap-2 rounded-xl border py-2'>
                  <InfoRow
                    label='Completed Works'
                    value={plan.completedWorks}
                  />
                  <InfoRow
                    label='Experiences'
                    value={plan.experience}
                  />
                  <InfoRow
                    label='Total Hours Worked'
                    value={plan.totalHoursWorked}
                  />
                </div>
                <div className='h-auto w-full'>
                  <ScheduleButton
                    label='Schedule Call'
                    darkIcon={calendarIcon}
                    lightIcon={calendarIconLight}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <MyStack />
        <ShowCase
          isMore={false}
          showData={4}
        />
        <Testimonials />
      </div>
    </div>
  );
}
