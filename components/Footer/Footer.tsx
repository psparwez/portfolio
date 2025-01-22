import React from 'react'
import ThemeSwitcher from '../ui/ThemeSwitcher'

export default function Footer() {
    return (
        <footer className='bg-darkest-gray border-t border-border-color flex flex-col items-center flex-nowrap gap-[10px] h-min justify-center overflow-visible py-10 px-0 relative w-full '>
            <div className="items-center flex flex-none flex-col flex-nowrap gap-[10px] h-min justify-center overflow-hidden p-0 relative w-full  ">

                <div className="w-[80%] flex flex-nowrap flex-none h-min justify-center overflow-hidden p-0 relative ">
                    <div className="flex-shrink-0 flex justify-start flex-1 relative break-words whitespace-pre-wrap h-auto ">
                        <p className='text-lg text-light-gray-2 font-medium'>
                            &copy; {new Date().getFullYear()} Parwez. All rights reserved.
                        </p>
                    </div>

                    <div className="">
                        <ThemeSwitcher />
                    </div>

                </div>
            </div>

        </footer>
    )
}


