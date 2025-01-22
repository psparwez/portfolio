import { Undo2 } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex items-center justify-center h-full flex-col py-36 w-full'>
            <h2 className='text-7xl font-bold text-light-gray-3 mb-1' >404</h2>
            <p className='font-semibold text-light-gray-4 text-xl'> Page Not Found</p>
            <div className="my-10">
                <Link href="/" className='px-3 py-2 rounded-3xl bg-almost-black border border-border-color flex items-center gap-2 hover:bg-dark-gray-4 group transition-all w-min duration-500 flex-nowrap'>
                    <span className='text-light-gray-2 group-hover:text-light-gray-4 transition-all duration-500 whitespace-nowrap'>
                        <Undo2 size={17} />
                    </span>
                    <span className='text-light-gray-2 group-hover:text-light-gray-4 transition-all duration-500 whitespace-nowrap'>
                        Back to Home
                    </span>
                </Link>
            </div>
        </div>
    )
}