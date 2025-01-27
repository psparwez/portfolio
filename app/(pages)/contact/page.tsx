"use client"
import type React from "react"
import { emailIcon, questionMarkIcon } from "@/app/assets/assets"
import SectionHeading from "@/components/SectionHeading"
import { faqData } from "@/data"
import Button from "@/components/ui/Button"
import { Calendar1, Mail } from "lucide-react"
import ContactForm from "@/components/ContactForm/ContactForm"
import FAQ from "@/components/FAQ/FAQ"

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1 gap-0 h-min overflow-hidden p-0 relative w-full items-center justify-start">
      <div className="flex flex-col gap-[60px] w-full max-w-full px-5 lg:px-0 lg:max-w-[750px] lg:w-[80%] items-center p-[80px_0px]">
        <SectionHeading
          icon={emailIcon}
          title="I Love to hear from you."
          description="Connect with Me Today. Let's Create Something Amazing Together!"
        >
          <div className="w-full ">
            <div className="flex  items-start flex-none flex-nowrap  w-full gap-5 h-min justify-start p-0 relative">
              <Button position='left' className="w-min" icon={<Mail size={18} />} title='Email Me' />
              <Button position='left' className="w-min" icon={<Calendar1 size={18} />} title='Schedule Call' />
            </div>
          </div>
        </SectionHeading>

        <ContactForm />

        <SectionHeading
          icon={questionMarkIcon}
          title="Common Queries"
          description="Get Answers to Common Queries. Your Questions, Addressed Simply."
        />

        <FAQ data={faqData} />

      </div>
    </div>
  )
}

