import React from 'react';
import Image from 'next/image';

const Vision = () => {
  return (
    <div className="flex flex-col bg-gray-400 relative">
      {/* OUR VISION */}
      <div className='flex w-full justify-center h-[70vh] text-center relative'>
        <div className='flex flex-row w-full h-full'>
          <div className='relative text-white w-1/2'>    
            <Image src="/images/homeimages/visionmission/vision.jpg" alt="Logo" layout='fill' objectFit='cover' className='h-[70vh] w-full rounded-r-full brightness-105 transition animate-pulse ease-in-out duration-150 opacity-150' />
          </div>
          <div className="flex flex-col justify-center text-center w-1/2 rounded-l-full">
            <div className="text-5xl text-white cursor-pointer font-bold py-5 underline">
              Our Vision
            </div>
            <div className="justify text-start text-xl px-10 text-white font-medium">
              To be the crucible for the futures 1% of the 1%—exceptional leaders who will architect a more equitable and educated society.
            </div>
          </div>
        </div>
      </div>      

      {/* OUR MISSION */}
      <div className='flex w-full justify-center h-[70vh] text-center relative'>
        <div className='flex flex-row w-full h-full'>
          <div className="flex flex-col justify-center text-center w-1/2 rounded-r-full" >
            <div className="text-5xl text-white hover:text-white cursor-pointer font-bold py-5 underline">
              Our Mission
            </div>
            <div className="justify text-start text-xl px-20 text-white font-medium">
              To raise the next generation of leaders by investing in the personal, financial, and leadership development of youths, fostering a culture of intellectual growth and patriotic service.
            </div>
          </div>
          <div className='relative text-white w-1/2'>    
            <Image src="/images/homeimages/visionmission/mission.jpg" alt="Logo" layout='fill' objectFit='cover' className='h-[70vh] w-full rounded-l-full brightness-105 transition animate-pulse ease-in-out duration-150 opacity-150' />
          </div>
        </div>
        <div className='absolute -top-24 h-48 w-48 flex justify-center items-center group'>
          <div className='relative flex justify-center items-center'>
            <div className='absolute hover:bg-[#0a0229] bg-[#ec2525] rotate-45 rounded-full h-48 w-48 outline-dotted border-4 border-dotted border-white animate-spin'></div>
            <div className='absolute text-white text-lg font-semibold'>Vision & Mission</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
