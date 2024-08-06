"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
// import ForwardArrowIcon from '@mui/icons-material/ForwardArrowRounded';


const Header: React.FC = () => {
  const router = useRouter();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Project', path: '/project' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];


  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="fixed top-0 w-full shadow-md bg-white z-10">
      <div className="flex px-10 justify-between items-center p-3 bg-[#0a0229] text-white">
        <div className=''>
          <div className="text-lg text-[#ec2525] font-bold"><b className='text-white'>Starise &</b> BrainNetwork Initiative</div>
          <div className="text-sm text-white font-normal">("Investing in Youth, Shaping the Future")</div>
        </div>       
        <div className='relative bg-[#ec2525] hover:bg-[#241464] cursor-pointer w-48 text-center justify-center rounded-md p-4 text-white font-bold transition duration-300 ease-in-out'>
          <div className='relative flex'>
            Get Started
            {/* <ForwardArrowIcon /> */}
            <div className='absolute inset-0 flex justify-end items-center'>
              <div className='relative w-10 h-10 rounded-full bg-white flex justify-center items-center animate-pulse'>
                <span className='text-[#0a0229] font-bold'>{count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center h-28 bg-white'>
        <div className="relative flex items-center justify-center bg-[#0a0229] h-28 w-1/6 overflow-hidden" 
            style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)' }}>
            <Image src="/images/logo2rm.png" alt="Logo" width={80} height={80} />
          <span className="font-bold text-5xl mr-5 text-white">SBI</span>
        </div>

        <div className='flex-1 flex justify-between items-center'>
          <nav className="flex gap-16 text-[#0a0229] items-center px-5 font-bold">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path}>
                <div className={router.pathname === item.path ? 'text-[#0a0229] bg-black' : 'hover:text-[#ec2525]'}>{item.name}</div>
              </Link>
            ))}
          </nav>

          <div className="pr-5">
            <SearchRoundedIcon className="cursor-pointer text-black h-10 w-10" />
          </div>
        </div>

        <div className="relative flex items-center justify-center gap-5 bg-[#ec2525] h-28 w-1/6" 
             style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 100%)' }}>
          <PhoneInTalkRoundedIcon className="text-white font-bold h-10 w-10" />
          <span className="text-white text-sm text-start">Chat Us Anytime <br /> 09021942611 <br /> 08057032838</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
