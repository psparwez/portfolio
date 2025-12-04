export default function loading() {
  return (
    <div className='fixed top-0 left-0 z-50 hidden min-h-screen! w-full lg:block'>
      <div className='flex w-full'>
        <div className='bg-almost-black h-screen w-full max-w-[13%] animate-pulse border-r'></div>
        <div className='bg-dark-gray-1 grow animate-pulse'></div>
        <div className='bg-almost-black h-screen w-full max-w-[13%] animate-pulse border-l'></div>
      </div>
    </div>
  );
}
