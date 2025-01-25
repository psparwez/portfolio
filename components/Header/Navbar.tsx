"use client";
import React, { useEffect, useState } from "react";
import AvailableForWorkBtn from "../ui/AvailableForWorkBtn";
import { Equal, X } from "lucide-react";
import SideNavbar from "../SideNavbar/SideNavbar";

export default function Navbar() {
    const [time, setTime] = useState<string>("");

    const formatTime = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

    const convertTo12HourFormat = (hh: number): { hh: number; period: string } => {
        const period = hh >= 12 ? "PM" : "AM";
        hh = hh % 12;
        hh = hh ? hh : 12;
        return { hh, period };
    };

    const updateTime = () => {
        const today = new Date();
        const hh = today.getHours();
        const mm = today.getMinutes();
        const ss = today.getSeconds();
        const { hh: formattedHH } = convertTo12HourFormat(hh);

        const formattedTime = `${formatTime(formattedHH)}:${formatTime(mm)}:${formatTime(ss)}`;
        setTime(formattedTime);
    };

    useEffect(() => {
        updateTime();
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
        document.body.classList.toggle("overflow-hidden");
    };

    return (
        <>
        <nav className="p-6 border-b border-border-color">
            <div className="flex items-center justify-between">
                <AvailableForWorkBtn />
                <div className="hidden md:flex items-center gap-3">
                    <p className="text-light-gray-2 font-medium">Local Time ( IST )</p>
                    <div className="bg-dark-gray-1 border-[rgb(24,24,26)] p-[14px_18px] w-[110px] rounded-xl flex items-center justify-center">
                        <p className="text-light-gray-4 text-base leading-[1em] font-semibold tracking-[0.07em]">
                            {time}
                        </p>
                    </div>
                </div>
                <button
                onClick={toggleMenu}
                className="h-11 w-11 rounded-full bg-almost-black hover:bg-dark-gray-4 border-dark-gray-4 transition-all duration-500 cursor-pointer md:hidden relative z-[2000] flex items-center justify-center">
                    <span >
                      {
                        isMenuOpen? (
                          <X size={24} className="text-light-gray-3" />
                        ) : (
                          <Equal size={24} className="text-light-gray-3" />
                        )
                      }
                    </span>

                </button>
            </div>
        </nav>
          {/* SideNavbar for mobile*/}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleMenu}>
                <SideNavbar isMenuOpen={isMenuOpen}/>
            </div>
        )}
        </>
    );
}
