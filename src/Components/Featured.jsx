import React from 'react'

const Featured = () => {
  return (
    <div className='w-full py-28 bg-zinc-900 font-montreal pb-20'>
        <div className='w-full px-14 pb-14 border-b-[0.1px] border-zinc-700 '>
            <h1 className='text-[3vw] tracking-wide'>Featured Projects</h1>
        </div>


        <div className='w-full py-14'> 
            <div className='w-full px-14 flex gap-2'>
                <div className='relative cardcontainer w-1/2 h-[75vh] '>
                    <h1 className='absolute z-[6]  font-grotesk text-[7vw] top-1/2 left-full -translate-x-1/2 -translate-y-1/2 whitespace-nowrap leading-none text-[#CDEA68]'>CARDBOARD SPACESHIP</h1>
                    <div className='card w-full h-full  hover:scale-90 transition-all duration-700 ease-in-out rounded-lg overflow-hidden'>
                        <img className=' w-full h-full' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                    </div>
                </div>
                <div className='relative cardcontainer w-1/2 h-[75vh] '>
                    <h1 className='absolute z-6  font-grotesk text-[7vw] right-full translate-x-1/2 -translate-y-1/2 top-1/2 whitespace-nowrap leading-none text-[#CDEA68]'>FYDE</h1>
                    <div className='card w-full h-full hover:scale-90  transition-all duration-700 ease-in-out rounded-lg overflow-hidden'>
                         <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
