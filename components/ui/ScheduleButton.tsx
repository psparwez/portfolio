"use client"
import Image from "next/image";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface ScheduleButtonProps {
    icon: string;
    label: string;
}

export default function ScheduleButton({ icon, label }: ScheduleButtonProps) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <button
            data-cal-namespace="15min"
            data-cal-link="psparwez/15min"
            data-cal-config='{"layout":"month_view"}'
            className="bg-almost-black hover:bg-dark-gray-4 transition-all duration-300 rounded-[10px] border border-dark-gray-4 w-full flex gap-2 cursor-pointer items-center group justify-center p-[14px_18px] relative group"
        >
            <div className="flex items-center justify-center gap-2">
                {/* Icon */}
                <div className="aspect-square opacity-70 group-hover:opacity-100 transition-all duration-500 relative h-5 w-5 overflow-hidden">
                    <figure className="absolute inset-0 h-full w-full rounded-[inherit]">
                        <Image
                            src={icon}
                            alt="calendarIcon"
                            className="block w-full h-full object-cover object-center"
                            width={20}
                            height={20}
                        />
                    </figure>
                </div>

                {/* Text */}
                <div className="flex-none h-auto w-auto whitespace-pre opacity-70 flex-shrink-0 flex-col justify-start group-hover:opacity-100">
                    <p className="text-very-light-gray uppercase font-medium font-IBM_Plex_Mono leading-[100%] text-[15px]">
                        {label}
                    </p>
                </div>
            </div>
        </button>
    );
}
