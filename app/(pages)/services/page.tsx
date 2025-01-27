"use client"
import { calendarIcon, zapIcon } from '@/app/assets/assets'
import MyStack from '@/components/MyStack/MyStack'
import SectionHeading from '@/components/SectionHeading'
import ShowCase from '@/components/ShowCase'
import Testimonials from '@/components/Testimonials'
import { myServicesPlans } from '@/data'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import ScheduleButton from '@/components/ui/ScheduleButton'

export default function SearvicesPage() {
  return (
    <div className="flex flex-1 flex-col gap-0 h-min overflow-hidden p-0 relative w-w-full flex-nowrap items-center justify-start">
      <div className='gap-[60px] flex-col max-w-full w-full lg:max-w-[750px] px-5 lg:px-0 lg:w-[80%] flex-nowrap flex items-center flex-none h-min justify-center  relative overflow-visible p-[80px_0px]  ' >
        <SectionHeading icon={zapIcon} title='My Services' description='Formulating comprehensive strategies to meet your design goals and exceed expectations.' />

        <div className="flex-0 w-full gap-[10px] h-min grid justify-center overflow-visible p-0 relative grid-cols-1 lg:grid-cols-[repeat(2,minmax(50px,1fr))] lg:grid-rows-[repeat(2,min-content)] ">
          {myServicesPlans?.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              className="place-self-start h-auto w-full relative" key={plan.id}>
              <div className="rounded-xl flex flexFlow items-end place-items-end gap-5 h-min p-6 relative border bg-very-dark-gray border-dark-gray-3 ">

                <div className="flex flex-col gap-4 h-min p-0 relative w-full">
                  {/* Top Section */}
                  <div className="flex justify-between items-center h-min w-full">
                    {/* Left Section with Icon and Service */}
                    <div className="flex items-center gap-2 flex-1">
                      <div className="bg-dark-gray-3 border border-border-color rounded-lg flex items-center justify-center p-2 w-auto">
                        <div className="aspect-square w-[24px] h-[24px] overflow-hidden">
                          <Image
                            width={24}
                            height={24}
                            src={plan.icon}
                            alt="calendar"
                            className="object-cover object-center w-full h-full"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col flex-1 justify-start">
                        <p className="font-bold text-[20px] text-very-light-gray">
                          {plan.service}
                        </p>
                      </div>
                    </div>

                    {/* Right Section with Price */}
                    <div className="flex items-center gap-0">
                      <div className="flex flex-col justify-start">
                        <p className="text-light-gray-3 font-semibold text-[18px]">{plan.price}/</p>
                      </div>
                      <div className="flex flex-col justify-start">
                        <p className="text-light-gray-2 font-medium text-[14px]">hour</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section with Description */}
                  <div className="flex flex-col h-auto whitespace-pre-wrap w-full">
                    <p className="font-semibold text-[15px] text-light-gray-2">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 h-auto w-full rounded-xl border border-dark-gray-3 py-2">
                  <InfoRow label="Completed Works" value={plan.completedWorks} />
                  <InfoRow label="Experiences" value={plan.experience} />
                  <InfoRow label="Total Hours Worked" value={plan.totalHoursWorked} />
                </div>
                <div className="h-auto w-full">
                  <ScheduleButton label='Schedule Call' icon={calendarIcon} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <MyStack />
        <ShowCase isMore={false} showData={4} />
        <Testimonials />
      </div>

    </div>
  )
}

type InfoRowProps = {
  label: string;
  value: string | number;
};

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center last:border-transparent border-b border-dark-gray-3 py-2 px-4 w-full">
      <div className="flex-1">
        <p className="font-medium text-[15px] text-light-gray-2">
          {label}
        </p>
      </div>
      <div className="flex-1 text-right">
        <p className="font-bold text-[18px] text-light-gray-4">
          {value}
        </p>
      </div>
    </div>
  );
};
