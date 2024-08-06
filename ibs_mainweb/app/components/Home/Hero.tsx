"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-row text-blue-900 h-full pb-20 pt-48 justify-between text-center'>
      <div className='pl-20 justify-start w-1.5/3 py-20'>
        <div className='flex flex-col justify-center text-center font-bold'>
          <div className='justify-start text-start text-4xl'>STARISE & BRAINETWORK</div>
          <div className='justify-start text-start text-3xl text-[#ec2525]'>INITIATIVE</div>
        </div>
        <div className='text-justify py-5 font-normal pr-10'>
          we are a forward-thinking non-governmental,
          organization committed to raising the next
          generation of leaders. Our conviction lies in 
          the power of self-investment, and we channel 
          this belief into action by creating a dynamic
          network of intellectuals, business-minded youths,
          and patriotic individuals.
        </div>
        <div className='relative bg-[#0a0229] cursor-pointer hover:bg-[#ec2525] w-48 text-center justify-center rounded-full p-4 text-white font-bold transition duration-300 ease-in-out'>
          <div className='relative flex'>
            Get Started
            <div className='absolute inset-0 flex justify-end items-center'>
              <div className='relative w-10 h-10 rounded-full bg-white flex justify-center items-center animate-pulse'>
                <span className='text-[#0a0229] font-bold'>{count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-1.5/3 flex justify-center items-center pt-4 pr-24 relative'>
        <div className='relative w-[600px] h-[500px]'>
          <Image src="/images/homeimages/brainnetworkrm.png" alt="Logo" layout='fill' objectFit='cover' className='animate-spin-slow'/>
        </div>
      </div>
    </div>
  );
}

export default Hero;
