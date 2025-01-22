import React from 'react';

const greenColor: string = "#6dd33d";

export default function AvailableForWorkBtn() {
    return (
        <button className="h-11 px-4 rounded-3xl bg-dark-gray-3 border border-border-color">
            <div className="flex items-center justify-center gap-3">
                <div
                    className="h-2 w-2 relative flex items-center justify-center rounded-full"
                    style={{ backgroundColor: greenColor }}
                >
                    <div
                        className="absolute w-3 h-3 rounded-full bg-green-400/30 animate-ping  pointer-events-none"
                    ></div>
                </div>
                <span className='text-sm flex-shrink-0 text-light-gray-3'>Available For Work</span>
            </div>
        </button>
    );
}
