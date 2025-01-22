import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
    icon?: React.ReactNode;
    title: string;
    onClick?: () => void;
    position?: 'left' | 'right';
    href?: string;
    className?: string;
}

export default function Button({
    icon,
    title,
    position = "left",
    className = "",
    onClick,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "bg-almost-black hover:bg-dark-gray-4 transition-all duration-300 rounded-[10px] border border-dark-gray-4 flex gap-[6px] cursor-pointer items-center flex-nowrap justify-center overflow-visible p-[14px_18px] relative group",
                position === "left" ? "flex-row" : "flex-row-reverse",
                !/w-(\S+)/.test(className) && "w-full",
                className
            )}
        >
            {icon && (
                <div>
                    <span className="opacity-70 text-very-light-gray">{icon}</span>
                </div>
            )}
            <div className="flex-none h-auto relative w-auto whitespace-pre opacity-70 flex-shrink-0 flex-col justify-start flex group-hover:opacity-100">
                <p className="text-very-light-gray uppercase font-medium font-IBM_Plex_Mono leading-[100%] text-[15px] whitespace-pre">
                    {title}
                </p>
            </div>
        </button>
    );
}
