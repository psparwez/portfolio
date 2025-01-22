import React from 'react';

interface TooltipProps {
    content: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
}

export default function Tooltip({ content, position = 'right' }: TooltipProps) {
    return (
        <div
            className={`absolute z-10 invisible pointer-events-none group-hover:visible group-hover:flex items-center py-1.5 border border-border-color text-xs font-medium text-white bg-almost-black px-3 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 opacity-0 group-hover:opacity-100
            ${position === 'top' ? '-top-12 left-1/2  -translate-x-1/2 mb-2' :
                    position === 'bottom' ? 'top-full left-1/2 -translate-x-1/2 mt-2' :
                        position === 'left' ? 'right-full top-1/2 -translate-y-1/2 mr-2' :
                            'left-full top-1/2 -translate-y-1/2 ml-6'
                }
            ${position === 'right' ? 'transform translate-x-[-20px] group-hover:translate-x-0' : ''}
            ${position === 'left' ? 'transform translate-x-[20px] group-hover:-translate-x-4' : ''}
            ${position === 'top' ? 'transform translate-y-[20px] group-hover:translate-y-0' : ''}
            ${position === 'bottom' ? 'transform translate-y-[-20px] group-hover:translate-y-4' : ''}
            `}
            data-title="tooltip"
            aria-describedby="tooltip"
            role="tooltip"
        >
            {content}

            {/* Arrow */}
            <span
                className={`absolute w-4 h-4 bg-almost-black  border-border-color rotate-45 -z-10
                ${position === 'bottom' ? 'bottom-[75%] left-1/2 border-l border-t -translate-x-1/2' : ''}
                ${position === 'top' ? 'top-[65%] border-r border-b left-1/2 -translate-x-1/2' : ''}
                ${position === 'right' ? 'right-full border-l border-b -left-1.5 top-1/2 -translate-y-1/2' : ''}
                ${position === 'left' ? 'left-[90%] top-1/2 border-r border-t -translate-y-1/2' : ''}
                `}
            />
        </div>
    );
}
