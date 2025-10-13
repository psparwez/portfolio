import React from 'react'
import ThemeSwitcher from '../ui/ThemeSwitcher'

export default function Footer() {
    return (
        <footer className='bg-darkest-gray border-t border-border-color flex flex-col items-center flex-nowrap gap-[10px] h-min justify-center overflow-visible py-10 px-0 relative w-full ' aria-label="Main site footer">
            <div className="items-center flex flex-none flex-col flex-nowrap gap-[10px] h-min justify-center overflow-hidden p-0 relative w-full  ">

                <div className="w-[80%] flex flex-col-reverse sm:flex-row items-center sm:items-start gap-5 sm:gap-0 flex-nowrap flex-none h-min justify-center overflow-hidden p-0 relative ">
                    <div className="flex-shrink-0 flex justify-start flex-1 relative break-words whitespace-pre-wrap h-auto ">
                        <small className='text-base sm:text-lg text-light-gray-2 font-medium' aria-label={`Copyright ${new Date().getFullYear()} Parwez. All rights reserved.`}>
                            &copy; {new Date().getFullYear()} Parwez. All rights reserved.
                        </small>
                    </div>

                    {/* theme toggle */}
                    <ThemeSwitcher />
                </div>
            </div>

        </footer>
    )
}


