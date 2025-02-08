import React from 'react'

const Cards = () => {
  return (
    <div className='w-full py-28 h-screen bg-zinc-900 font-montreal flex justify-center items-center'>
      <div className='cardcontainer w-full h-[50vh] px-14 flex gap-3'>
        <div className='relative card1 w-1/2 h-full bg-[#004D43] rounded-lg flex flex-col items-center'>
             <span className='absolute left-5 bottom-5'><button className=' px-3 py-2 rounded-full border-[#CDEA68] border-2 text-[#CDEA68] '>&copy;2019-2022</button></span>
             <img className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" /></div>
             
        <div className='card2 w-1/2 h-full flex gap-3 '>
            <div className='relative bg-[#ea6868] w-1/2 h-full rounded-lg' >
            <span className='absolute left-5 bottom-5'><button className=' px-3 py-2 rounded-full border-[#CDEA68] border-2 text-[#CDEA68] '>&copy;2019-2022</button></span>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" sizes="3" className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'/></div>
            <div className='relative bg-[#f5c801] w-1/2 h-full rounded-lg' >
                 <span className='absolute left-5 bottom-5'><button className=' px-3 py-2 rounded-full border-white  border-2 text-zinc-900 '>&copy;2019-2022</button></span>
                <img src="https://cdn.prod.website-files.com/5d816b07d269385f68dbcab0/5ea29a574423326d48ee3ee9_TFA-Hero-Badge-01-white.svg" alt="" className=' absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-[12vw] h-[12vw]' /></div>
        </div>
        
      </div>
    </div> 
  )
}

export default Cards
